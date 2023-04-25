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
