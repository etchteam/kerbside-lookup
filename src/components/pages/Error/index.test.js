/* eslint-env node, jest */

import { h } from 'preact';
import { mount } from 'enzyme';
import Error from './index';

describe('Error', () => {
  it('should render a title', () => {
    const wrapper = mount(<Error loadRoute={() => {}} locale="en" />);
    expect(wrapper.exists('h2')).toBe(true);
  });

  it('should render a custom title', () => {
    const wrapper = mount(<Error title="custom" loadRoute={() => {}} locale="en" />);
    expect(wrapper.find('h2').text()).toBe('custom');
  });

  it('should render a custom message', () => {
    const wrapper = mount(<Error message="custom" loadRoute={() => {}} locale="en" />);
    expect(wrapper.find('p').first().text()).toBe('custom');
  });

  it('should have a back button', () => {
    const wrapper = mount(<Error loadRoute={() => {}} locale="en" />);
    expect(wrapper.find('button').first().text()).toBe('Search again');
  });
});
