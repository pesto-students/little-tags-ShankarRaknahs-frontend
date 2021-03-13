import React, { useRef, useState } from "react";
import { useStyles } from "./styles";
import { Paper, IconButton, InputBase } from "@material-ui/core";
import { Search } from "@material-ui/icons/";
import { useHistory } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import Suggestions from "./Suggestions";

const SearchBar = () => {
  const classes = useStyles();
  const inputRef = useRef("");
  const history = useHistory();

  let [searchInput, setSearchInput] = useState("");
  let [toDisplaySuggestions, setToDisplaySuggestions] = useState(false);
  const [suggestHistory, setSuggestHistory] = useLocalStorage(
    "autoSuggestHistory",
    []
  );

  const updateLocalStorage = (input) => {
    let history = suggestHistory;
    history.unshift(input);
    let uniqueSuggestions = Array.from(new Set(history));
    uniqueSuggestions = uniqueSuggestions.slice(0, 3);
    setSuggestHistory(uniqueSuggestions);
    setSearchInput("");
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };
  const handleInputBlur = (event) => {
    if (
      event.relatedTarget &&
      ["suggestion-link"].includes(event.relatedTarget.className)
    )
      return;
    setToDisplaySuggestions(false);
  };
  const handleInputFocus = (event) => {
    setToDisplaySuggestions(true);
  };
  const handleInputKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      if (searchInput.trim().length) {
        updateLocalStorage(searchInput);
        setToDisplaySuggestions(false);
        history.push(`/search?q=${searchInput}`);
      }
    }
  };
  return (
    <div style={{ position: "relative" }}>
      <Paper component="form" className={classes.root}>
        <InputBase
          value={searchInput}
          className={classes.input}
          placeholder="Search..."
          inputProps={{ "aria-label": "Search for products" }}
          inputRef={inputRef}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
          onKeyDown={handleInputKeyDown}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <Search />
        </IconButton>
      </Paper>
      <Suggestions
        props={{
          searchInput,
          inputRef,
          updateLocalStorage,
          suggestHistory,
          toDisplaySuggestions,
          setToDisplaySuggestions,
        }}
      />
    </div>
  );
};

export default SearchBar;
