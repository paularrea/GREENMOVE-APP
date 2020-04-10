import React from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
mapboxgl.accessToken = 'pk.eyJ1Ijoic3dpcDk0IiwiYSI6ImNrOHNyYXltNjAyNmczZ3Bzcmd2bXVvZTYifQ.nF1CjPtUo-PD-8-ym1QDkw';
class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    lng: 5,
    lat: 34,
    zoom: 2,
    coordinates:"" 
    };
    }
    componentDidMount() {
      const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
      
      });
      
      map.on('move', () => {
        this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
        },()=>this.props.updateLatLng([Number(this.state.lat),Number(this.state.lng)]));
        });
        var geocoder = new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl: mapboxgl
          });
          map.addControl(geocoder);    
      }
      render() {
        return (
        <div>
        <div className='sidebarStyle'>
        <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
        </div>
        <div ref={el => this.mapContainer = el} className='mapContainer' />
        </div>
        )
        }
    }  
  export default Map;