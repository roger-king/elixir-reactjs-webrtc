"use stricts";

import * as React from "react";

export class App extends React.Component<void, void>{
    render(){
        return(
            <div className="app-container">
                {this.props.children}
            </div>
        )
    }
}