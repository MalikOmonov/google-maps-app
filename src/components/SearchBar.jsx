import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { stub } from "../data/data";

//TODO: setup flex for grid

export default function SearchBar(props) {
  const user = stub.users;
  const [result, setResult] = useState("");

  function searchFunction(str) {
    let arr = [];

    for (let i = 0; i < user.length; i++) {
      for (let j = 0; j < user[i].locations.length; j++) {
        let userName = user[i].locations[j].user.toLowerCase();
        let userNote = user[i].locations[j].note.toLowerCase();
        if (userName.includes(str.toLowerCase()) && !(arr.includes(userName)) )
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
      <TextField
        placeholder="Enter text to search"
        variant="outlined"
        onChange={(e) => setResult(e.target.value)}
      />
      <Box>{resultList(searchFunction(result))}</Box>
    </Box>
  );
}
