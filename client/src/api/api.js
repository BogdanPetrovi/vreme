import axios from "axios";

export default axios.create({
  baseURL: 'https://vreme-3bk0.onrender.com',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
});
