import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./LocationSection.css";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 40.6782,
  lng: -73.775,
};

export default function LocationSection() {
  return (
    <section className="location-section">
      <LoadScript googleMapsApiKey="AIzaSyC7Quoik8cWwBpZDwqyED5ctTc5NEKSqLk">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </section>
  );
}
