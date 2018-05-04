import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';

import StoreLocator from './storeLocator';
import Marker from './marker';

const bookshops = [
    {
        name: 'Waterstones',
        address: '91 Deansgate, Manchester M3 2BW',
        lat: 53.481721,
        long: -2.247242
    },
    {
        name: 'Waterstones',
        address: 'Manchester Arndale Shopping Centre, Market St, Manchester M4 3AQ',
        lat: 53.484005,
        long: -2.240209
    },
    {
        name: 'St Denys Bookshop',
        address: '10 Cateaton St, Manchester M3 1SQ',
        lat: 53.484722,
        long: -2.244685
    },
    {
        name: 'Paramount Books',
        address: '25-27 Shudehill, Manchester M4 2AF',
        lat: 53.484761,
        long: -2.239321
    },
    {
        name: 'Chapter One Books',
        address: 'Chatsworth House, 19 Lever St, Manchester M1 1BY',
        lat: 53.481913,
        long: -2.234986
    },
    {
        name: 'WHSmith',
        address: '33 Market St, Manchester M1 1WR',
        lat: 53.42845,
        long: -2.242261
    },
    {
        name: 'Magma',
        address: '24 Oldham St, Manchester M1 1JN',
        lat: 53.482667,
        long: -2.235330
    },
]

class GoogleMapsWrapper extends Component {
    state = {
        currentBookshop : {
            name: '',
            address: ''
        }
    }

    render () {
        return (
            <div>
                <br/>
                <p>Find a bookshop near you:</p>
                <br/>
                {this.state.currentBookshop.name === '' ? <div><br/><br/></div> : <div>
                        <p>{this.state.currentBookshop.name}</p>
                        <p>{this.state.currentBookshop.address}</p>
                    </div>}
                <StoreLocator google={this.props.google}>
                    <Marker/>
                    {bookshops.map(bookshop => {
                        return <Marker key={bookshop.lat + bookshop.long} position={{ lat: bookshop.lat, lng:bookshop.long }}/>
                    })}
                </StoreLocator>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCuORe7LJmiLhy8sca6X3hbnpxBMXEuVCg',
  })(GoogleMapsWrapper);
