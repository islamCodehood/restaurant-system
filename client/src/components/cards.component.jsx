import ItemCard from './ItemCard.component';
import { Grid, CircularProgress } from '@mui/material';
import MenuFilterButtons from './menuFilterButtons';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


const Cards = () => {
	let menuItems = useSelector(state => state.menuItems);

	const [selectedCategory, setSelectedCategory] = useState('popular');

	const filterByCategory = (e, category) => {
        document.querySelectorAll(".active").forEach(el => el.classList.remove("active"));
        e.target.classList.add("active")
        
        setSelectedCategory(category)
    };
	const obj = {
		name: "islam"
	}
	useEffect(() => {
	}, [menuItems]);
	return (
		<Grid id='menu' container spacing={3} justifyContent='center'>
			<Grid item sm={12}>
				
				<MenuFilterButtons filterByCategory={filterByCategory} />
			</Grid>
			{!menuItems.length && <CircularProgress /> }
			{selectedCategory === 'popular'
				? menuItems
						.filter(menuItem => menuItem.popular)
						.map(menuItem => <ItemCard key={menuItem._id} {...menuItem} parent="menu" />)
				: menuItems
						.filter(menuItem => menuItem.category === selectedCategory)
						.map(menuItem => <ItemCard key={menuItem._id} {...menuItem} parent="menu" />)}
		</Grid>
	);
};

export default Cards;
