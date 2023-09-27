import React from 'react';
import ReactDOM from 'react-dom';
import ComponentUnmount from './ComponentUnmount';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ComponentUnmount />, div);
  ReactDOM.unmountComponentAtNode(div);
});