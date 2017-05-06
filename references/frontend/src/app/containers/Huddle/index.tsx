import * as React from 'react';
import {Hero} from './../../components';
import {User} from "../../actions";
import {Col, Row} from "react-bootstrap";

export class HuddleContainer extends React.Component<any, any> {
    constructor() {
        super();

        this.state = {
            username: new User().getUser()
        }
    }

    render() {
        console.log('', this.state.username);
        return (
            <Row>
                <Col sm={2}>
                    <Hero username={this.state.username}></Hero>
                </Col>
            </Row>
        );
    }

}