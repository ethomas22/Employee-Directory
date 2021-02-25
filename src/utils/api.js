import axios from "axios";

export default function getResults () {
    return axios.get ('https://randomuser.me/api/?results=25')
};
