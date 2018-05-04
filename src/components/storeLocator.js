import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class StoreLocator extends Component {
  componentDidMount() {
    this.loadMap();
  }

  loadMap() {
    if (this.props && this.props.google) {
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef); 

      const mapConfig = Object.assign({}, {
        center: {lat: 53.483959, lng: -2.244644}, 
        zoom: 11, 
        mapTypeId: 'roadmap' 
      })

      this.map = new maps.Map(node, mapConfig);

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

export default StoreLocator;
