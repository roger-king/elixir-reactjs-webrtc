"use strict";
import * as React from "react";
import {Col} from "react-bootstrap";
import './app.scss';

export class App extends React.Component<void, void>{
    render(){
        return(
            <section className="app-container">
                <Col xs={12} md={8}>
                    {this.props.children}
                </Col>
            </section>
        )
    }
}