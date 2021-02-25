import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Image from 'material-ui-image';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    cursor: 'pointer',
    background: 'linear-gradient(45deg, #00beff 30%, #00BEFF 90%)',
    textAlign: 'right',
    fontWeight: '700',
    borderRadius: 5,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    fontSize: 'h6.fontSize',
    fontFamily: 'Monospace',
    visibility: 'hidden',
    '&:hover': {
      visibility: 'visible',
      '& $icon': {
        color: '#000000',
      },
    },
  },
  icon: {
    visibility: 'visible',
    color: '#00beff',
    // color: 'secondary',
  },
}));

const ImageCategorizer = ({ element }) => {
  const classes = useStyles();

  const imageStyle = element.image.style;
  const imagePath = element.image.path;
  const positions = element.positions;

  return (
    <div style={imageStyle}>
      <Image src={imagePath}></Image>
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
              <Icon className={classes.icon} key={id}>
                add_circle
              </Icon>
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
