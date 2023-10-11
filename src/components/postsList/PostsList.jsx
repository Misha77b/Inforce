import { Box, Grid } from "@mui/material";
import React from "react";
import PostCard from "../postCard/PostCard";

const PostsList = ({ postsdata }) => {
  return (
    <Box sx={{ width: "80%" }}>
      <Grid container spacing={{ xs: 2, md: 3 }}>
        {postsdata.map((post) => {
          return (
            <Grid
              item
              xs={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default PostsList;
