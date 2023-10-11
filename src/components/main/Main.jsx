import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { fetchPosts } from "../../store/reducers/postsSlice";
import PostsList from "../postsList/PostsList";
import Loader from "../loader/Loader";

const Main = () => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.postsReducer.loader);
  const posts = useSelector((state) => state.postsReducer.posts);

  console.log(loading);
  console.log(posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <Box
      className="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {loading ? <Loader /> : <PostsList postsdata={posts} />}
    </Box>
  );
};

export default Main;
