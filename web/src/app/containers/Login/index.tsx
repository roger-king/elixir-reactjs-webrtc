import * as React from 'react';
import {Login, Navbar} from './../../components';
import "./login.container.scss";

export class LoginContainer extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className="home-container">
                    <div className="card">
                        <Login/>
                    </div>
                </div>
            </div>
        );
    }
}