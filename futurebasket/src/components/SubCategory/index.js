import { menModal } from '../Modals/men.modal';
import ImageCategorizer from '../ImageCategorizer';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

const SubCategory = ({ category }) => {
  const classes = useStyles();

  //subCategory to be verified later

  return (
    <div className={classes.root}>
      {menModal.map((obj, index) => {
        return (
          <Paper key={index} elevation={0}>
            <ImageCategorizer key={index} element={obj} />
          </Paper>
        );
      })}
    </div>
  );
};

export default SubCategory;
