import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import COLORS from '../../config/colors.config';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  image: {
    cursor: 'pointer',
  },
  button: {
    margin: theme.spacing(10),
    cursor: 'pointer',
    fontWeight: '700',
    borderRadius: 5,
    fontSize: 'h6.fontSize',
    fontFamily: 'Monospace',
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
}));

const ImageCategorizer = ({ element }) => {
  const classes = useStyles();

  const title = element.title;
  const imageStyle = { position: 'relative', margin: 5 };
  const imagePath = element.image.path;
  const positions = element.positions;

  return (
    <div className={classes.image} style={imageStyle}>
      <Paper variant='outlined'>
        <img src={imagePath} alt={title}></img>
      </Paper>
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
            {title}
          </Button>
        );
      })}
    </div>
  );
};

export default ImageCategorizer;
