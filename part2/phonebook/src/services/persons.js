import axios from "axios";

const url = "http://localhost:3001/persons"

const getAll = () => axios
                     .get(url)
                     .then(response => response.data)
                     

const CreatePerson = person => axios
                                .post(url, person)
                                .then(response => response.data)
                                
const DeletePerson = (id) => {
    return axios
            .delete(`${url}/${id}`)
            .then(response => response.data.id)
}


export default {
    getAll,
    CreatePerson,
    DeletePerson
}