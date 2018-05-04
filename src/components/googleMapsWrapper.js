import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';

import StoreLocator from './storeLocator';

class GoogleMapsWrapper extends Component {
    render () {
        return (
            <div>
                <br/>
                <p>Find a bookshop near you:</p>
                <br/>
                <StoreLocator google={this.props.google}/>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCuORe7LJmiLhy8sca6X3hbnpxBMXEuVCg',
  })(GoogleMapsWrapper);
