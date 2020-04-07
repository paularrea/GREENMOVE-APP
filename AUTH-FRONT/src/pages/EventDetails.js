import React,{useState} from 'react'
//import {OpenStreetMapProvider,} from 'leaflet-geosearch';
import axios from 'axios'

function EventDetails() {
const [address, setAddress] = useState("")
const getAddress = async () => {
    await axios.get(`https://nominatim.openstreetmap.org/search.php?format=json&q=`).then(responseFromApi => {
        console.log(responseFromApi.data)
       this.setState({
         address: responseFromApi.data
       });
     });
   };
 
// const provider = new OpenStreetMapProvider();
// console.log(provider)
const handleFormSubmit = e => {
    e.preventDefault();
    address.search({ query: address })
    .then(results => {
        console.log(results); 
    })
    .catch(err =>{
        console.log(err);
    })
}

  return (
    <div> 
      <form onSubmit = {e => handleFormSubmit(e)}>
          <label>Search Address</label>
          <input name="address" value = {address} onChange = {e => setAddress(e.target.value)} type="text"></input>
          <button type = "submit">Search</button>
      </form>
    </div>
  )
}

export default EventDetails;