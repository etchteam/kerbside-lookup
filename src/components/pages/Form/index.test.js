/* eslint-env node, jest */
/* global fetch */
import { h } from 'preact';
import { mount } from 'enzyme';
import Form from './index';

import materials from './__mocks__/materials';

describe('Form', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should render', () => {
    fetch.mockResponse(JSON.stringify(materials));
    const wrapper = mount(
      <Form
        loadRoute={() => {}}
        materials={[]}
        postcode=""
        button=""
        placeholder=""
        locale="en"
        token=""
        apihost="http://fakeapi.biz"
      />
    );
    expect(wrapper.exists('form')).toBe(true);
  });

  it('should render with a pre set postcode', () => {
    fetch.mockResponseOnce(JSON.stringify(materials));
    const wrapper = mount(
      <Form
        loadRoute={() => {}}
        materials={[]}
        postcode="SP5 1JL"
        button=""
        placeholder=""
        locale="en"
        token=""
        apihost="http://fakeapi.biz"
      />
    );
    expect(wrapper.exists('input[name="postcode"]')).toBe(false);
  });

  it('should render with a single pre set material', () => {
    fetch.mockResponseOnce(JSON.stringify(materials));
    const wrapper = mount(
      <Form
        loadRoute={() => {}}
        materials={['Cereal boxes']}
        postcode=""
        button=""
        placeholder=""
        locale="en"
        token=""
        apihost="http://fakeapi.biz"
      />
    );
    expect(wrapper.exists('select[name="material"]')).toBe(false);
  });

  it('should render with custom button text', () => {
    fetch.mockResponseOnce(JSON.stringify(materials));
    const wrapper = mount(
      <Form
        loadRoute={() => {}}
        materials={[]}
        postcode=""
        button="My button text"
        placeholder=""
        locale="en"
        token=""
        apihost="http://fakeapi.biz"
      />
    );
    expect(wrapper.find('button')).toMatchSnapshot();
  });

  it('should render with custom placeholder text', () => {
    fetch.mockResponseOnce(JSON.stringify(materials));
    const wrapper = mount(
      <Form
        loadRoute={() => {}}
        materials={[]}
        postcode=""
        button=""
        placeholder="My placeholder text"
        locale="en"
        token=""
        apihost="http://fakeapi.biz"
      />
    );
    expect(wrapper.exists('[placeholder="My placeholder text"]')).toBe(true);
  });
});
