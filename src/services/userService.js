import axios from "axios";
import { API } from "../api/index";


export const userListService = async () => {
    try {
        let response = await API.get(`/users?page=1`);
        return response;
    } catch (error) {
        console.log(error);
    }
};