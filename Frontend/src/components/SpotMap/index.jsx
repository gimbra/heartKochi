import React, { useRef, useEffect } from 'react';

const SpotMap = ({ coordinates }) => {
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    // Check if the Google Maps API script is loaded
    if (!window.google || !window.google.maps) {
      console.error("Google Maps API is not loaded.");
      return;
    }

    // Initialize map options
    const mapOptions = {
      center: { lat: coordinates[1], lng: coordinates[0] }, // Note: Google Maps uses (lat, lng) format
      zoom: 15,
    };

    // Create map instance
    const map = new window.google.maps.Map(mapRef.current, mapOptions);

    // Create marker
    markerRef.current = new window.google.maps.Marker({
      position: { lat: coordinates[1], lng: coordinates[0] }, // Note: Google Maps uses (lat, lng) format
      map: map,
      title: 'Spot Location',
    });

    return () => {
      // Clean up marker when component unmounts
      if (markerRef.current) {
        markerRef.current.setMap(null);
      }
    };
  }, [coordinates]);

  return <div ref={mapRef} style={{ width: '400px', height: '400px' }}></div>;
};

export default SpotMap;
