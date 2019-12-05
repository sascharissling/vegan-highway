import React from "react";
import styled from "@emotion/styled";
import mapboxgl from "mapbox-gl";

const MapContainer = styled.div`
  width: 90%;
  height: 50%;
`;

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FzY2hhdmlubyIsImEiOiJjazNlb3ptbHUwMGp4M2NuY3E1enZjdHRpIn0._reXeyirR5zZK8eUua8erQ";

export default function Map() {
  const [lat, setLat] = React.useState(34);
  const [long, setLong] = React.useState(5);
  const [zoom, setZoom] = React.useState(2);

  React.useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map_container",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [long, lat],
      zoom: zoom
    });
  });

  return <MapContainer id="map_container">Map</MapContainer>;
}
