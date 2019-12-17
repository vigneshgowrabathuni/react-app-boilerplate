import React from 'react';
import { shallow } from 'enzyme';
import Home from '../components/Home';

describe("Home Component", () => {
    test("should render without crash", () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.exists()).toBe(true);
    });
});