import React, { useState} from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Box from "@material-ui/core/Box";
import { stub } from "../data/data";

export default function MapContainer(props) {
  const user = stub.users;

  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  //InfoWindow setup
  const [selected, setSelected] = useState({});
  const onSelect = (item) => {
    setSelected(item);
  };

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

        {user.map((user, index) => {
          return (
            <Box key={index}>
              {user.locations.map((item, id) => (
                <Marker
                  key={id}
                  position={item.coordinates}
                  title={item.name}
                  onClick={() => onSelect(item)}
                />
              ))}
            </Box>
          );
        })}

        {selected.coordinates && (
          <InfoWindow
            position={selected.coordinates}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <p>
              <b>{selected.user}</b>: {selected.note}
            </p>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}
