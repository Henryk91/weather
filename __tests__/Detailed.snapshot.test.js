
import Detailed from '../src/client/views/Components/Detailed/Detailed';
import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { weatherData } from "../testData/weatherData.sample"

test('Detailed component renders all details', () => {

    const rendered = renderer.create(
        <Router>
                <Detailed weatherData={weatherData()} />
        </Router>
    );
    expect(rendered.toJSON()).toMatchSnapshot();
});