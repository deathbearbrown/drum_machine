// Possibly bad logic. I don't want the parent to draw...
import React from 'react';
import {connect} from 'react-redux';
import {isPlaying, getBeatIndex} from '../../reducers/index';

import './style.css';

function mapStateToProps(reduxState, ownProps) {
  return {
    beat_index: getBeatIndex(reduxState),
    isPlaying: isPlaying(reduxState)
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
