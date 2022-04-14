import { Typography, Grid } from '@mui/material';

import logo from '../static/img/logo.png';

const Footer = () => {
	return (
		<footer style={{ background: '#303030' }}>
			<Grid container>
				<Grid item sm={6}>
					<Typography
						variant='h6'
						component='div'
						sx={{ flexGrow: 1, fontWeight: '600', color: "#fff" }}
					>
						OBSD
						<img
							src={logo}
							alt='logo'
							style={{ width: '15px', marginLeft: '5px' }}
						/>
					</Typography>
				</Grid>
				
			<Typography sx={{color: "#fff"}} variant="subtitle1">© 2022 OBSD - All Rights Reserved.</Typography>

				
			</Grid>
		</footer>
	);
};

export default Footer;
