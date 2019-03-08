import React from 'react';
import { shallow , mount } from 'enzyme';

import SearchBar from '../src/client/views/Components/SearchBar/SearchBar';



  test('TodoComponent calls doneChange when todo is clicked', () => {

    window.alert = jest.fn();
    const wrapper  = mount(
      <SearchBar />
    );

    const p = wrapper.find('#goButton');
    p.simulate('click');
    expect(window.alert).toHaveBeenCalledWith("Please Enter A Location");
    
  });