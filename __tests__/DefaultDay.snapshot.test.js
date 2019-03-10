
import DefaultDay from '../src/client/views/Components/DefaultDay/DefaultDay';
import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { weatherData } from "../testData/weatherData.sample"

test('DefaultDay component renders all details', () => {
    const wData = weatherData();
    const rendered = renderer.create(
        <Router>
            <DefaultDay weatherData={wData} dailyWeather={wData.daily.data[0]} id={1} />
        </Router>
    );
    expect(rendered.toJSON()).toMatchSnapshot();
});