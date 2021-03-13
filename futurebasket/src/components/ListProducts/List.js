import { useState } from "react";
import Product from "./Product";
import { useStyles } from "./styles";
import  Filter  from "./Filter";

const List = ({ products }) => {

  const classes = useStyles();
  const [productsData, setProductsData] = useState(products);
  
  return (
    <div style={{ display: "flex", position: "relative" }}>
      <Filter productsData = {productsData} setProductsData = {setProductsData} />
      <div className={classes.productsContainer}>
        {productsData.map((item) => {
          return <Product key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default List;
