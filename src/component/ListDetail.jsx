import { Box, Button, Divider, ListItem, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { edit, remove } from "../facility/feedback/FeedbackSlice";

const ListDetail = ({ feedback, color }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  const handleEdit = (feedback) => {
    dispatch(edit(feedback));
  };
  return (
    <>
      <ListItem>
        <Box sx={{ flexGrow: 1, paddingBlock: "20px" }}>
          <Typography variant="h4" color={color ? "#00bcd4" : "#00c853"}>
            Review : {feedback.review}{" "}
          </Typography>
          <Typography variant="h5" color={color ? "#90a4ae" : "#ffcc80"}>
            Rating : {feedback.rating}{" "}
          </Typography>
          <Typography variant="h6" color={color ? "#c5cae9" : "#ff9e80"}>
            Name : {feedback.name} {feedback.lastName}{" "}
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            size="small"
            color="warning"
            endIcon={<EditIcon />}
            onClick={() => handleEdit(feedback)}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            size="small"
            color="error"
            endIcon={<DeleteIcon />}
            sx={{ marginInline: "5px", marginBlock: "5px" }}
            onClick={() => handleRemove(feedback.id)}
          >
            Delete
          </Button>
        </Box>
      </ListItem>
      <Divider />
    </>
  );
};

export default ListDetail;
