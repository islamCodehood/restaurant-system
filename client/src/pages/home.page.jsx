import { Grid, Typography } from '@mui/material';
import heroPizza from '../static/img/heroPizza.png';
import Cards from '../components/cards.component';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { smoothScrollToMenu } from '../utils/scroll'
import { useEffect } from 'react';

const Home = () => {
	useEffect(() => {
		document.title = 'OBSD'
	}, [])
	
	return (
		<div style={{ minHeight: '100vh', color: '#fff' }}>
			<Grid
				container
				justifyContent='center'
				sx={{ background: '#303030', minHeight: '80vh', paddingTop: '80px' }}
			>
				<Grid item>
					<Grid container direction='column'>
						<Grid item sx={{ paddingTop: '60px' }}>
							<Typography
								variant='h4'
								component='div'
								sx={{ fontWeight: '700', width: '350px' }}
							>
								ENJOY YOUR DELICIOUS{' '}
								<span style={{ color: '#ff9200' }}>FOOD</span>
							</Typography>
						</Grid>
						<Grid
							item
							style={{
								width: 200,
								height: 50,
								border: '1px dashed #707070',
								borderLeft: '20px solid #CD2F17',
								display: 'flex',
								alignItems: 'center',
								paddingLeft: '10px',
								marginTop: '20px',
							}}
						>
							<Typography variant='subtitle2' sx={{ fontWeight: '600' }}>
								Buy 1 Get 1 Free 
							</Typography>
							
						</Grid>
						<Grid
							item
							style={{
								width: 200,
								height: 50,
								border: '1px dashed #707070',
								borderLeft: '20px solid #CD2F17',
								display: 'flex',
								alignItems: 'center',
								paddingLeft: '10px',
								marginTop: '20px',
							}}
						>
							<Typography variant='subtitle2' sx={{ fontWeight: '600' }}>
								Order Online Now
							</Typography>
							<ArrowDownwardIcon sx={{marginLeft: "10px"}} onClick={smoothScrollToMenu} />
						</Grid>
					</Grid>
				</Grid>
				<Grid item>
					<img src={heroPizza} alt='pizza' width='400' />
				</Grid>
			</Grid>
			<Cards />
		</div>
	);
};

export default Home;
