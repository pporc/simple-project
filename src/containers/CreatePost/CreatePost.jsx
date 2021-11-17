import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { selectAccount } from "../../store/auth";
import { createPostThunk } from "../../store/post/thunk/createPostThunk";
import { useHistory } from "react-router";

export const CreatePost = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { name } = useSelector(selectAccount);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    dispatch(
      createPostThunk({
        title: data.get("title"),
        text: data.get("text"),
        date: Date.now(),
        author: name,
      })
    );

    history.push("/");
  };
  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4, mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        Create Post
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="title"
              name="title"
              label="Title"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle2" gutterBottom>
              Post text
            </Typography>
            <TextareaAutosize
              required
              id="text"
              name="text"
              minRows={3}
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" type="submit">
              Create
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CreatePost;
