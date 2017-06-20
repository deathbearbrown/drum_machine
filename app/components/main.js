import React from 'react';
import './main.css';

import Controls from './controls';
import DrumMachineGrid from './drum-machine-grid';

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <h1>JS-808</h1>
        <Controls/>
        <DrumMachineGrid/>
      </div>
    );
  }
};

export default Main;
