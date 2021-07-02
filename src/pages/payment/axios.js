import axios from "axios";

 const instance = axios.create({
    // local end point
   baseURL: 'http://localhost:5001/clone-b56b2/us-central1/api'
});

export default instance;