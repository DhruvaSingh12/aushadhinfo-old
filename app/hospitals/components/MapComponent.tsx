"use client";

import React, { useState, useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import Head from 'next/head'; 

const MapboxExample: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  const [lightPreset, setLightPreset] = useState('day');
  const [showPlaceLabels, setShowPlaceLabels] = useState(true);
  const [showPOILabels, setShowPOILabels] = useState(true);
  const [showRoadLabels, setShowRoadLabels] = useState(true);
  const [showTransitLabels, setShowTransitLabels] = useState(true);
  const [styleLoaded, setStyleLoaded] = useState(false);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFoaXIyOCIsImEiOiJjbHo1dHl4YTkzdTJ4MmtxczNiMnh5ZmRwIn0.vw2lN4zHIjvMiUQuM5iOqA';

    if (mapContainerRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        center: [77.1025, 28.7041],
        zoom: 15.1,
        pitch: 62,
        bearing: -20
      });

      mapRef.current.on('style.load', () => {
        setStyleLoaded(true);

        mapRef.current?.addSource('line', {
          type: 'geojson',
          lineMetrics: true,
          data: {
            type: 'Feature',
            geometry: {
              type: 'LineString',
              coordinates: [
                [2.293389857555951, 48.85896319631851],
                [2.2890810326441624, 48.86174223718291]
              ]
            },
            properties: {}
          }
        });

        mapRef.current?.addLayer({
          id: 'line',
          source: 'line',
          type: 'line',
          paint: {
            'line-width': 12,
            'line-emissive-strength': 0.8,
            'line-gradient': [
              'interpolate',
              ['linear'],
              ['line-progress'],
              0,
              'red',
              1,
              'blue'
            ]
          }
        });
      });
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (!styleLoaded || !mapRef.current) return;

    mapRef.current.setConfigProperty('basemap', 'lightPreset', lightPreset);
    mapRef.current.setConfigProperty(
      'basemap',
      'showPlaceLabels',
      showPlaceLabels
    );
    mapRef.current.setConfigProperty(
      'basemap',
      'showPointOfInterestLabels',
      showPOILabels
    );
    mapRef.current.setConfigProperty(
      'basemap',
      'showRoadLabels',
      showRoadLabels
    );
    mapRef.current.setConfigProperty(
      'basemap',
      'showTransitLabels',
      showTransitLabels
    );
  }, [
    lightPreset,
    showPlaceLabels,
    showPOILabels,
    showRoadLabels,
    showTransitLabels,
    styleLoaded 
  ]);

  return (
    <>
      <div ref={mapContainerRef} className="w-full h-full" />
      <div className="absolute p-2 bottom-8 right-10 overflow-auto bg-neutral-200/45 text-black shadow-md rounded-md">
        <div className="mb-4 top-15 left-15">
          <label className="block font-bold mb-2">
            Select light preset
            <select
              id="lightPreset"
              name="lightPreset"
              value={lightPreset}
              onChange={(e) => setLightPreset(e.target.value)}
              className="mt-1 block w-full border bg-neutral-300/45 border-gray-300 rounded-md"
            >
              <option value="dawn">Dawn</option>
              <option value="day">Day</option>
              <option value="dusk">Dusk</option>
              <option value="night">Night</option>
            </select>
          </label>
        </div>
        <div className="mb-4">
          <label className="block rounded-md font-bold mb-2">
            Show place labels
            <input
              type="checkbox"
              id="showPlaceLabels"
              checked={showPlaceLabels}
              onChange={(e) => setShowPlaceLabels(e.target.checked)}
              className="ml-2"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block rounded-md font-bold mb-2">
            Show POI labels
            <input
              type="checkbox"
              id="showPointOfInterestLabels"
              checked={showPOILabels}
              onChange={(e) => setShowPOILabels(e.target.checked)}
              className="ml-2"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block rounded-md font-bold mb-2">
            Show road labels
            <input
              type="checkbox"
              id="showRoadLabels"
              checked={showRoadLabels}
              onChange={(e) => setShowRoadLabels(e.target.checked)}
              className="ml-2"
            />
          </label>
        </div>
        <div>
          <label className="block rounded-md font-bold mb-2">
            Show transit labels
            <input
              type="checkbox"
              id="showTransitLabels"
              checked={showTransitLabels}
              onChange={(e) => setShowTransitLabels(e.target.checked)}
              className="ml-2"
            />
          </label>
        </div>
      </div>
      <Head>
        <link href="https://api.mapbox.com/mapbox-gl-js/v3.6.0/mapbox-gl.css" rel="stylesheet" />
        <script src="https://api.mapbox.com/mapbox-gl-js/v3.6.0/mapbox-gl.js" defer></script>
      </Head>
    </>
  );
};

export default MapboxExample;
