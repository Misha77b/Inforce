import { Box, Typography } from "@mui/material";
import React from "react";

const PostCard = ({ id, title, body }) => {
  return (
    <Box>
      <Typography>{title}</Typography>
      <Typography>{body}</Typography>
    </Box>
  );
};

export default PostCard;
