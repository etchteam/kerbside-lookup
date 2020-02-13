/* eslint-env node, jest */
/* global fetch */
import { h } from 'preact';
import { mount } from 'enzyme';
import Success from './index';

import kerbside from './__mocks__/kerbside';

describe('Success', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should render a title', (done) => {
    fetch.mockResponseOnce(JSON.stringify(kerbside));
    const wrapper = mount(
      <Success
        loadRoute={() => {}}
        locale="en"
        postcode=""
        material=""
        token=""
      />);

    expect(fetch.mock.calls.length).toBe(1);
    setTimeout(() => {
      console.log(wrapper.html());
      expect(wrapper.exists('h2')).toBe(true);
      done();
    }, 1000);
  });
});
