import React from 'react';

import renderer from 'react-test-renderer';

// import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Profile from '../Profile';
import APP from '../../../config/app.config';

import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJSON from 'enzyme-to-json';
Enzyme.configure({ adapter: new Adapter() });
const { mount } = Enzyme;

describe('<Profile />', () => {
  it('render correctly using Enzyme (snapshot) for Desktop', () => {
    const tree = mount(<Profile id={APP.DESKTOP_ID} />);
    expect(toJSON(tree)).toMatchSnapshot();
  });

  it('render correctly using Enzyme (snapshot) for Mobile', () => {
    const tree = mount(<Profile id={APP.MOBILE_ID} />);
    expect(toJSON(tree)).toMatchSnapshot();
  });
});
