import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8079';
axios.defaults.headers.post["Content-Type"] = 'application/json';

export const getAuthToken = () => {
    return window.localStorage.getItem("auth_token");
}

export const setAuthToken = (token) => {
    return window.localStorage.setItem("auth_token", token);
}

export const request = (method, url, data) => {

    let headers = {};
    if (getAuthToken() !== null && getAuthToken() !== "null") {
        headers = { "Authorization": `Bearer ${getAuthToken()}` };
    }

    return axios({
        method: method,
        headers: headers,
        url: url,
        data: data
    }).then((response) => {
        console.log("Respuesta de la API: ", response);
        return response;
    });
};