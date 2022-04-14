import CheckoutCart from '../components/checkoutCart';
import CheckoutForm from '../components/checkoutForm';
import { Grid, Divider } from '@mui/material';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
const Checkout = () => {

	useEffect(() => {
		document.title = 'OBSD | Checkout';
	}, []);

	return (
		<Grid
			container
			spacing={2}
			justifyContent='space-around'
			sx={{ minHeight: '100vh' }}
		>
			<Grid item xs={12} sm={6}>
				<CheckoutForm />
			</Grid>
			<Divider orientation='vertical' variant='middle' flexItem />
			<Grid item sm={4}	> 
				<CheckoutCart/>
			</Grid>
		</Grid>
	);
};

export default Checkout;
