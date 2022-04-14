import { AppBar, Toolbar, Typography /* Link */ } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../static/img/logo.png';
import Cart from './cart.component';
import { smoothScrollToMenu } from '../utils/scroll';

const NavBar = () => {
	return (
		<AppBar position='static'>
			<Toolbar sx={{ background: '#303030' }}>
				<Typography
					variant='h5'
					component='div'
					sx={{ flexGrow: 1, fontWeight: '700' }}
				>
					<Link to='/' style={{ textDecoration: 'none', color: '#fff' }}>
						OBSD
						<img
							src={logo}
							alt='logo'
							style={{ width: '20px', marginLeft: '5px' }}
						/>
					</Link>
				</Typography>

				<Link
					to='#menu'
					style={{ textDecoration: 'none', color: '#fff' }}
					onClick={smoothScrollToMenu}
				>
					MENU
				</Link>
				<Link
					to='#menu'
					style={{
						marginRight: '20px',
						marginLeft: '10px',
						textDecoration: 'none',
						color: '#fff',
					}}
					onClick={smoothScrollToMenu}
				>
					MOST POPULAR
				</Link>
				<Cart />
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
