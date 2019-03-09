import React from 'react';
import { mount } from 'enzyme';
import SearchBar from '../src/client/views/Components/SearchBar/SearchBar';

const wrapper = mount(<SearchBar />);

describe('SearchBar Component', () => {

  it('SearchBar gobutton should alert with no location', () => {
    window.alert = jest.fn();
    const p = wrapper.find('#goButton');
    p.simulate('click');
    expect(window.alert).toHaveBeenCalledWith("Please Enter A Location");
  });

  it('SearchBar geobutton should confirm before seaeching', () => {
    window.confirm = jest.fn();
    const p = wrapper.find('#geoButton');
    p.simulate('click');
    expect(window.confirm).toHaveBeenCalledWith("Allow location usage?");
  });

});