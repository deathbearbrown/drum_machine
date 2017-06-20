// Render the top-level React component
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import Main from './components/main';
import store from './store/index';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main/>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('react-root'));
