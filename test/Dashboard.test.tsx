import React from 'react';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../src/App';
import Dashboard from '../src/components/Dashboard/Dashboard';

test('renders without crashing', () => {
  const component = shallow(<Dashboard />);
  expect(component).toMatchSnapshot();
});
