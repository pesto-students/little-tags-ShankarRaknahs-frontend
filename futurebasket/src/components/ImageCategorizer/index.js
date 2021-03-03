import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import COLORS from '../../config/colors.config';

import { Box, Paper, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  image: {
    cursor: 'pointer',
  },
  button: {
    margin: theme.spacing(10),
    cursor: 'pointer',
    fontWeight: '700',
    borderRadius: 5,
    fontSize: '0.8em',
    fontFamily: 'Poppins',
    visibility: 'hidden',
    '&:hover': {
      visibility: 'visible',
      backgroundColor: COLORS.SECONDARY,
      '& $icon': {
        color: COLORS.DARK,
      },
    },
  },
  box: {
    visibility: 'visible',
  },
  icon: {
    visibility: 'visible',
    color: COLORS.SECONDARY,
  },
  image: {
    transition: 'transform 0.5s ease-in-out',
    margin: 20,
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale3d(1.05, 1.05, 1)',
    },
  },
}));

const ImageCategorizer = ({ element }) => {
  const classes = useStyles();

  const title = element.title;
  const imageStyle = { position: 'relative', margin: 5 };
  const imagePath = element.image.path;
  const positions = element.positions;

  return (
    <div className={classes.image} style={imageStyle}>
      <Paper variant='outlined' className={classes.image}>
        <img src={imagePath} alt={title}></img>
      </Paper>
      {/* </Zoom> */}
      {positions.map((position) => {
        const id = position.id;
        const style = position.style;
        const title = position.title;

        return (
          <Button
            variant='contained'
            style={style}
            className={classes.button}
            startIcon={
              <Box
                className={classes.box}
                boxShadow={1}
                bgcolor='background.paper'
                style={{
                  width: '1.5rem',
                  height: '1.5rem',
                  borderRadius: '50%',
                  boxShadow: '0 0 10px #ffffff',
                }}
              >
                <Icon className={classes.icon} key={id}>
                  add_circle
                </Icon>
              </Box>
            }
          >
          <span> {title} </span>
          </Button>
        );
      })}
    </div>
  );
};

export default ImageCategorizer;
