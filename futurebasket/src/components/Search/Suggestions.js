import React, { useEffect, useState } from "react";
import HistoryIcon from "@material-ui/icons/History";
import { List, ListItemText, ListItem, Divider } from "@material-ui/core";
import { useStylesForSuggestions } from "./styles";
import { Link } from "react-router-dom";
import { Search } from "@material-ui/icons/";
import filterSearch from "./filterSearch";

function Suggestions({
  props: {
    searchInput,
    inputRef,
    updateLocalStorage,
    suggestHistory,
    toDisplaySuggestions,
    setToDisplaySuggestions,
  },
}) {
  const suggestionClasses = useStylesForSuggestions();
  let [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      if (searchInput === inputRef.current.value && searchInput.trim().length) {
        setSuggestions(filterSearch(searchInput, 7));
      }
    }, 500);
  }, [searchInput]);

  const handleSuggestionClick = (event) => {
    updateLocalStorage(event.target.textContent);
    setToDisplaySuggestions(false);
  };

  return (
    <List
      className={`${suggestionClasses.root} ${suggestionClasses.position}`}
      style={{
        display:
          toDisplaySuggestions && (suggestions.length || suggestHistory.length)
            ? "block"
            : "none",
      }}
    >
      {suggestHistory.map((suggestion) => (
        <Link
          to={`/search?q=${suggestion}`}
          // style={{ "text-decoration": "none" }}
          className="suggestion-link"
          onClick={handleSuggestionClick}
          key = {`${suggestion}-history`}
        >
          <ListItem
            alignItems="flex-start"
            className={suggestionClasses.suggestionItem}
          >
            <HistoryIcon className = { suggestionClasses.iconStyle} />
            <ListItemText
              primary={suggestion}
              className={suggestionClasses.suggestionText}
            />
          </ListItem>
        </Link>
      ))}
      {suggestions.map((suggestion) => (
        <Link
          to={`/search?q=${suggestion}`}
          // style={{ "text-decoration": "none" }}
          className="suggestion-link"
          onClick={handleSuggestionClick}
          key = {`${suggestion}-suggestion`}
        >
          <ListItem
            alignItems="flex-start"
            className={suggestionClasses.suggestionItem}
          >
            <Search className = { suggestionClasses.iconStyle} />
            <ListItemText
              primary={suggestion}
              className={suggestionClasses.suggestionText}
            />
          </ListItem>
        </Link>
      ))}
      <Divider variant="inset" component= {'span'} />
    </List>
  );
}

export default Suggestions;
