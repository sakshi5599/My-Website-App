import React from 'react';
import ReactDOM from 'react-dom';
import Student from './Student';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Student />, div);
  ReactDOM.unmountComponentAtNode(div);
});