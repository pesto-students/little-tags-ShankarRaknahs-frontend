import { useStyles } from './styles';
import Paper from '@material-ui/core/Paper';

const Product = ({ item }) => {
  const classes = useStyles();

  return (
    <div>
      <Paper elevation={10}>
        <div>test</div>
      </Paper>
    </div>
  );
};

export default Product;
