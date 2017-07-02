import * as React from 'react';
import * as ReactDom from 'react-dom';
import {mount, render} from 'enzyme';
import * as TestUtils from 'react-addons-test-utils';
import * as ReactTestUtils from 'react-dom/test-utils';
import {expect, assert} from 'chai';
import { LoginContainer as Login } from './login.container';

describe('<Login/>', function () {
    let wrapper;

    beforeEach(function () {
        wrapper = mount(<Login/>);
    });

    it('should render correctly', () => {
        assert(wrapper.type, 'div');
    });
});
