import * as React from "react";
import * as Router from 'react-router';
import "./navbar.scss";
export class NavbarComponent extends React.Component<any, any>{
    constructor(){
        super();
    }

    render(){
        return(
            <nav className="navbar-container">
                <span className="link">Huddle</span>
            </nav>
        );
    }
}