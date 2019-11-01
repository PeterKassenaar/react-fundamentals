import React, {Component} from 'react';
import {Alert} from "react-bootstrap";

class AlertComponent extends Component {
    render() {
        return (
            <div>
                <h1>AlertComponent</h1>
                <Alert variant={'primary'}>
                    This is an Alert Component by React Bootstrap, the variant type is set to 'primary'.
                </Alert>
                <Alert variant={'info'}>
                    This is an Alert Component by React Bootstrap, the variant type is set to 'info'.
                </Alert>
            </div>
        );
    }
}

export default AlertComponent;
