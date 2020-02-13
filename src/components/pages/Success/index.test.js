/* eslint-env node, jest */
/* global fetch */

import { h } from 'preact';
import { mount } from 'enzyme';
import Success from './index';

describe('Success', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should render a title', () => {
    fetch.mockResponseOnce(JSON.stringify({ kerbside_collection: true }));
    const wrapper = mount(
      <Success
        loadRoute={() => {}}
        locale="en"
        postcode=""
        material=""
        token=""
      />);
    expect(fetch.mock.calls.length).toBe(1);
    expect(wrapper.exists('h2')).toBe(true);
  });
});
