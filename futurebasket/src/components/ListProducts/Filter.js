import React, { useState, useContext } from "react";
import { Button, Divider, Slider, Typography } from "@material-ui/core";
import { FormattedMessage } from "react-intl";
import { useFilterStyles } from "./styles";
import SearchFilters from "./SearchFilters";
import { ItemsContext } from "../../pages/Search/Search";

function Filter({ productsData, setProductsData }) {
  const items = useContext(ItemsContext);
  const initialPrices = getInitialPriceRange(items);

  const filterStyles = useFilterStyles();

  const [minMax, setminMax] = useState(initialPrices);
  const [selectedCompanies, setSelectedCompanies] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const companies = Array.from(
    new Set(productsData.map((product) => product.company))
  );

  const colors = Array.from(
    productsData.reduce((acc, product) => {
      product.colors.forEach((color) => acc.add(color));
      return acc;
    }, new Set())
  );

  const sizes = Array.from(
    productsData.reduce((acc, product) => {
      product.sizes.forEach((size) => acc.add(size));
      return acc;
    }, new Set())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = applyFilters(
      items,
      minMax,
      selectedCompanies,
      selectedColors,
      selectedSizes
    );
    setProductsData(data);
  };

  const handleChange = (e, v) => {
    setminMax(v);
  };

  return (
    <div className={filterStyles.container}>
      <div className={filterStyles.subContainer}>
        <Typography variant="h4" className={filterStyles.filter}>
          <FormattedMessage
            id="items.filter"
            defaultMessage="Filters"
          ></FormattedMessage>
        </Typography>
        <Divider></Divider>
        <form onSubmit={handleSubmit}>
          <div className={filterStyles.slider}>
            <Typography id="range-slider" gutterBottom>
              <FormattedMessage
                id="items.priceRange"
                defaultMessage="Price Range"
              ></FormattedMessage>
            </Typography>
            <Slider
              id="minMax"
              name="minMax"
              value={minMax}
              onChange={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              max={initialPrices[1]}
            />
          </div>
          <SearchFilters
            props={{
              productProperty: companies,
              selectedProductProperty: selectedCompanies,
              setSelectedProductProperty: setSelectedCompanies,
            }}
          />
          <SearchFilters
            props={{
              productProperty: colors,
              selectedProductProperty: selectedColors,
              setSelectedProductProperty: setSelectedColors,
            }}
          />
          <SearchFilters
            props={{
              productProperty: sizes,
              selectedProductProperty: selectedSizes,
              setSelectedProductProperty: setSelectedSizes,
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ "margin-top": "1rem" }}
          >
           <FormattedMessage id = "items.apply" defaultMessage = "Apply"></FormattedMessage> 
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Filter;

function applyFilters(
  productsData,
  minMax,
  selectedCompanies,
  selectedColors,
  selectedSizes
) {
  const isPresent = (selectedProperties, matchingProperties) => {
    let set = new Set(matchingProperties);
    for (const property of selectedProperties) {
      if (set.has(property)) return true;
    }
    return false;
  };
  const matchPrices = (product, minMax) => {
    return product.price <= minMax[1] && product.price >= minMax[0];
  };

  const matchCompany = (product, selectedCompanies) => {
    return (
      selectedCompanies.length === 0 ||
      selectedCompanies.includes(product.company)
    );
  };

  const matchColorsSizes = (product, selected) => {
    return selected.length === 0 || isPresent(selected, product.colors);
  };

  let resIds = new Set();

  productsData.forEach((product) => {
    if (
      matchPrices(product, minMax) &&
      matchCompany(product, selectedCompanies) &&
      matchColorsSizes(product, selectedColors) &&
      matchColorsSizes(product, selectedSizes)
    )
      resIds.add(product.id);
  });

  return productsData.filter((product) => resIds.has(product.id));
}

function getInitialPriceRange(products) {
  const prices = products.map((product) => product.price);
  return [Math.min(...prices), Math.max(...prices)];
}
