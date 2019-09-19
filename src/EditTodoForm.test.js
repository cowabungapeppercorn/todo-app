import React from 'react';
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json';
import EditTodoForm from './EditTodoForm';

it('renders without crashing', () => {
  shallow(<EditTodoForm />);
});

it('renders as expected', () => {
  let wrapper = mount(<EditTodoForm text='taco'/>);
  wrapper.instance().handleChange({
    target: {
      name: "text",
      value: "fix this bug"
    }
  });
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});