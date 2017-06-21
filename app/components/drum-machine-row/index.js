import React from 'react';
import SelectBox from '../select-box';
import './style.css';

function typeName (type) {
  return type.replace('_', ' ');
}

export default function(props) {
  let {sequence, type, handleToggle} = props;

  return (
    <div className="row">
      <h2 className="typeLabel">{typeName(type)}</h2>
      <div className="interactive-row">
        { sequence.map( (beat, i) => (
          <SelectBox
            key={'selected_'+type+'_'+i}
            index={i}
            beat_type={type}
            handleToggle={handleToggle}
            selected={beat}/>
        ))}
      </div>
    </div>
  );
};

