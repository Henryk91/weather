
import App from '../src/client/App';
import renderer from 'react-test-renderer';
import React from 'react';

test('History component renders with detaild and date checker', () => {

  const rendered = renderer.create(
    <App />
  );
  expect(rendered.toJSON()).toMatchSnapshot();
});