import React from 'react';
import ReactDOM from 'react-dom';
import LifeCycleUpdate from './LifeCycleUpdate';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LifeCycleUpdate />, div);
  ReactDOM.unmountComponentAtNode(div);
});