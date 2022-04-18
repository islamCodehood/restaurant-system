import axios from 'axios';
//prod URL
const API = axios.create({baseURL: 'https://restaurant-app-ism.herokuapp.com/'});
//dev URL
//const API = axios.create({ baseURL: 'http://localhost:5000' });

export const getMenuItems = () => API.get('/menu');

export const addOrder = order => API.post('/orders', order)

export const getOrders = () => API.get('/orders');

export const changeOrderStatus = (updatedOrder, id) => API.patch(`/orders/${id}`, updatedOrder);