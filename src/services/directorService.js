import axios from '../axious';

const getAllDirectors = (id)=>{
    return axios.get(`/api/get-all-directors?id=${id}`,{
        directorID: id
    })
}

const createNewDirectorApi = (directorData)=>{
    return axios.post('/api/create-new-director',{
        director: directorData
    })
}

const editDirectorApi = (directorData)=>{
    return axios.put('/api/edit-director',{
        director: directorData
    })
}

const deleteDirectorApi = (directorID)=>{
    console.log(directorID);
	return axios.delete('/api/delete-director', {
		data: {
			directorID: directorID,
		},
	});
}

const searchDirectorApi = (keyword)=>{
    return axios.get(`/api/get-search-director?keyword=${keyword}`,{
        keyword: keyword
    })
}

export {
    getAllDirectors,
    createNewDirectorApi,
    editDirectorApi,
    deleteDirectorApi,
    searchDirectorApi
}