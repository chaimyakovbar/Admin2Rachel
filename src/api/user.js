import axios from 'axios';

const baseurl = 'https://racheldatabase2.onrender.com/users'

export const getUsers = async () => await axios.get(baseurl);

export const postUsers = async (nameUsers) => {
    return await axios.post(baseurl, { name: nameUsers });
};

export const deleteUsers = async (id) => {
    return await axios.delete(`${baseurl}/${id}`);
};

 
 