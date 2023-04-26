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

  export const searchJobOffers = async (keyword, location, contract, company) => {
    try {
    const response = await axios.get('/api/offers/search', {
    params: {
    keyword: keyword,
    location: location,
    contract: contract ? 'full-time' : undefined,
    company: company
    }
    });
    return response.data;
    } catch (error) {
    console.error(error);
    return [];
    }
    };