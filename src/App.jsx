import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import MapContainer from "./components/MapContainer";
import SearchBar from "./components/SearchBar";
import MyNotes from "./components/MyNotes";
import OthersNotes from "./components/OthersNotes";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import NewNote from "./components/NewNote";
import { Typography } from "@material-ui/core";

/*TODOS:
- Save a new note as a new element of user.location array (redux) 
- Add the note to the current list of my notes
- Clickable point for my new location (with InfoWindow popup)

- notes of other users {modify stub filegit status}
- BAKEND/ MOCKS
- Search button
*/

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    margin: "20px",
  },

  boxCenterElement: {
    margin: 5,
    padding: theme.spacing(0.5),
    spacing: 3,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  button: {
    borderRadius: 3,
    padding: "0 10px",
    margin: "10px",
  },
}));

export default function App(props) {
  const classes = useStyles();

  const [myNote, setMyNote] = useState("My current position");
  const [showNoteDialog, setShowNoteDialog] = useState(false);
  const [showMyNotes, setShowMyNotes] = useState(false);
  const [showOthersNotes, setShowOthersNotes] = useState(false);

  //current position setups
  const [defaultCenter, setDefaultCenter] = useState({
    lat: -42.8666632,
    lng: 147.3166654,
  });
  const [currentPosition, setCurrentPosition] = useState({});
  const success = (position) => {
    const myPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(myPosition);
    setDefaultCenter(myPosition);
  };

  return (
    <Box className={classes.root}>
      <Grid container className={classes.boxCenterElement}>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper} elevation={3}>
            <Grid item xs={12}>
              <Typography variant="h5">My Community Landmark</Typography>
            </Grid>

            <Grid item xs={12}>
              <Box className={classes.paper}>
                <Button
                  fullWidth={true}
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    navigator.geolocation.getCurrentPosition(success);
                    setShowNoteDialog(true);
                  }}
                >
                  {" "}
                  Find my current location
                </Button>
              </Box>
            </Grid>

            {showNoteDialog ? (
              <Grid item xs={12}>
                <Paper className={classes.paper} elevation={3}>
                  <NewNote
                    setMyNote={setMyNote}
                    setShowNoteDialog={setShowNoteDialog}
                  />
                </Paper>
              </Grid>
            ) : null}

            <Grid item xs={12}>
              <Box className={classes.paper}>
                <MyNotes
                  showMyNotes={showMyNotes}
                  setShowMyNotes={setShowMyNotes}
                  setDefaultCenter={setDefaultCenter}
                />
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box className={classes.paper}>
                <OthersNotes
                  showOthersNotes={showOthersNotes}
                  setShowOthersNotes={setShowOthersNotes}
                  setDefaultCenter={setDefaultCenter}
                />
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box className={classes.paper}>
                <SearchBar />
              </Box>
            </Grid>
          </Paper>

          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={3}>
              <p>
                <b>Developer's notes: </b>
              </p>
              <p>1.Hover the mouse pointer to see the name of the marker </p>
              <p></p>
              <p>2. Click the marker to check notes</p>
              <p>3. Dynamic search is implemented in the Search bar</p>
            </Paper>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={9}>
          <MapContainer
            myNote={myNote}
            currentPosition={currentPosition}
            defaultCenter={defaultCenter}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
