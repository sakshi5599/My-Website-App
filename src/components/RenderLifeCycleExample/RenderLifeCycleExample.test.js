import React from 'react';
import ReactDOM from 'react-dom';
import RenderLifeCycleExample from './RenderLifeCycleExample';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RenderLifeCycleExample />, div);
  ReactDOM.unmountComponentAtNode(div);
});