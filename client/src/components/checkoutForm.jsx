import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { addOrder } from '../actions/orders.actions';
import { resetCart } from '../actions/menuItems.actions';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import io from 'socket.io-client';

const CheckoutForm = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const socket = io();
	const cartItems = useSelector(state =>
		state.menuItems.filter(item => item.orderQty > 0)
	);
	const [openAlert, setOpenAlert] = useState(false);
	const formik = useFormik({
		initialValues: {
			name: '',
			mobile: '',
			address: '',
			city: '',
		},
		onSubmit: values => {
			dispatch(
				addOrder({
					userDetails: { ...values },
					pending: true,
					orderItems: cartItems,
				})
			);
			socket.emit('order sent', {
				userDetails: { ...values },
				pending: true,
				orderItems: cartItems,
			});
			formik.resetForm();
			setOpenAlert(true);
			setTimeout(() => {
				dispatch(resetCart());
			}, 3000);
		},
		validationSchema: Yup.object({
			name: Yup.string().required('Name is required').max(15, 'limit passed'),
			address: Yup.string().required('Address is required'),
			city: Yup.string().required('City is required'),
			mobile: Yup.number()
				.required('Mobile number is required')
				.integer()
				.positive()
				.typeError('Please enter a valid mobile number'),
		}),
	});

	const handleCancel = () => {
		navigate('/');
	};

	const Alert = React.forwardRef(function Alert(props, ref) {
		return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
	});

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpenAlert(false);
	};
	return (
		<div style={{ marginTop: 80, maxWidth: 480 }}>
			<TextField
				error={Boolean(formik.errors.mobile) && Boolean(formik.touched.mobile)}
				helperText={formik.errors.name}
				name='name'
				value={formik.values.name}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				margin='dense'
				id='name'
				label='Name'
				type='text'
				fullWidth
				variant='standard'
				color='success'
			/>
			<TextField
				error={Boolean(formik.errors.mobile) && Boolean(formik.touched.mobile)}
				helperText={formik.errors.mobile}
				name='mobile'
				value={formik.values.mobile}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				margin='dense'
				id='mobile'
				label='Mobile'
				type='text'
				variant='standard'
				color='success'
			/>
			<TextField
				error={
					Boolean(formik.errors.address) && Boolean(formik.touched.address)
				}
				helperText={formik.errors.address}
				name='address'
				value={formik.values.address}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				margin='dense'
				id='address'
				label='Address'
				type='text'
				fullWidth
				variant='standard'
				color='success'
			/>
			<TextField
				error={Boolean(formik.errors.city) && Boolean(formik.touched.city)}
				helperText={formik.errors.city}
				name='city'
				value={formik.values.city}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				margin='dense'
				id='city'
				label='City'
				type='text'
				variant='standard'
				color='success'
			/>
			<Grid
				container
				justifyContent='flex-start'
				spacing={2}
				sx={{ marginTop: '80px' }}
			>
				<Grid item>
					<Button
						className='order-btn'
						variant='contained'
						disableRipple
						sx={{ background: '#cd2f17', width: 200 }}
						size='large'
						onClick={formik.handleSubmit}
					>
						Order Now
					</Button>
				</Grid>
				<Grid item>
					<Button
						className='cancel-btn'
						variant='outlined'
						disableRipple
						size='large'
						onClick={handleCancel}
					>
						Cancel
					</Button>
				</Grid>
			</Grid>
			<Snackbar open={openAlert} autoHideDuration={3000} onClose={handleClose}>
				<Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
					Order is sent!
				</Alert>
			</Snackbar>
		</div>
	);
};

export default CheckoutForm;
