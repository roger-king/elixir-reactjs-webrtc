import './home.container.scss';
import * as React from 'react';
import { NavbarComponent as Navbar } from './../../components';

/**
 * HomeContainer
 */

export class HomeContainer extends React.Component<any, any> {
    render() {
        return (
            <div>
                <Navbar transition={this.props.transition} />
            </div>
        );
    }
}
