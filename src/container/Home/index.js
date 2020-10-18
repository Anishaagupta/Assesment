import React from 'react';
//material ui
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
// Components
import Card from '../../components/Card';
// data imports
import data from '../../Utils/data';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: "1rem 0.3rem",
    minHeight: 300,
    maxWidth: 200,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const classes = useStyles();

  return (
    <React.Fragment>
    
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify='center' spacing={2}>
          {data.map((value) => (
            <Grid key={value.id} item>
              <Paper className={classes.paper}>
                <Card data={value} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
   
    </React.Fragment>

  );
}
