
import Hourly from '../src/client/views/Components/Hourly/Hourly';
import renderer from 'react-test-renderer';
import React from 'react';

import { weatherData } from "../testData/weatherData.sample"

test('Hourly component renders all hours', () => {

  const rendered = renderer.create(
    <Hourly weatherData={weatherData()}/>
  );
  expect(rendered.toJSON()).toMatchSnapshot();
});