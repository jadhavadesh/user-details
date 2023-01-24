import axios from "axios";
import { API } from "../api/index";


export const signUpService = async (data) => {
    try {
        let signupDetails = data;
        let response = await API.post('/register', signupDetails);
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const signInService = async (data) => {
    try {
        let signinDetails = data;
        let response = await API.post('/login', signinDetails);
        return response;
    } catch (error) {
        console.log(error);
    }
};