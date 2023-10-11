import React from "react";
import { Box, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { iconButtonStyle } from "../../searchSxStyles";

const SearchField = () => {
  return (
    <Box
      sx={{
        marginBottom: "30px",
        position: "relative",
        width: "470px",
      }}
    >
      <TextField fullWidth type="search" placeholder="Search..." />
      <IconButton sx={iconButtonStyle} color="primary">
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default SearchField;
