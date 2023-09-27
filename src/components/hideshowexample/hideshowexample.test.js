import React from 'react';
import ReactDOM from 'react-dom';
import Hideshowexample from './Hideshowexample';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hideshowexample />, div);
  ReactDOM.unmountComponentAtNode(div);
});