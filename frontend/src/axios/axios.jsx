import axios from "axios";

const api = axios.create({
    baseURL: "https://QuantumCare.onrender.com/api/v1",

})

export default api;