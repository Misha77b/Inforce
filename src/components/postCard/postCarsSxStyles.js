export const cardSxStyle = {
  position: "relative",
  padding: "10px",
  width: "350px",
  height: "200px",
  border: "2px solid lightgray",
  borderRadius: "10px",
  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
  "&:hover": {
    boxShadow:
      "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
  },
};

export const likeDislikeBtns = {
  position: "absolute",
  bottom: "0",
  right: "10px",
  display: "flex",
  gap: "15px",
};
