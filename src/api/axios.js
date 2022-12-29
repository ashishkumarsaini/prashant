import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com';

const extendedAxios = (method = '',url = '',data = {}) => {
    return axios({
        method: method,
        url: `${baseURL}${url}`,
        data: data,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
};

export default extendedAxios;