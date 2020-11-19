import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { stub } from "../data/data";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  search: {
    marginTop: 5,
    marginBottom: 5,
  },
}));

export default function SearchBar(props) {
  const classes = useStyles();
  const user = stub.users;
  const [result, setResult] = useState("");
  const [showSearchBar, setShowSearchBar] = useState(false);

  function searchFunction(str) {
    let arr = [];

    for (let i = 0; i < user.length; i++) {
      for (let j = 0; j < user[i].locations.length; j++) {
        let userName = user[i].locations[j].user.toLowerCase();
        let userNote = user[i].locations[j].note.toLowerCase();
        if (userName.includes(str.toLowerCase()) && !arr.includes(user[i].locations[j].user))
          arr.push(user[i].locations[j].user);
        if (userNote.includes(str.toLowerCase()))
          arr.push(user[i].locations[j].note);
      }
    }

    if (str.length < 3) arr = [];

    return arr;
  }

  function resultList(arr) {
    return arr.map((item, i) => {
      return <p key={i}>{item}</p>;
    });
  }

  return (
    <Box>
      <Button
        fullWidth={true}
        variant="contained"
        color="primary"
        onClick={() => {
          setShowSearchBar(!showSearchBar);
        }}
      >
        {" "}
        Searh a user or a note
      </Button>
      {showSearchBar ? (
        <TextField
        className={classes.search}
          fullWidth={true}
          placeholder="Enter a note text or user name "
          variant="outlined"
          onChange={(e) => setResult(e.target.value)}
        />
      ) : null}
      <Box>
          {resultList(searchFunction(result))}
      </Box>
    </Box>
  );
}
