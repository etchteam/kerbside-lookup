/* eslint-env node, jest */

import { h } from 'preact';
import { mount } from 'enzyme';
import Form from './index';

describe('Form', () => {
  it('should render', () => {
    const wrapper = mount(
      <Form
        loadRoute={() => {}}
        materials={[]}
        postcode=""
        button=""
        placeholder=""
        locale="en"
        token=""
      />
    );
    expect(wrapper.exists('form')).toBe(true);
  });

  it('should render with a pre set postcode', () => {
    const wrapper = mount(
      <Form
        loadRoute={() => {}}
        materials={[]}
        postcode="SP5 1JL"
        button=""
        placeholder=""
        locale="en"
        token=""
      />
    );
    expect(wrapper.exists('input[name="postcode"]')).toBe(false);
  });

  it('should render with a single pre set material', () => {
    const wrapper = mount(
      <Form
        loadRoute={() => {}}
        materials={['Cereal boxes']}
        postcode=""
        button=""
        placeholder=""
        locale="en"
        token=""
      />
    );
    expect(wrapper.exists('select[name="material"]')).toBe(false);
  });

  it('should render with custom button text', () => {
    const wrapper = mount(
      <Form
        loadRoute={() => {}}
        materials={[]}
        postcode=""
        button="My button text"
        placeholder=""
        locale="en"
        token=""
      />
    );
    expect(wrapper.find('button')).toMatchSnapshot();
  });

  it('should render with custom placeholder text', () => {
    const wrapper = mount(
      <Form
        loadRoute={() => {}}
        materials={[]}
        postcode=""
        button=""
        placeholder="My placeholder text"
        locale="en"
        token=""
      />
    );
    expect(wrapper.exists('[placeholder="My placeholder text"]')).toBe(true);
  });
});
