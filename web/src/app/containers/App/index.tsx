import * as React from 'react';
import {Grid, Row} from 'react-bootstrap';
import {Auth} from "../../actions/auth/index";

export class AppContainer extends React.Component<any, any> {
    constructor() {
        super();

        this.state = {
            redirected: false
        }
    }

    /*    componentDidMount(){
     let auth = new Auth();
     if(auth.isExpired() === false && this.state.redirected === false){
     //TODO: use react router for redirecting;
     this.state.redirected = true;
     window.location.href = '/login';
     }
     }*/

    render() {
        return (
            <section className="app-container">
                {this.props.children}
            </section>
        );
    }
}