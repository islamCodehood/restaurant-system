import {useState, useEffect} from 'react';
const Timer = ({startAt}) => {
	const [time, setTime] = useState(startAt);
	
	useEffect(() => {
		let interval;
			interval = setInterval(() => {
				setTime(prevTime => prevTime + 10);
				
			}, 10);
			
		return () => clearInterval(interval);
	}, []);
	return (
		<div>
			<div>
				<span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
				<span>{('0' + Math.floor((time 	/ 1000) % 60)).slice(-2)}</span>
			</div>
		</div>
	);
};

export default Timer;