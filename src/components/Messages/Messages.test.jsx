import React from 'react';

import { shallow } from 'enzyme';
// import { snapshot } from 'react-test-renderer';

import Messages from './Messages.jsx';

const socket = {
  on: jest.fn(),
  emit: jest.fn(),
};

const store = {
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: jest.fn(() => ({
    ui: { style: 'TEST' },
    chat: { messages: [] },
  })),
};

describe('MessageList', () => {
  it('matches snapshot', () => {
    const component = shallow(<Messages store={store} socket={socket} />);
    expect(component).toMatchSnapshot();
  });
});