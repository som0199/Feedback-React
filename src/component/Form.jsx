import { Box, Button, Rating, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import { useDispatch, useSelector } from "react-redux";
import { add, edit, update } from "../facility/feedback/FeedbackSlice";

const Form = ({ color }) => {
  const [rating, setRating] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [review, setReview] = useState("");
  const dispatch = useDispatch();
  const { edit } = useSelector((state) => state.feedback);

  const handleSubmit = (e) => {
    e.preventDefault();

    edit.isEdit
      ? dispatch(
          update({
            id: edit.feedback.id,
            name,
            rating,
            lastName,
            review,
          })
        )
      : dispatch(
          add({
            id: crypto.randomUUID(),
            name,
            rating,
            lastName,
            review,
          })
        );

    setName("");
    setLastName("");
    setReview("");
    setRating("");
  };

  useEffect(() => {
    setName(edit.feedback.name),
      setLastName(edit.feedback.lastName),
      setRating(edit.feedback.rating),
      setReview(edit.feedback.review);
  }, [edit]);

  return (
    <form onSubmit={handleSubmit}>
      <Typography
        variant="h4"
        color={color ? "#90a4ae" : "#81c784"}
        sx={{ textAlign: "center" }}
      >
        Rate US !!!
      </Typography>
      {/* <Typography variant="button" sx={{ marginLeft: "60px" }}>
        Help Us Help You Better, because Your Opinion Shapes Our World.
      </Typography> */}
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { width: "38ch" },
          marginTop: "10px",
        }}
        noValidate
        autoComplete="off"
      >
        <br />
        <div>
          <TextField
            label="First Name"
            color="info"
            onChange={(e) => setName(e.target.value)}
            value={name}
            sx={{ marginRight: "13px", marginBottom: "8px" }}
          />
          <TextField
            label="Last Name"
            color="success"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
      </Box>

      <TextField
        variant="outlined"
        color="warning"
        label="Write a Review"
        multiline
        rows={3}
        fullWidth
        sx={{ margin: "10px 0px" }}
        onChange={(e) => setReview(e.target.value)}
        value={review}
      />
      <Typography component="legend" variant="h5" sx={{ marginBottom: "30px" }}>
        Rating: &nbsp;
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </Typography>

      <Button
        variant="contained"
        color="success"
        fullWidth
        endIcon={<SaveIcon />}
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

export default Form;
