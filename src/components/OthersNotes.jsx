import React from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { stub } from "../data/data";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

export default function OthersNotes(props) {
  const users = stub.users.filter((item, id) => id>0);


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
            {users.map((user, index) => {
              return (
                <div key={index}>
                  <b>
                    {user.firstName} {user.secondName}:
                  </b>
                  {user.locations.map((l, id) => (
                    <p key={id}>
                      {l.name}: {l.note}
                    </p>
                  ))}
                </div>
              );
            })}
          </Box>
        ) : null}
      </Typography>
    </Box>
  );
}
