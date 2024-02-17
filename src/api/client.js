import axios from "axios";

const client = axios.create({ baseURL: "https://hci2.onrender.com/api" });

export default client;
