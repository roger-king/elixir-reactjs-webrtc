import * as React from 'react';
import {Grid, Row} from 'react-bootstrap';

export class AppContainer extends React.Component<any, any> {
    render() {
        return (
            <section className="app-container">
                <Grid>
                    {this.props.children}
                </Grid>
            </section>
        );
    }
}