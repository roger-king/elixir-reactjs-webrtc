import * as React from 'react';
import {SignupComponent as Signup} from './../../components';

export class SignupContainer extends React.Component <any, any> {
    render(){
        return(
            <div className="create-account-container">
                <Signup />
            </div>
        );
    }
}