import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { stub } from "../data/data";

export default function MapContainer(props) {
  const user = stub.profile;

  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  //InfoWindow setup
  const [selected, setSelected] = useState({});
  const onSelect = (item) => {
    setSelected(item);
  };

  //functional google maps https://medium.com/@allynak/how-to-use-google-map-api-in-react-app-edb59f64ac9d

  return (
    <LoadScript googleMapsApiKey="AIzaSyBLVHqBpK4pTUHkxRLctTj6a3nHrt1d-uI">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={props.defaultCenter}
      >

        {props.currentPosition.lat && (
          <Marker position={props.currentPosition}>
            <InfoWindow position={props.currentPosition}>
              <p>{props.myNote}</p>
            </InfoWindow>
          </Marker>
        )}

        {user.locations.map((item) => {
          return (
            <Marker
              key={item.name}
              position={item.coordinates}
              title={item.name}
              onClick={() => onSelect(item)}
            />
          );
        })}
        {selected.coordinates && (
          <InfoWindow
            position={selected.coordinates}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <p>
              <b>
                {user.firstName} {user.secondName}
              </b>
              : {selected.note}
            </p>
          </InfoWindow>
        )}

      </GoogleMap>
    </LoadScript>
  );
}
