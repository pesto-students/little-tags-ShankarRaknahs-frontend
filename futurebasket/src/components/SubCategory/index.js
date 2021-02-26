import { useEffect } from 'react';
import { menModal } from '../Modals/men.modal';
import { womenModal } from '../Modals/women.modal';
import ImageCategorizer from '../ImageCategorizer';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '3%',
    margin: '6.5%',
  },
}));

const SubCategory = ({ handleCategory }) => {
  const classes = useStyles();
  
  //Parsing the params from url to get the category.
  let { categoryName } = useParams();
  if(!categoryName) categoryName = "Men"; 
 
  useEffect(() => {
    handleCategory(categoryName);
  }, [categoryName])

  return (
    <div className={classes.root}>
      {menModal.map((obj) => {
        return (
          <Paper key={obj.id} elevation={0}>
            <ImageCategorizer key={obj.id} element={obj} />
          </Paper>
        );
      })}
    </div>
  );
};

export default SubCategory;
