
import Home from '../src/client/views/Components/Home/Home';
import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { weatherData } from "../testData/weatherData.sample"

test('Home component renders with summary and defaultday', () => {

  const rendered = renderer.create(
    <Router>
                <Home weatherData={weatherData()} />
        </Router>
  );
  expect(rendered.toJSON()).toMatchSnapshot();
});