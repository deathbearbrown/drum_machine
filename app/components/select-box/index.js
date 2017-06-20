// Possibly bad logic. I don't want the parent to draw...
import React from 'react';
import './style.css';
import {connect} from 'react-redux';

function mapStateToProps(reduxState, ownProps) {
  return {
    beat_index: reduxState.playing.beat_index, //TODO clean this up to match convention of redux getters
    isPlaying: reduxState.playing.on
  };
}

function mapDispatchToProps(dispatch, ownProps) {
 return {};
}

class SelectBox extends React.Component {
  render () {
    let { selected, index, beat_type, handleToggle, beat_index , isPlaying} = this.props;
    let className = 'box ';
    if (selected === 1){
      className += ' selected';
    }
    if (beat_index === index && isPlaying) {
      className += ' on';
    }
    return (
      <div className={className}
           onClick={handleToggle.bind(this, index, beat_type, !selected)}>
      </div>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SelectBox);
