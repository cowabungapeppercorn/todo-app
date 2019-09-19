import React from 'react';
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json';
import NewTodoForm from './NewTodoForm';

it('renders without crashing', () => {
  shallow(<NewTodoForm />);
});

it('renders as expected', () => {
  let wrapper = mount(<NewTodoForm />);
  wrapper.setState({
    text: "",
    editMode: false
  });
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});