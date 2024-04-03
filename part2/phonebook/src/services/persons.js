import axios from "axios";

const url = "http://localhost:3001/persons"

const getAll = () => axios
                     .get(url)
                     .then(response => response.data)
                     

const CreatePerson = person => axios
                                .post(url, person)
                                .then(response => response.data)

const UpdatePerson = (newPerson, id) => axios
                                           .put(`${url}/${id}`, newPerson)
                                           .then(response => response.data)

const DeletePerson = (id) => axios
                                .delete(`${url}/${id}`)
                                .then(response => response.data.id)



export default {
    getAll,
    CreatePerson,
    UpdatePerson,
    DeletePerson
}