import {
	Typography,
	Divider,
	Grid,
	Paper,
	Checkbox,
	FormGroup,
	FormControlLabel,
} from '@mui/material';
import { useTimer } from 'react-timer-hook';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeOrderStatus } from '../actions/orders.actions';
import Timer from './timer';
const OrderCard = ({ pending, orderItems, id, userDetails, orderedAt }) => {
	const [checked, setChecked] = useState({});
	const [timerColor, setTimerColor] = useState('');
	const dispatch = useDispatch();
	const handleChange = e => {
		setChecked({ ...checked, [e.target.id.toString()]: e.target.checked });
	};
	useEffect(() => {
		const checkedItems = Object.values(checked).filter(
			checked => checked === true
		);
		if (checkedItems.length === orderItems.length) {
			dispatch(
				changeOrderStatus({ pending: false, orderItems, id, userDetails })
			);
		}
	}, [checked]);

	useEffect(() => {
		let interval;
		interval = setInterval(() => {
			const now = new Date();
			const diff = now - orderedAt;
			if (diff < 60000) {
				setTimerColor('green');
			} else if (diff > 60000 && diff < 120000) {
				setTimerColor('orange');
			} else if (diff > 120000) {
				setTimerColor('red');
			}
		}, 10);
		
		console.log(document.hidden)
		return () => clearInterval(interval);
	}, []);

	return (
		<Paper elevation={2} sx={{ width: '300px' }}>
			<Typography
				variant='body1'
				sx={{
					textAlign: 'right',
					padding: '8px',
					background: !pending ? '#303030' : timerColor,
					color: '#fff',
				}}
			>
				<Timer startAt={Date.now() - orderedAt} />
			</Typography>
			<Divider />
			<FormGroup sx={{ padding: '8px' }}>
				{orderItems.map(item => (
					<FormControlLabel
						sx={{ textDecoration: !pending ? 'line-through' : '' }}
						key={item.id}
						control={
							<Checkbox
								id={item.id}
								onChange={handleChange}
								/* checked={!pending ? true : null} */ disabled={
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
