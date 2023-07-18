import axios from "axios"

export default function useApi() {
    axios.defaults.baseURL = "http://localhost:3030"

    return axios
}