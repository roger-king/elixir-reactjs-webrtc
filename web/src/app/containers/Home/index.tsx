import * as React from 'react';
import {Login} from './../../components';

export class HomeContainer extends React.Component<any, any>{
    constructor(props){
        super(props);
    }

    render(){
        return(
          <Login/>
        );
    }
}