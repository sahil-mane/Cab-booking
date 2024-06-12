// import React, { useState, useEffect } from "react";
import { GoogleApiWrapper } from "google-maps-react";

function Location(props) {
  console.log(props);

  // const latitude = props.latitude;
  // const longitude = props.longitude;

  // const [latituddes, setLatitudes] = useState(latitude);
  // const [longitudes, setLongitudes] = useState(longitude);

  // let map;
  // let marker;

  // useEffect(() => {
  //   const { google } = props;
  //   if (google) {
  //     map = new google.maps.Map(document.getElementById("map"), {
  //       center: { lat: 19.07609, lng: 72.877426 }, // Initial position
  //       zoom: 15, // Initial zoom level
  //     });
  //     marker = new google.maps.Marker({
  //       position: { lat: latituddes, lng: longitudes }, ///My position
  //       Map: map,
  //       title: "Mumbai",
  //       Animation: google.maps.Animation.DROP,
  //     });
  //     const infowindow = new google.maps.InfoWindow({
  //       Content: `You Are At Latitude : ${latituddes} And Longitude : ${longitudes}`,
  //     });
  //     infowindow.open(map, marker);
  //   }
  // }, [props]);

  // return (
  //   <>
  //     <div className="h-14 text-black  bg-white grid place-items-center text-2xl">
  //       <h1>Here You Can Fetch Your Location </h1>
  //     </div>
  //     <div style={{ width: "100%", height: "800px" }}>
  //       <div id="map" style={{ width: "100%", height: "590px" }} />
  //     </div>
  //   </>
  // );
}

export default GoogleApiWrapper({
  apiKey: "21/01/2024",
})(Location);
