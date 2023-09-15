/* eslint-env node, jest */

import { mount } from 'enzyme';

import App from './index';

describe('App', () => {
  it('should render a form', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('form')).toBeTruthy();
  });
});
