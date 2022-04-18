import {
	Button,
	TextField,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Badge,
	Grid,
	Divider,
	Typography
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import delivery from '../static/img/delivery.png';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import ItemCard from './ItemCard.component';
import { useNavigate } from 'react-router-dom'

const Cart = () => {
	const [open, setOpen] = useState(false);

	const cartItems = useSelector(state =>
		state.menuItems.filter(item => item.orderQty > 0)
	);
	const navigate = useNavigate();

	const handleClickOpen = () => {
		cartItems.length && setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const checkout = () => {
		navigate("/checkout");
		setOpen(false);
	};

	useEffect(() => {
		cartItems.length === 0 && setOpen(false);
	}, [cartItems])
	return (
		<div>
			<Button variant='outlined' onClick={handleClickOpen}>
				<Badge
					badgeContent={cartItems.length}
					component='div'
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}
					color='warning'
				></Badge>
				<img
					src={delivery}
					alt='cart'
					style={{ width: '35px', marginLeft: '5px' }}
				/>
			</Button>
					<Dialog
						open={open}
						onClose={handleClose}
						/* scroll='paper' */
					 	sx={{
							width: '500px',
							height: '100%',
							padding: '10px',
						}}
					>
						<DialogContent>
							<Grid container>
								{cartItems.map((item, idx) => (
									<ItemCard key={item._id} {...item} parent='cart' />
								))}
							</Grid>
							<Divider />
							<Typography sx={{marginTop: "10px"}}>
								Subtotal: LE {(cartItems.reduce((acc, item) => acc + item.price * item.orderQty, 0)).toFixed(2)}
							</Typography>
						</DialogContent>
						<DialogActions>
							<Button
								className='btn'
								variant='contained'
								disableRipple
								sx={{ background: '#ff9200' }}
								fullWidth
								onClick={checkout}
							>
								Checkout
							</Button>
						</DialogActions>
					</Dialog>
		</div>
	);
};

export default Cart;
