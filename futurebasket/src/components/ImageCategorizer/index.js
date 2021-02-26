import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Image from 'material-ui-image';
import Button from '@material-ui/core/Button';
import COLORS from '../../config/colors.config';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
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
  icon: {
    visibility: 'visible',
    color: COLORS.SECONDARY,
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
