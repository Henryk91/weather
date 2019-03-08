
import History from '../src/client/views/Components/History/History';
import renderer from 'react-test-renderer';
import React from 'react';

import { weatherData } from "../testData/weatherData.sample"

test('History component renders with detaild and date checker', () => {

  const rendered = renderer.create(
    <History weatherData={weatherData()}/>
  );
  expect(rendered.toJSON()).toMatchSnapshot();
});