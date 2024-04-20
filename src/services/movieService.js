import axios from '../axious';

const getAllMovies = (id)=>{
    return axios.get(`/api/get-all-movies?id=${id}`,{
        movieID: id
    })
}

const createNewMovieApi = (movieData)=>{
    return axios.post('/api/create-new-movie',{
        movie: movieData
    })
}

const editMovieApi = (movieData)=>{
    return axios.put('/api/edit-movie',{
        movie: movieData
    })
}

const deleteMovie = (movieID)=>{
    console.log(movieID);
	return axios.delete('/api/delete-movie', {
		data: {
			movieID: movieID,
		},
	});
}

export {
    getAllMovies,
    createNewMovieApi,
    editMovieApi,
    deleteMovie
}