import { Typography } from '@material-ui/core';

import { useStyles } from './styles';

const Title = (title) => {
  const classes = useStyles();
  const firstName = title.firstName;
  const lastName = title.lastName;
  return (
    <div>
      <Typography className={classes.title} variant='h6' noWrap>
        {firstName}
      </Typography>

      <Typography className={classes.title2} variant='h6' noWrap>
        {lastName}
      </Typography>
    </div>
  );
};

export default Title;
