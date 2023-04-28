import axios from 'axios';
const moment = require('moment');
axios.defaults.baseURL = `http://localhost:8000`

export const searchJobOffers = async (position, location, contract) => {
  try {
    const response = await fetch(`http://localhost:8000/api/jobs/search?position=${position}&location=${location}&contract=${contract}`);
    return response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};


export const fetchData = async () => {
    const response = await axios.get('/api/jobs');
    return response.data;
  };

  


  export const fetchSingleData = async (id) => {
    const response = await axios.get(`/api/jobs/${id}`);
    return response.data;
  };

  export const postJob = async (jobData) => {
    try {
      const postedAt = moment().format('AAAA-MM-JJTHH:MM:SS.000Z');
      const data = {...jobData, postedAt};
      const response = await axios.post('/api/jobs/create/', data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };