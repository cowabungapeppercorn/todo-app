import React from 'react';
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json';
import TodoList from './TodoList';

it('renders without crashing', () => {
  shallow(<TodoList />);
});

it('renders as expected', () => {
  let wrapper = mount(<TodoList />);
  wrapper.setState({
    todos: [
      {
        text: "yo",
        id: 5,
        editMode: false
      }, {
        text: "gabba",
        id: 12335,
        editMode: false
      }
    ]
  });
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});

it('deletes a todo on delete button click', () => {
  let wrapper = mount(<TodoList />);
  wrapper.setState({
    todos: [
      {
        text: "yo",
        id: 5,
        editMode: false
      }, {
        text: "gabba",
        id: 12335,
        editMode: false
      }
    ]
  });
  wrapper.find('button').first().simulate('click');
  expect(wrapper.state().todos.length).toEqual(1);
});

it('renders edit todo form on edit button click', () => {
  let wrapper = mount(<TodoList />);
  wrapper.setState({
    todos: [
      {
        text: "yo",
        id: 5,
        editMode: false
      }, {
        text: "gabba",
        id: 12335,
        editMode: false
      }
    ]
  });
  wrapper.find('button').at(1).simulate('click');
  expect(wrapper.html()).toContain('editing...');
});

it('renders edit todo form on edit button click', () => {
  let wrapper = mount(<TodoList />);
  wrapper.setState({
    todos: [
      {
        text: "yo",
        id: 5,
        editMode: true
      }
    ]
  });
  let editTodoInput = wrapper.find('input').at(2);
  editTodoInput.instance().value = 'flinstones';
  editTodoInput.simulate('change');
  let submitBtn = wrapper.find('button').first();
  submitBtn.simulate('submit');
  expect(wrapper.state().todos[0].text).toEqual('flinstones');
});