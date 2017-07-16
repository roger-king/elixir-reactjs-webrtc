import * as React from 'react';
import * as ReactDom from 'react-dom';
import {mount, render} from 'enzyme';
import * as TestUtils from 'react-addons-test-utils';
import * as ReactTestUtils from 'react-dom/test-utils';
import {expect, assert} from 'chai';
import { NavbarComponent as Navbar } from './navbar.component';

describe('<Navbar/>', function () {
    let wrapper;

    beforeEach(function () {
        wrapper = mount(<Navbar/>);
    });

    it('should render correctly', () => {
        assert(wrapper.type, 'div');
    });
});
