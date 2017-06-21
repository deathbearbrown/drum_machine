import React from 'react';
import {connect} from 'react-redux';
import {isPlaying, getBPM, activeSequence, getAllSequenceNames} from '../../reducers/index';
import {startPlaying, stopPlaying} from '../../actions/playingAction';
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
      return dispatch(startPlaying());
    },
    stopPlaying: function(){
      return dispatch(stopPlaying());
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
    this.props.setBPM(event.target.value);
  }

  render() {
    let {
      playing,
      bpm,
      sequenceNames
    } = this.props;

    return (
      <div className='controls'>
        <button className={playing ? 'start on' : 'start' } onClick={this.setPlayStatus.bind(this, 'start')}>Start</button>
        <button className={playing ? 'stop' : 'stop on' } onClick={this.setPlayStatus.bind(this, 'stop')}>Stop</button>
        <span>
          <input
            type="number"
            min="1"
            max="2000" // rando max
            id="beatsPerMin"
            disabled={!!playing}
            value={bpm}
            name="tempo"
            onChange={this.handleTempoChange.bind(this)} />
          <label htmlFor="beatsPerMin">BPM</label>
        </span>
        <label htmlFor="sequence"> Select a sequence:</label>
        <select name="sequence" id="sequence" onChange={this.handleSelectChange.bind(this)}>
          {sequenceNames.map(sequence =>(
            <option key={'sequence_'+sequence} value={sequence}>{sequence}</option>
          ))}
        </select>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
