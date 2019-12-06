import React from "react";
import styled from "@emotion/styled";
import mapboxgl from "mapbox-gl";

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-basis: 0;
  flex-grow: 1;
`;

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FzY2hhdmlubyIsImEiOiJjazNlb3ptbHUwMGp4M2NuY3E1enZjdHRpIn0._reXeyirR5zZK8eUua8erQ";

export default function Map() {
  const [lng, setLng] = React.useState(6.960279);
  const [lat, setLat] = React.useState(50.937531);
  const [zoom, setZoom] = React.useState(11);

  React.useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map_container",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom
    });
  });

  return <MapContainer id="map_container"></MapContainer>;
}
