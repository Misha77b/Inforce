import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Box, IconButton, TextField } from "@mui/material";
import SearchField from "./components/searchField/SearchField";
import Suggestions from "./components/suggestions/Suggestions";

const Search = () => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");
  const [suggestionsOpened, setSuggestionsOpened] = useState(false);

  return (
    <>
      <SearchField />
      {suggestionsOpened ? <Suggestions /> : null}
    </>
  );
};

export default Search;
