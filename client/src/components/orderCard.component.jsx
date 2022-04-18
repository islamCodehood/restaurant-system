import {
	Typography,
	Divider,
	Paper,
	Checkbox,
	FormGroup,
	FormControlLabel,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeOrderStatus } from '../actions/orders.actions';
import moment from 'moment';

const OrderCard = ({ pending, orderItems, _id, userDetails, createdAt }) => {
	const [checked, setChecked] = useState({});
	const [timerColor, setTimerColor] = useState('');
	const dispatch = useDispatch();
	const handleChange = e => {
		setChecked({ ...checked, [e.target.id.toString()]: e.target.checked });
	};
	useEffect(() => {
		console.log(checked)
		const checkedItems = Object.values(checked).filter(
			checked => checked === true
		);
		if (checkedItems.length === orderItems.length) {
			console.log(_id)
			dispatch(
				changeOrderStatus({ pending: false, orderItems, _id, userDetails, createdAt }, _id)
			);
		}
	}, [checked]);

	useEffect(() => {
		setTimerColor('#ff9200')
		let interval;
		interval = setInterval(() => {
			const now = Date.now();
			//console.log(createdAt)
			const diff = now - createdAt;
			//console.log(now, diff)
			// if (diff < 60000) {
			// 	setTimerColor('green');
			// } else if (diff > 60000 && diff < 120000) {
			// 	setTimerColor('orange');
			// } else if (diff > 120000) {
			// 	setTimerColor('red');
			// }
		}, 10);
		
		return () => clearInterval(interval);
	}, []);

	return (
		<Paper elevation={2} sx={{ width: '300px' }}>
			<Typography
				variant='body1'
				component="div"
				sx={{
					textAlign: 'right',
					padding: '8px',
					background: !pending ? '#303030' : timerColor,
					color: '#000',
				}}
			>
				{moment().startOf('second').fromNow()}
			</Typography>
			<Divider />
			<FormGroup sx={{ padding: '8px' }}>
				{orderItems.map(item => (
					<FormControlLabel
						sx={{ textDecoration: !pending ? 'line-through' : '' }}
						key={item._id}
						control={
							<Checkbox
								id={item._id}
								onChange={handleChange}
								disabled={
									!pending ? true : false
								}
							/>
						}
						label={`${item.itemName} - Qty: ${item.orderQty}`}
					/>
				))}
			</FormGroup>
		</Paper>
	);
};

export default OrderCard;
