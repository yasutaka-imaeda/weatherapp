import React from "react";
// import { Map } from "google-maps-react";
import GoogleMapReact from "google-map-react";
import styles from "./Map.module.scss";

const Maps: React.FC = () => {
  const GoogleMap_APIKEY = process.env.REACT_APP_GOOGLEMAP_APIKEY;
  console.log(GoogleMap_APIKEY);
  const defaultLatLng = {
    lat: 35.7022589,
    lng: 139.7744733,
  };

  return (
    <div className={styles.root}>
      <div>Map</div>
      <div className={styles.map} id="map">
        <div style={{ height: "300px", width: "300px" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: GoogleMap_APIKEY }}
            defaultCenter={defaultLatLng}
            defaultZoom={16}
          />
        </div>
      </div>
    </div>
  );
};

export default Maps;
