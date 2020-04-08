import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";



const  Mapa = (props) => {
console.log(props, 'PROPS')
let position = [41.3887901, 2.1589899]

const icon = L.icon({
  iconUrl: require(`../img/map-marker-alt-solid.svg`),
  iconSize: [24, 36],
  iconAnchor: [12, 36],
  popupAnchor: [0, -25]
});

  return (
    <div className="mapa">
    <Map center={props.coordinates.length>0 ? props.coordinates : position} zoom={25}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
    />
    
    <Marker draggable={true} icon= {icon} position={props.coordinates.length>0 ? props.coordinates : position}>
      <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
    </Marker>
    
  </Map>
  
    </div>
  );
}
export default Mapa
