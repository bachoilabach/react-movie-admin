import axios from '../axious';

const getAllMovies = (id) => {
	return axios.get(`/api/get-all-movies?id=${id}`, {
		movieID: id,
	});
};

const createNewMovieApi = (movieData) => {
	return axios.post('/api/create-new-movie', {
		movie: movieData,
	});
};

const editMovieApi = (movieData) => {
	return axios.put('/api/edit-movie', {
		movie: movieData,
	});
};

const deleteMovie = (movieID) => {
	return axios.delete('/api/delete-movie', {
		data: {
			movieID: movieID,
		},
	});
};

const getAllCountries = (id) => {
	return axios.get(`/api/get-all-countries?id=${id}`, {
		countryID: id,
	});
};

const getAllGenresMovie = (id) => {
	return axios.get(`/api/get-all-moviegenres?id=${id}`, {
		movieID: id,
	});
};

const getAllActorsMovie = (id) => {
	return axios.get(`/api/get-all-movieactors?id=${id}`, {
		movieID: id,
	});
};

const getAllDirectorsMovie = (id) => {
	return axios.get(`/api/get-all-moviedirectors?id=${id}`, {
		movieID: id,
	});
};

export {
	getAllMovies,
	createNewMovieApi,
	editMovieApi,
	deleteMovie,
	getAllCountries,
	getAllGenresMovie,
	getAllActorsMovie,
	getAllDirectorsMovie,
};
