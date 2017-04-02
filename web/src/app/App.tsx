"use stricts";

import * as React from "react";

interface AppProps {
    children: Object
}

export class App extends React.Component<AppProps, void>{
    constructor(props: AppProps){
        super(props);
        this.apiURL = "http://localhost:3000";
    }
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}