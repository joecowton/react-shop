import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';

import headerBlock from '../src/index.js';

// test ('Render headerblock to page', () => {
//   const headerDiv = renderer.create(
//     <div class="headerDiv"></div>
//   );
//
//   let header = headerDiv.toJSON();
//   expect(header).toMatchSnapshot();
//
//
// });

describe ('Render Header block', () => {
  const wrapper = shallow(<headerBlock />);
  // expect(wrapper.find(headerBlock).render().find('.headerDiv')).to.have.length(1);
  expect(wrapper.contains(<div className="headerDiv"></div>)).to.equal(true);
})
