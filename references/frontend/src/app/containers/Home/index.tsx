import * as React from 'react';
import {Login, Navbar} from './../../components';
import "./home.scss";

export class HomeContainer extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className="home-container">
                    <div className="card">
                    </div>
                </div>
            </div>
        );
    }
}