import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {Typography, CardContent, Button} from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import EditSharpIcon from '@material-ui/icons/EditSharp';

//router
import { useParams } from 'react-router-dom';
// data imports
import data from '../../Utils/data';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    marginTop:'5rem',
    margin: 'auto',
    maxWidth: '95vw',
    minHeight: '60vh',
  },
  image: {
    width: 300,
    height: 300,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  button: {
    background: '#28A645',
    color: '#fff',
  },
  buttonText: {
    margin: '0.2rem',
    boxShadow: '0px 1px 3px 0px #999',
    padding: '2px 6px',
    border:'1px solid #999',
    borderRadius: ' 10px'
  },
  cardTags: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    height: '70px',
  },
  buttons: {
    background: '#28A645',
    color: '#fff',
    textTransform:"capitalize",
    marginLeft:'2rem',
  },
  edit:{
    marginLeft:'0.5rem',
    fontSize:'1rem',
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();
  const { id } = useParams();
  return (
    data
      // eslint-disable-next-line 
      .filter((dev) => dev.id == id)
      .map((realValue) => (
        <div key={realValue.id} className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt='dev_image'
                    src={realValue.imgLink}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction='column' spacing={2}>
                  <Grid item xs>
                    <Typography gutterBottom variant='subtitle1'>
                      {realValue.name}
                      <EditSharpIcon className={classes.edit}/>
                    </Typography>
                    
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      gutterBottom
                    >
                      {realValue.subTitle}
                    </Typography>
                    <Typography variant='body2'>{realValue.title}</Typography>
                  </Grid>
                  <Grid item>
                    <CardContent className={classes.cardTags} style={{ cursor: 'pointer' }}>
                    {realValue.detailTags.map((value) => (
            <Typography
              className={classes.buttonText}
              variant='body2'
              color='textSecondary'
            >
              # {value}
            </Typography>
          ))}
                    </CardContent>
                  </Grid>
                 
                </Grid>
              </Grid>
            </Grid>
            <Grid item container style={{backgroundColor: '#C8FECB', display:'flex',justifyContent: 'center',alignItems:'center',}}>
                    <Typography variant='body2'
                      color='textSecondary'
                      gutterBottom>
                      {realValue.name} is available to hire
                    </Typography>
                    <Button
                      variant='contained'
                      className={classes.buttons}
                    >
                    Hire {realValue.name}
                    </Button>

                  </Grid>
          </Paper>
        </div>
      ))
  );
}
