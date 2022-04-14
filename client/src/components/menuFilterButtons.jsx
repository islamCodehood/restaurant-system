import { Button, Grid } from '@mui/material';
import '../App.css';
const MenuFilterButtons = ({filterByCategory}) => {
	return (
		<Grid container justifyContent='center' spacing={2} sx={{margin: "60px 0", width: "100%"}}>
			<Grid item>
				<Button
					variant='outlined'
					size='medium'
					className='menu-filter-btn active'
					disableRipple
					onClick={(e) => filterByCategory(e, 'popular')}
					id="popular-btn"
				>
					POPULAR
				</Button>
			</Grid>
			<Grid item>
				<Button
					variant='outlined'
					size='medium'
					className='menu-filter-btn'
					disableRipple
					onClick={(e) => filterByCategory(e, "pizza")}
				>
					PIZZA
				</Button>
			</Grid>
			<Grid item>
				<Button
					variant='outlined'
					size='medium'
					className='menu-filter-btn'
					disableRipple
					onClick={(e) => filterByCategory(e, "burger")}
				>
					Burger
				</Button>
			</Grid>
			<Grid item>
				<Button
					variant='outlined'
					size='medium'
					className='menu-filter-btn'
					disableRipple
					onClick={(e) => filterByCategory(e, "drinks")}
				>
					DRINKS
				</Button>
			</Grid>
		</Grid>
	);
};

export default MenuFilterButtons;
