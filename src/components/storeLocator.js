import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class StoreLocator extends Component {
    state = {
        currentLocation: {
            lat: 53.483959,
            lng: -2.244644
        }
    }

    componentDidMount() {
        if (this.props.centerAroundCurrentLocation) {
            if (navigator && navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(pos => {
                    const coords = pos.coords;
                    this.setState({
                        currentLocation: {
                            lat: coords.latitude,
                            lng:coords.longitude
                        }
                    })
                })
            }
        }
        this.loadMap();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
          this.loadMap();
        }
        if (prevState.currentLocation !== this.state.currentLocation) {
          this.recenterMap();
        }
      }

    loadMap() {
        if (this.props && this.props.google) {
        const {google} = this.props;
        const maps = google.maps;

        const mapRef = this.refs.map;
        const node = ReactDOM.findDOMNode(mapRef); 

        let {initialCenter, zoom} = this.props;
        const {lat, lng} = this.state.currentLocation;
        const mapConfig = Object.assign({}, {
            center: initialCenter,
            zoom: zoom
        })
        
        this.map = new maps.Map(node, mapConfig);
        }
    }

    recenterMap() {
        const map = this.map;
        const curr = this.state.currentLocation;
    
        const google = this.props.google;
        const maps = google.maps;
    
        if (map) {
            let center = new maps.LatLng(curr.lat, curr.lng)
            map.panTo(center)
        }
      }

    render() {
        const style = {
        width: '21vw',
        height: '20vh'
        }

        return (
        <div ref="map" style={style}>
            loading map...
        </div>
        )
    }
}

StoreLocator.defaultProps = {
    zoom: 13,
    initialCenter: {
        lat: 53.483959,
        lng: -2.244644
    },
    centerAroundCurrentLocation: true
}

export default StoreLocator;
