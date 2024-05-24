
import { List } from '@mui/material';
import { useSelector } from 'react-redux';
import ListDetail from './ListDetail';

const ListGroup = ({color}) => {
    const {allFeedbacks} = useSelector(state=>state.feedback)
  return (
    <List  >
        {
            allFeedbacks.map((feedback)=>
            <ListDetail key={feedback.id} feedback={feedback} color={color} />
            )
        }
    </List>
  )
}

export default ListGroup