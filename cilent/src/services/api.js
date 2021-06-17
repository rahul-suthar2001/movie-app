import axios from 'axios';

const baseUrl = 'https://movieworldapp.herokuapp.com/movie';

export const getmovie = async ()=>{
    return await axios.get(`${baseUrl}/`);
}
export const addMovie = async (movie) => {
    return await axios.post(`${baseUrl}/add`, movie);
}

export const show = async(id)=>{
    return await axios.get(`${baseUrl}/${id}`);
}


export const deletemovie = async (id) => {
    return await axios.delete(`${baseUrl}/${id}`);
}
export const editmovie = async(id,Movie)=>{
    return await axios.put(`${baseUrl}/${id}/edit`,Movie);
}