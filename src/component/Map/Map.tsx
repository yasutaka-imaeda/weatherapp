import React from "react";
// import { Map } from "google-maps-react";
import GoogleMapReact from "google-map-react";
import styles from "./Map.module.scss";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectCity } from "../../app/taskSlice";

const Maps: React.FC = () => {
  // const GoogleMap_APIKEY: any = process.env.REACT_APP_GOOGLEMAP_APIKEY;
  const REACT_APP_GOOGLEMAP_APIKEY = "AIzaSyCYy0RJ4yRHA0MkyVxoZKIcesUm9aQRaoM";
  const defaultLatLng = {
    lat: 35.7022589,
    lng: 139.7744733,
  };
  const cityInfo: any = useAppSelector(selectCity);
  const cityLatLng = {
    lat: cityInfo.latitude,
    lng: cityInfo.longitude,
  };
  console.log(cityInfo);
  console.log(cityLatLng);

  return (
    <div className={styles.root}>
      <div>Map</div>
      <div className={styles.map} id="map">
        <div style={{ height: "300px", width: "500px" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: REACT_APP_GOOGLEMAP_APIKEY }}
            defaultCenter={defaultLatLng}
            defaultZoom={12}
            center={cityLatLng}
          />
        </div>
      </div>
    </div>
  );
};

export default Maps;
