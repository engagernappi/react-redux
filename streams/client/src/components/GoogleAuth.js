import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({ 
                clienteId: '278206218350-6kjeboheim6snup05pha64bmuq0sc2io.apps.googleusercontent.com',
                scope: 'email' 
            });
        });
    }

    render() {
        return (
            <div>GoogleAuth</div>
        );
    }
};

export default GoogleAuth;