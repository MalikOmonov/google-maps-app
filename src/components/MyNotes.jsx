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

export default function MyNotes(props) {
  const classes = useStyles();
  const user = stub.users[0];

  return (
    <Box>
      <Button
        variant="contained"
        color="primary"
        fullWidth={true}
        onClick={() => {
          props.setShowMyNotes(!props.showMyNotes);
        }}
      >
        List of my notes
      </Button>
      <Typography>
        {props.showMyNotes ? (
          <Box>
            <Paper className={classes.paper} elevation={3}>
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
            </Paper>
          </Box>
        ) : null}
      </Typography>
    </Box>
  );
}
