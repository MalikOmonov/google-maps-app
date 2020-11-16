import React from "react";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";


//TODO: setup flex for grid

export default function SearchBar(props) {
  return (
    <Box>
      <TextField placeholder="Enter text to search" variant="outlined" />
    </Box>
  );
}
