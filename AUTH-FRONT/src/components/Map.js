import React, { Component } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
class Mapa extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    
  console.log(this.props)
    let position =  this.props.coordinates.length>0 ? this.props.coordinates : [41.3887901, 2.1589899]
    const icon = L.icon({
        iconUrl: require(`../img/map-marker-alt-solid.svg`),
        iconSize: [24, 36],
        iconAnchor: [12, 36],
        popupAnchor: [0, -25]
      });

    return (
      <div>
        <Map center={position} zoom={25} >
          <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          { position && <Marker position={position} icon= {icon} draggable={true} onDragend={e=> this.props.updateCoordinates(e)}>
            <Popup >
            {this.props.title}<br />{this.props.duration}
            </Popup>
          </Marker>}
        </Map>
      </div>
    )
  }
}
export default Mapa;
