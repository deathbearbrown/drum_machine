import React from 'react';
import SelectBox from '../select-box';
import './style.css';

function typeName (type) {
  return type.replace('_', ' ');
}

export default function(props) {
  const sequence = props.sequence;

  return (
    <div className="row">
      <h2 className="typeLabel">{typeName(props.type)}</h2>
      <div className="interactive-row">
        { sequence.map( (beat, i) => (
          <SelectBox
            key={'selected_'+props.type+'_'+i}
            index={i}
            beat_type={props.type}
            handleToggle={props.handleToggle}
            selected={beat}/>
        ))}
      </div>
    </div>
  );
};

