import { mount } from 'enzyme';
import { h } from 'preact';

import kerbside from './__mocks__/kerbside';
import noKerbside from './__mocks__/no_kerbside';

import Success from './index';

describe('Success', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should start in a loading state', () => {
    const wrapper = mount(
      <Success
        loadRoute={() => {}}
        locale="en"
        postcode=""
        material=""
        token=""
      />
    );

    expect(wrapper.exists('.klw-loading')).toBe(true);
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
      />
    );

    expect(fetch.mock.calls.length).toBe(1);
    process.nextTick(() => {
      wrapper.update();
      expect(wrapper.exists('h2')).toBe(true);
      done();
    });
  });

  it('should render a the kerbside block', (done) => {
    fetch.mockResponseOnce(JSON.stringify(kerbside));
    const wrapper = mount(
      <Success
        loadRoute={() => {}}
        locale="en"
        postcode=""
        material=""
        token=""
      />
    );

    process.nextTick(() => {
      wrapper.update();
      expect(wrapper.find('h2').text()).toBe('Good news!');
      expect(wrapper.find('.klw-list__item').length).toBe(2);
      done();
    });
  });

  it('should render a the no kerbside block', (done) => {
    fetch.mockResponseOnce(JSON.stringify(noKerbside));
    const wrapper = mount(
      <Success
        loadRoute={() => {}}
        locale="en"
        postcode=""
        material=""
        token=""
      />
    );

    process.nextTick(() => {
      wrapper.update();
      expect(wrapper.find('h2').text()).toBe('Unfortunately...');
      expect(wrapper.find('li').length).toBe(5);
      done();
    });
  });
});
