import axios from "axios";


const publicAxios = axios.create({
    baseURL: import.meta.env.VITE_API_LOCALHOST,
})

const PublickAxios = () => {
    return publicAxios;
}

export default PublickAxios