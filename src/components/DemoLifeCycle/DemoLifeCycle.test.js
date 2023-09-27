import React from 'react';
import ReactDOM from 'react-dom';
import DemoLifeCycle from './DemoLifeCycle';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoLifeCycle />, div);
  ReactDOM.unmountComponentAtNode(div);
});