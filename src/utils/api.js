import axios from "axios";

 const api=axios.create({
    baseURL:'https://api.unsplash.com/',

    headers:{
        Authorization: `Client-ID K0LPf9nik9fu2qPQ9VeMG1gAmfVFLkCEv6jtWHo_O5E`},
});

export default api;