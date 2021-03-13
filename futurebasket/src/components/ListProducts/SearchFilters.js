import React, { useState } from 'react'
import { Checkbox, FormControlLabel, FormGroup, IconButton, InputBase, Paper } from "@material-ui/core";
import { Search } from '@material-ui/icons';
import { useFilterStyles } from "./styles";

function SearchFilters({ props: { productProperty, selectedProductProperty, setSelectedProductProperty}  } ) {

    const [propertySearchResult, setPropertySearchResult] = useState(productProperty);
    const [propertyInput, setPropertyInput] = useState('');

    const filterStyles = useFilterStyles();

    const getMatchingProducts = (searchTerm) => {
        let data = productProperty.reduce((acc, property) => {
          let filterRes = property
            .trim()
            .toLowerCase()
            .split(" ")
            .filter((word) => word.includes(searchTerm.toLowerCase()));
          if (filterRes.length) acc.add(property);
          return acc; 
        }, new Set());
        return [...data];
      };

      const handleSearchChange = (e) => {
        setPropertyInput(e.target.value);
        setPropertySearchResult(getMatchingProducts(e.target.value))
      }

      const handleCheckboxChange = (e) => {
          if(e.target.checked){
              setSelectedProductProperty([...selectedProductProperty, e.target.name]);
          } else {
            setSelectedProductProperty(selectedProductProperty.filter((p) => p !== e.target.name));
          }
      }

    return (
        <div className = {filterStyles.searchFilters}>
            <div>
            <Paper component="form" className={filterStyles.root}>
              <InputBase
                value={propertyInput}
                className={filterStyles.input}
                placeholder="Search..."
                inputProps={{ "aria-label": "Search for products" }}
                onChange={handleSearchChange}
              />
              <IconButton
                type="submit"
                className={filterStyles.iconButton}
                aria-label="search"
              >
                <Search />
              </IconButton>
            </Paper>
            </div>
            <div>
            <FormGroup className = {filterStyles.searchResults} >
              {propertySearchResult.map((company) => (
                  <FormControlLabel
                    key = {company}
                    control={
                      <Checkbox
                        checked={selectedProductProperty.includes(company)}
                        onChange={handleCheckboxChange}
                        name = {company}
                        color = "primary"
                      />
                    }
                    label={company}
                  />
                  ))}
                </FormGroup>
            </div>
          </div>
    )
}

export default SearchFilters
