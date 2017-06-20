import React from 'react';
import {connect} from 'react-redux';
import {isPlaying, getBPM, activeSequence, getAllSequenceNames} from '../../reducers/index';
import {updatePlaying} from '../../actions/playingAction';
import {updateActiveSequence} from '../../actions/activeSequenceAction';
import {updateBPM} from '../../actions/bpmAction';

import './style.css';

function mapStateToProps(reduxState, ownProps) {
  return {
    playing: isPlaying(reduxState),
    activeSequence: activeSequence(reduxState),
    sequenceNames: getAllSequenceNames(reduxState),
    bpm: getBPM(reduxState)
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    startPlaying: function(){
      return dispatch({ type: 'START_PLAYING', currentTime: Date.now() });
    },
    stopPlaying: function(){
      return dispatch({ type: 'STOP_PLAYING' });
    },
    setSequence: function(sequenceId) {
      return dispatch(updateActiveSequence(sequenceId));
    },
    setBPM: function(bpm){
      return dispatch(updateBPM(bpm));
    }
  };
}

class Controls extends React.Component {

  setPlayStatus(action) {
    this.props[action+'Playing']();
  }

  handleSelectChange(event) {
    this.props.setSequence(event.target.value);
  }

  handleTempoChange(event) {
    // this should have validation but I don't have time
    // TODO PUT SOME VISUAL CUES FOR VALIDATION IN THE TEMPLATE
    if (/^[1-9][\d]*$/.test(event.target.value)){
      this.props.setBPM(event.target.value);
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.setPlayStatus.bind(this, 'start')}>Start</button>
        <button onClick={this.setPlayStatus.bind(this, 'stop')}>Stop</button>
        <span>
          <input
            type="text"
            id="beatsPerMin"
            disabled={!!this.props.playing}
            value={this.props.bpm}
            name="tempo"
            onChange={this.handleTempoChange.bind(this)} />
          <label htmlFor="beatsPerMin">BPM</label>
        </span>
        <label htmlFor="sequence"> Select a sequence:</label>
        <select name="sequence" id="sequence" onChange={this.handleSelectChange.bind(this)}>
          {this.props.sequenceNames.map(sequence =>(
            <option key={'sequence_'+sequence} value={sequence}>{sequence}</option>
          ))}
        </select>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
