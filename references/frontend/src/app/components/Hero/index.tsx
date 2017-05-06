import * as React from 'react';
import {Row, Col} from "react-bootstrap";

interface IHero {
    username: string
}

export class HeroComponent extends React.Component<IHero, void>{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Row>
                <Col sm={2}>
                    {this.props.username}
                </Col>
            </Row>
        );
    }
}