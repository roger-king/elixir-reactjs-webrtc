import './navbar.component.scss';
import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Row, Col, Button, Popover } from 'antd';
import { LoginComponent as Login } from './../login/login.component';
import { INavbarProps, INavbarState } from './navbar.interface';

/**
 * NavbarComponent
 */

@inject('user_store')
@observer
export class NavbarComponent extends React.Component<any, INavbarState> {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false
        };

        this.doLogin = this.doLogin.bind(this);
        this.showLogin = this.showLogin.bind(this);
    }

    private doLogin(email: string, password: string) {
        this.props.user_store.login(email, password)
            .then((response) => {
                if (response.status === 201) {
                    this.props.transition.router.stateService.go('dashboard', {}, { reload: true });
                }
            });
    }

    showLogin(isLoggedIn): void {
        this.setState({ isLoggedIn });
    }

    render() {
        const loginContent = (
            <Login doLogin={this.doLogin} />
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
