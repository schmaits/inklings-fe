import React from 'react';

class Marker extends React.Component {
    componentDidUpdate(prevProps) {
        if ((this.props.map !== prevProps.map) ||
          (this.props.position !== prevProps.position)) {
            this.renderMarker();
        }
      }

      renderMarker() {
        let {
          map, google, position, mapCenter
        } = this.props;
  
        let pos = position || mapCenter;
        position = new google.maps.LatLng(pos.lat, pos.lng);
  
        const pref = {
          map: map,
          position: position
        };
        this.marker = new google.maps.Marker(pref);
    }
    
    render() {
        console.log(this.props)
        return null;
    }
}

export default Marker;
