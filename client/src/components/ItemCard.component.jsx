import {
	Card,
	CardContent,
	CardMedia,
	Typography,
	Box,
	IconButton,
	Avatar,
	Stack,
	Grid,
	Paper,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import pizza from '../static/img/pizza.png';
import burger from '../static/img/burger.png';
import espresso from '../static/img/espresso.png';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import {
	incrementItem,
	decrementItem,
	deleteItem,
} from '../actions/menuItems.actions';

const ItemCard = ({
	_id,
	itemName,
	ingredients,
	price,
	orderQty,
	category,
	popular,
	parent,
}) => {
	const dispatch = useDispatch();

	const handleIncrementItem = () => {	
		dispatch(incrementItem(_id));
	};
	const handleDecrementItem = () => {
		dispatch(decrementItem(_id));
	};

	const handleDeleteItem = () => {
		dispatch(deleteItem(_id));
	};

	return (
		<Grid item>
				<Paper elevation={0} sx={{ padding: '10px', width: '360px' }}>
					<Grid container direction='row' justify='center' alignItems='center'>
						<Grid item>
							<img
								src={category === 'pizza' ? pizza : category === 'burger' ? burger : category === 'drinks' ? espresso : null}
								alt='pizza'
								width={parent === 'menu' ? '160px' : '120px'}
							/>
						</Grid>
						<Grid item>
							<Typography variant='body1' sx={{textTransform: "uppercase"}}>{itemName}</Typography>
							{parent === 'menu' ? (
								<>
									<Typography variant='subtitle2' color='text.secondary'>
										{ingredients.map((ingredient, idx) => (
											<span key={idx}>{ingredient}, </span>
										))}
									</Typography>
									<Typography variant='subtitle2' color='text.secondary'>
										Price: LE {(price).toFixed(2)}
									</Typography>
									<Stack direction='row'>
										<IconButton
											disabled={orderQty ? false : true}
											onClick={handleDecrementItem}
											aria-label='remove'
											sx={{ color: '#000' }}
										>
											<RemoveIcon fontSize='small' />
										</IconButton>
										<Avatar
											sx={{ bgcolor: '#E1DFDF', width: 25, height: 25 }}
											variant='rounded'
										>
											<Typography variant='body2' style={{ color: '#303030' }}>
												{orderQty}
											</Typography>
										</Avatar>
										<IconButton
											onClick={handleIncrementItem}
											aria-label='add'
											sx={{ color: '#000' }}
										>
											<AddIcon fontSize='small' />
										</IconButton>
									</Stack>
								</>
							) : (
								<>
									<Stack direction='row'>
										<Typography variant='body2' sx={{ color: '#303030', marginTop: "8px" }}>
											Qty: {orderQty}
										</Typography>
										<IconButton
											disabled={orderQty ? false : true}
											onClick={handleDecrementItem}
											aria-label='remove'
											sx={{ color: '#000' }}
										>
											<RemoveIcon fontSize='small' />
										</IconButton>
										<IconButton
											onClick={handleIncrementItem}
											aria-label='add'
											sx={{ color: '#000' }}
										>
											<AddIcon fontSize='small' />
										</IconButton>
									</Stack>
									<Stack direction='row'>
										<Typography variant='body2' sx={{ color: '#303030', marginTop: "8px" }}>
											Total: LE {(price * orderQty).toFixed(2)}
										</Typography>
										<IconButton
											onClick={handleDeleteItem}
											aria-label='delete'
											sx={{ color: '#000' }}
										>
											<DeleteIcon fontSize='small' />
										</IconButton>
									</Stack>
								</>
							)}
						</Grid>
					</Grid>
				</Paper>
		</Grid>
	);
};

export default ItemCard;
