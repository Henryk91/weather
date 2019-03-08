import React from 'react';
import { shallow } from 'enzyme';

import History from '../src/client/views/Components/History/History';

function setup() {
 
    const wrapper = shallow(<History />);
    return { wrapper };
  }

  describe('WelcomeMessage Test Suite', () => {
    it('Should have a datePick button', () => {
      const { wrapper } = setup();
      expect(wrapper.find('#datePick').exists()).toBe(true);
    });
  });