import React from 'react';
import ReactDOM from 'react-dom';
import ComponentUnmount1 from './ComponentUnmount1';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ComponentUnmount1 />, div);
  ReactDOM.unmountComponentAtNode(div);
});