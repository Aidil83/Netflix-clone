import React, { useState, useEffect } from 'react';
import axios from './axios';

function Row({ title, fetchUrl }) {
	const [movies, setMovies] = useState([]);

	// A snippet of code which runs based on a specific condition/variable
	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			console.log(request);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, []);

	return (
		<div>
			<h2>{title}</h2>
		</div>
	);
}

export default Row;