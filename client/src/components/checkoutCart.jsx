import { Grid, Divider, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import ItemCard from './ItemCard.component';
import { useNavigate } from 'react-router-dom';

const CheckoutCart = () => {
	const cartItems = useSelector(state =>
		state.menuItems.filter(item => item.orderQty > 0)
	);
	const navigate = useNavigate();

	useEffect(() => {
		if (cartItems.length === 0) {
			navigate('/');
		}
	}, [cartItems]);

	return (
		<div style={{overflow: 'auto', height: '80vh'}}>
			<Grid container direction='column'>
				{cartItems.map((item, idx) => (
					<ItemCard key={item.id} {...item} parent='cart' />
				))}
			</Grid>
			<Divider />
			<Typography sx={{ marginTop: '10px' }}>
				Subtotal: LE{' '}
				{cartItems
					.reduce((acc, item) => acc + item.price * item.orderQty, 0)
					.toFixed(2)}
			</Typography>
		</div>
	);
};

export default CheckoutCart;
