import { useEffect } from 'react';
import {
	Drawer,
	List,
	Typography,
	Divider,
	ListItem,
	ListItemText,
	Grid,
	Paper,
} from '@mui/material';
import { useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../actions/orders.actions';
import OrderCard from '../components/orderCard.component';
import Masonry from '@mui/lab/Masonry';
import io from 'socket.io-client';

const Dashboard = () => {
	const dispatch = useDispatch();
	const orders = useSelector(state => state.orders);
	const socket = io();
	useEffect(() => {
		document.title = 'OBSD | Dashboard';
		dispatch(getOrders());
	}, [orders]);

	const pendingOrders = orders.filter(order => order.pending);
	const completedOrders = orders.filter(order => !order.pending);
	const location = useLocation();
	const path = location.pathname;
	const splittedPath = path.split('/');

	useEffect(() => {
		console.log(orders);
	}, [orders]);
	
	socket.on('order sent', order => {
		dispatch(getOrders());
	});
	return (
		<Grid container style={{ minHeight: '90vh' }}>
			<Grid item>
				<Drawer
					sx={{
						width: 240,
						flexShrink: 0,
						'& .MuiDrawer-paper': {
							width: 240,
							boxSizing: 'border-box',
							background: '#303030',
							color: '#FFFF',
							position: 'relative',
						},
						height: '100vh',
						position: 'relative',
					}}
					variant='permanent'
					anchor='left'
				>
					<Typography
						component='div'
						sx={{
							height: '80px',
							display: 'flex',
							alignItems: 'center',
							paddingLeft: '16px',
							fontWeight: '700',
						}}
					>
						DASHBOARD
					</Typography>

					<Divider sx={{ background: '#707070' }} />
					<List disablePadding>
						{['Pending Orders', 'Completed Orders'].map((text, index) => (
							<div key={index}>
								<ListItem
									sx={{
										padding: '10px',
										borderLeft:
											splittedPath[splittedPath.length - 1].toLowerCase() ===
											text.toLowerCase().replace(' ', '-')
												? '20px solid #cd2f17'
												: '20px solid #303030',
									}}
									button
								>
									<Link
										style={{ textDecoration: 'none', color: '#fff' }}
										to={`/dashboard/${text.toLowerCase().replace(' ', '-')}`}
									>
										<ListItemText primary={text} />
									</Link>
								</ListItem>
								<Divider sx={{ background: '#707070' }} />
							</div>
						))}
					</List>
				</Drawer>
			</Grid>
			<Grid item md={9} sx={{ width: '600px' }}>
				<Grid container spacing={2} sx={{ padding: '20px' }}>
					{!orders.length
						? null
						: path === '/dashboard/pending-orders'
						? orders
								.filter(order => order.pending)
								.map(order => (
									<Grid item key={order._id}>
										<OrderCard {...order} />
									</Grid>
								))
						: orders
								.filter(order => !order.pending)
								.map(order => (
									<Grid item key={order._id}>
										<OrderCard {...order} />
									</Grid>
								))}
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Dashboard;
