import axios from "axios";

export default axios.create({
  baseURL: 'https://vreme-one.vercel.app/',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
});
