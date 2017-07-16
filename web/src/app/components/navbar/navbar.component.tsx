import './navbar.component.scss';
import * as React from 'react';
import { Row, Col, Button, Popover } from 'antd';
import { LoginComponent as Login } from './../login/login.component';

/**
 * NavbarComponent
 */

export class NavbarComponent extends React.Component<any, any> {
    constructor() {
        super();
        this.state = {
            isLoggingIn: false
        };

        this.showLogin = this.showLogin.bind(this);
    }

    showLogin(isLoggingIn): void {
        this.setState({ isLoggingIn });
    }

    render() {
        const loginContent = (
            <Login />
        );

        return (
            <Row className="navbar-wrapper" type="flex" justify="space-between">
                <Col className="navbar-inner navbar-inner-right" span={12}>
                    <h1> Huddle </h1>
                </Col>
                <Col className="navbar-inner navbar-inner-right" span={12}>
                    <Popover placement="bottomLeft" title="Login" content={loginContent} trigger="click">
                        <Button className="login-popup-btn">Login</Button>
                    </Popover>
                </Col>
            </Row>
        );
    }
}
