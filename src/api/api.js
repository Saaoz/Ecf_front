import axios from 'axios';

export const fetchData = async () => {
    const response = await fetch('http://localhost:8000/jobs');
    const data = await response.json();
    return data;
  };

  export const fetchSingleData = async (id) => {
    const response = await fetch(`http://localhost:8000/jobs/${id}`);
    const data = await response.json();
    return data;
  };

  export const searchJobOffers = async (keyword, location, isFullTime) => {
    try {
      const response = await axios.get('/api/offers', {
        params: {
          position: keyword,
          location: location,
          isFullTime: isFullTime ? true : undefined
        }
      });
      return response.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  };