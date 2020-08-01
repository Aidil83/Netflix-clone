import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';

function App() {
	return (
		<div className='app'>
			<Banner />
			<Row
				title='NETFLIX ORIGINALS'
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow
			/>
			<Row title='Trending Now' fetchUrl={requests.fetchTrending} />
			<Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
			<Row title='Action Movie' fetchUrl={requests.fetchActionMovies} />
			<Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
			<Row title='Horrow Movies' fetchUrl={requests.fetchHorrorMovies} />
			<Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
			<Row title='Documentaries' fetchUrl={requests.fetchDocoumentMovies} />
		</div>
	);
}

export default App;
