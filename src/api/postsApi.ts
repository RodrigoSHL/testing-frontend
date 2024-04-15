import axios from "axios";

const baseURL = 'https://jsonplaceholder.typicode.com';

const postsApi = axios.create({
  baseURL: baseURL,
});


export default postsApi;