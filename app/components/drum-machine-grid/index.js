import React from 'react';
import {connect} from 'react-redux';
import {activeSequence, getActiveSequence} from '../../reducers/index';
import {updateSequence} from '../../actions/sequenceAction';

import DrumMachineRow from '../drum-machine-row';

function mapStateToProps(reduxState, ownProps) {
  return {
    activeSequence: getActiveSequence(reduxState),
    active: activeSequence(reduxState)
   };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    updateBeats: function(sequence, beat_type, index, status){
      dispatch(updateSequence(sequence, beat_type, index, status));
    }
  };
}

class DrumMachineGrid extends React.Component {
  handleToggle (index, beat_type, status){
    const sequenceName = this.props.active;
    // terrible naming... too many args
    this.props.updateBeats(sequenceName, beat_type, index, status);
  }

  render() {
    const sequence = this.props.activeSequence;
    const handleToggle = this.handleToggle.bind(this);
    return (
      <div>
        { Object.keys(sequence).map( (beat_type, i) => (
          <DrumMachineRow
            key={beat_type + '_' + i}
            sequence={sequence[beat_type]}
            type={beat_type}
            handleToggle={handleToggle}
          />
        ))}
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DrumMachineGrid);
