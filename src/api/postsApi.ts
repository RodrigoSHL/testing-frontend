import axios from "axios";

const baseURL = 'http://localhost:3000/api';

const postsApi = axios.create({
  baseURL: baseURL,
});


export default postsApi;