import React from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { stub } from "../data/data";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

export default function OthersNotes(props) {
  const user = stub.users.filter((item, id) => id > 0);

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
            {user.map((user, index) => {
              return (
                <div key={index}>
                  <b>
                    {user.firstName} {user.secondName}:
                  </b>
                  {user.locations.map((l, id) => (
                    <p key={id}>
                      <Link
                        onClick={() => props.setDefaultCenter(l.coordinates)}
                      >
                        {id + 1}. {l.note}
                      </Link>
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
