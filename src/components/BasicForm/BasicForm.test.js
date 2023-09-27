import React from 'react';
import ReactDOM from 'react-dom';
import BasicForm from './BasicForm';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BasicForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});