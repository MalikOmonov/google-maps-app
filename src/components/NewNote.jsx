import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";

const useStyles = makeStyles((theme) => ({
    button: {
      borderRadius: 3,
      padding: "0 10px",
      margin: "10px",
    },
  }));

export default function NewNote(props) {
    const classes = useStyles();

  return (
    <Box>
      <Typography>Add a new note to my current location</Typography>

      <InputBase
        variant="outlined"
        placeholder="Enter a new note"
        inputProps={{ maxLength: 100 }}
        onBlur={(e) => {
          props.setMyNote(e.target.value);
          props.setShowNoteDialog(false);
        }}
      />
      <Box>
      <Button
        className={classes.button}
        color="primary"
        variant="contained"
        type="submit"
      >
        Save
      </Button>
      <Button
        className={classes.button}
        color="primary"
        variant="contained"
        onClick={() => props.setShowNoteDialog(false)}
      >
        Hide
      </Button>
      </Box>
    </Box>
  );
}
