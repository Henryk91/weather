
import SearchBar from '../src/client/views/Components/SearchBar/SearchBar';
import renderer from 'react-test-renderer';
import React from 'react';


test('Searchbar component renders the header correctly', () => {
  const rendered = renderer.create(
    <SearchBar />
  );
  expect(rendered.toJSON()).toMatchSnapshot();
});