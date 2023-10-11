import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import { cardSxStyle, likeDislikeBtns } from "./postCarsSxStyles";

const PostCard = ({ id, title, body }) => {
  return (
    <Box sx={cardSxStyle}>
      {/* text */}
      <Typography
        variant="h6"
        sx={{ marginBottom: "10px", fontFamily: "Jost" }}
      >
        {title}
      </Typography>
      <Typography sx={{ fontFamily: "Gabarito" }}>{body}</Typography>

      {/* Like and Dislike */}
      <Box sx={likeDislikeBtns}>
        <IconButton
          sx={{
            "&:hover": {
              color: "green",
            },
          }}
        >
          <ThumbUpOffAltIcon />
        </IconButton>
        <IconButton
          sx={{
            "&:hover": {
              color: "red",
            },
          }}
        >
          <ThumbDownOffAltIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default PostCard;
