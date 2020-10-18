import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  Tooltip,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';
// svg img import
import VerifiedIcon from '../../assets/twitter-verified-badge.svg';
//router
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  cardButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  button: {
    background: '#28A645',
    color: '#fff',
  },
  buttonBottomText: {
    marginTop: '0.5rem',
    fontSize: '0.6rem',
  },
  cardContentButton: {
    textTransform: 'none',
    margin: '0.3rem',
  },
  buttonText: {
    margin: '0.2rem',
    boxShadow: '0px 1px 3px 0px #999',
    padding: '0 4px',
    border:'1px solid #999',
    borderRadius: ' 10px'
  },
  cardtags: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    height: '50px',
  },
  verifiedImage: {
    maxHeight: '1rem',
  },
  verifiedDiv: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
});

export default function ImgMediaCard({ data: { imgLink, title, tags, id, seen } }) {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Card className={classes.root}>
      <div className={classes.verifiedDiv}>
        <img src={VerifiedIcon} className={classes.verifiedImage} alt='' />
      </div>

      <CardActionArea>
        <CardMedia
          component='img'
          alt='Contemplative Reptile'
          height='140'
          image={imgLink}
          title='Contemplative Reptile'
        />
        <CardContent>
          <Tooltip title={title} aria-label='add'>
            <Typography variant='body2' color='textSecondary' component='p'>
              {title.slice(0, 80)}
              {title.length > 80 && '...'}
            </Typography>
          </Tooltip>
        </CardContent>
        <CardContent className={classes.cardtags}>
          {tags.map((value) => (
            <Typography
              className={classes.buttonText}
              variant='body2'
              color='textSecondary'
            >
              # {value}
            </Typography>
          ))}
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardButton}>
        <Button
          onClick={() => history.push(`/dev/${id}`)}
          variant='contained'
          className={classes.button}
        >
          Available Now
        </Button>
        <Typography
          variant='body2'
          className={classes.buttonBottomText}
          color='textSecondary'
          component='p'
        >
          {seen}
        </Typography>
      </CardActions>
    </Card>
  );
}
