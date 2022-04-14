import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar.component';
import Footer from './components/footer.component';
import Home from './pages/home.page';
import Checkout from './pages/checkout.page';
import Dashboard from './pages/dashboard.page';
import { useDispatch} from "react-redux"
import {useEffect} from "react"
import {getMenuItems} from "./actions/menuItems.actions"
function App() {
	const dispatch = useDispatch()
	//const menuItems = useSelector(state => state.menuItems)
	useEffect(() => {
		dispatch(getMenuItems())
	}, [])

	return (
		<div className='App'>
				<NavBar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/checkout' element={<Checkout />} />
					<Route path='/dashboard/pending-orders' element={<Dashboard />} />
					<Route path='/dashboard/completed-orders' element={<Dashboard />} />
				</Routes>
				<Footer />
		</div>
	);
}

export default App;
