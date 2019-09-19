import React from 'react';
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json';
import Todo from './Todo';

it('renders without crashing', () => {
  shallow(<Todo />);
});

it('renders as expected', () => {
  let todoObj = {
    text: "yo",
    id: 5,
    editMode: false
  };
  let wrapper = mount(<Todo todoInfo={todoObj} />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
})