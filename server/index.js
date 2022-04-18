import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import menuRoutes from './routes/menu.routes.js';
import ordersRoutes from './routes/orders.routes.js';
import dotenv from 'dotenv';
import { Server } from 'socket.io';
const app = express();

dotenv.config();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

app.use(cors());

app.use('/menu', menuRoutes);
app.use('/orders', ordersRoutes);

const server = app.listen(process.env.PORT, () =>
	console.log(`server running at port: ${process.env.PORT}`)
);
mongoose
	.connect(process.env.CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => server)
	.catch(err => {
		console.log(err.message);
	});

const io = new Server(server);
io.on('connection', socket => {
	console.log('a user connected');
	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
	socket.on('order sent', order => {
		io.emit('order sent', order);
	});
});

app.get('/', (req, res) => {
	res.send('Connected');
});
