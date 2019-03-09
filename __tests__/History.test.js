import React from 'react';
import { mount } from 'enzyme';

import History from '../src/client/views/Components/History/History';

function setup() {
 
    const wrapper = mount( <History /> );
    return { wrapper };
  }

  describe('History component', () => {
    
    it('Should have a datePick button', () => {
      const { wrapper } = setup();
      expect(wrapper.find('#datePick').exists()).toBe(true);
    });

    it('Should alert if dateSubmit click without date info', () => {
      const { wrapper } = setup();
      window.alert = jest.fn();
      const p = wrapper.find('#dateSubmit');
      p.simulate('click');
      expect(window.alert).toHaveBeenCalledWith("Please Add A Date");
    });

    it('Should alert if dateSubmit click without location info', () => {
      const { wrapper } = setup();
      window.alert = jest.fn();
      const p = wrapper.find('#dateSubmit');
      wrapper.find('#datePick').instance().value =  '2019-01-01';
      p.simulate('click');
      expect(window.alert).toHaveBeenCalledWith("Please add location then press search or press the geo location button");
    });
    
  });
