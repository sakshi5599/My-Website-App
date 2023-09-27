import React from 'react';
import ReactDOM from 'react-dom';
import Child from './Child';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Child />, div);
  ReactDOM.unmountComponentAtNode(div);
});