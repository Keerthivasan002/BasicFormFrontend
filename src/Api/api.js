import axios from "axios";

// we need to pass the baseURL as an object
const API = axios.create({
    baseURL: "https://basicformbackend-25v5.onrender.com/",
});

export default API;