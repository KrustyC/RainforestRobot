import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './style';
import Commands from './Commands';

const App = () => (
  <div>
    <GlobalStyle />
    <Commands />
  </div>
);

ReactDOM.render(<App />, document.querySelector('#app'));
