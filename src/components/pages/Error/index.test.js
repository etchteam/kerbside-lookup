import { mount } from 'enzyme';
import { h } from 'preact';

import ErrorPage from './index';

describe('Error', () => {
  it('should render a title', () => {
    const wrapper = mount(<ErrorPage loadRoute={() => {}} locale="en" />);
    expect(wrapper.exists('h2')).toBe(true);
  });

  it('should render a custom title', () => {
    const wrapper = mount(
      <ErrorPage title="custom" loadRoute={() => {}} locale="en" />
    );
    expect(wrapper.find('h2').text()).toBe('custom');
  });

  it('should render a custom message', () => {
    const wrapper = mount(
      <ErrorPage message="custom" loadRoute={() => {}} locale="en" />
    );
    expect(wrapper.find('p').first().text()).toBe('custom');
  });

  it('should have a back button', () => {
    const wrapper = mount(<ErrorPage loadRoute={() => {}} locale="en" />);
    expect(wrapper.find('button').first().text()).toBe('Search again');
  });
});
