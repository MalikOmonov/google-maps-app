import React from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { stub } from "../data/data";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";



export default function OthersNotes(props) {
  const user = stub.profile;

  return (
    <Box>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          props.setShowOthersNotes(!props.showOthersNotes);
        }}
      >
        List of other users' notes
      </Button>
      <Typography>
        {props.showOthersNotes ? (
          <Box>
            {user.locations.map((obj, index) => {
              return (
                <p>
                  <Link
                    key={index}
                    onClick={() => props.setDefaultCenter(obj.coordinates)}
                  >
                    {index + 1}. {obj.note}
                  </Link>
                </p>
              );
            })}
          </Box>
        ) : null}
      </Typography>
    </Box>
  );
}
