import axios from '../axious';

const getAllActors = (id)=>{
    return axios.get(`/api/get-all-actors?id=${id}`,{
        actorID: id
    })
}

const editActorApi = (actorData)=>{
    return axios.put('/api/edit-actor',{
        actor: actorData
    })
}

const deleteActor = (actorID)=>{
    console.log(actorID);
	return axios.delete('/api/delete-actor', {
		data: {
			actorID: actorID,
		},
	});
}

export {
    getAllActors,
    editActorApi,
    deleteActor
}