import axios from "axios";

const url = "http://localhost:3001/persons"

const getAll = () => axios
                     .get(url)
                     .then(response => response.data)
                     

const CreatePerson = person => axios
                                .post(url, person)
                                .then(response => response.data)
                                


export default {
    getAll,
    CreatePerson
}