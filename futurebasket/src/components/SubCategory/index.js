import { useEffect } from 'react';
import { menModal } from '../Modals/men.modal';
import { womenModal } from '../Modals/women.modal';
import { electronicModal } from '../Modals/electronics.modal';
import { jewelleryModal } from '../Modals/jewellery.modal';

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

const load = (modal) => {
  return modal.map((obj) => {
    return (
      <Paper key={obj.id} elevation={0}>
        <ImageCategorizer key={obj.id} element={obj} />
      </Paper>
    );
  });
};

const findModal = (category) => {
  switch (category) {
    case 'Men':
      return load(menModal);
    case 'Women':
      return load(womenModal);

    case 'Electronics':
      return load(electronicModal);

    case 'Jewellery':
      return load(jewelleryModal);

    default:
      return menModal.map((obj) => {
        return (
          <Paper key={obj.id} elevation={0}>
            <ImageCategorizer key={obj.id} element={obj} />
          </Paper>
        );
      });
  }
};

const SubCategory = ({ handleCategory }) => {
  const classes = useStyles();

  let { categoryName } = useParams();
  if (!categoryName) categoryName = 'Men';

  useEffect(() => {
    handleCategory(categoryName);
  }, [categoryName]);

  return <div className={classes.root}>{findModal(categoryName)}</div>;
};

export default SubCategory;
