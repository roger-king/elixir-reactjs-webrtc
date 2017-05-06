import * as React from 'react';
import { connect } from 'react-redux';
import {Login, Navbar} from './../../components';
import "./login.container.scss";
import {loginUser} from "../../reducer/auth/action";


interface ILoginProps extends React.Props<Container> {
    session: any,
    login: () => void;
}

function mapStateToProps (state){
    return {
        session: state.session
    }
}

function mapDispatchToProps(dispatch){
    return{
        login: () => dispatch(loginUser())
    }
}
class Container extends React.Component<ILoginProps, void> {
    constructor(props) {
        super(props);
    }

    render() {
        const { session, login } = this.props;
        return (
            <div>
                <Navbar/>
                <div className="home-container">
                    <div className="card">
                        <Login hasError={false} onSubmit={login} submitting={false}/>
                    </div>
                </div>
            </div>
        );
    }
}

export let LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Container as any);
