import React from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { stub } from "../data/data";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    margin: "20px",
  },
}));

export default function OthersNotes(props) {
  const classes = useStyles();
  const user = stub.users.filter((item, id) => id > 0);

  return (
    <Box>
      <Button
        fullWidth={true}
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
            <Paper className={classes.paper} elevation={3}>
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
            </Paper>
          </Box>
        ) : null}
      </Typography>
    </Box>
  );
}
