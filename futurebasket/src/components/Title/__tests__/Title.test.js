import React from 'react';

import renderer from 'react-test-renderer';

// import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Title from '../Title';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJSON from 'enzyme-to-json';
Enzyme.configure({ adapter: new Adapter() });
const { mount } = Enzyme;

describe('<Header />', () => {
  it('render correctly (snapshot)', () => {
    const app = { firstName: 'Future', lastName: 'basket' };
    const tree = renderer.create(<Title {...app} />);
    expect(toJSON(tree)).toMatchSnapshot();
  });

  it('render correctly using Enzyme (snapshot)', () => {
    const app = { firstName: 'Future', lastName: 'basket' };
    const tree = mount(<Title {...app} />);
    expect(toJSON(tree)).toMatchSnapshot();
  });
});
