import axios from "axios";

export const DEVELOPMENT_URL = "https://reqres.in/api";

export const API = axios.create({
    baseURL: DEVELOPMENT_URL,

});