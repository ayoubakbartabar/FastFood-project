import React, { useState, useRef, useEffect } from "react";
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
  LocationSection
  const [loading, setLoading] = useState(true); // Loading state for map
  const [isMapVisible, setIsMapVisible] = useState(false); // Tracks if section is in viewport
  const sectionRef = useRef(null);

  useEffect(() => {
    // Create Intersection Observer to detect when section enters the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsMapVisible(true); // Trigger map load
          observer.disconnect(); // Stop observing once map is triggered
        }
      },
      { threshold: 0.2 } // Trigger when 20% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Function called when Google Map is fully loaded
  const handleMapLoad = () => {
    setTimeout(() => {
      setLoading(false); // Hide loading animation after small delay
    }, 1000);
  };

  return (
    <section className="location-section" ref={sectionRef}>
      {/* Loading animation */}
      {loading && isMapVisible && (
        <div
          className={`map-loading-wrapper ${loading ? "visible" : "hidden"}`}
        >
          <div className="spinner"></div>
          <p>Loading Map...</p>
        </div>
      )}

      {/* Render map only when section is visible */}
      {isMapVisible && (
        <LoadScript
          googleMapsApiKey="AIzaSyC7Quoik8cWwBpZDwqyED5ctTc5NEKSqLk"
          onLoad={handleMapLoad}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
            onLoad={handleMapLoad}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      )}
    </section>
  );
}
