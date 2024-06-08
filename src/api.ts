import axios from 'axios';

export const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:4000/data');
    console.log('Full response:', response);
    console.log('response.data:', response.data); // Log the structure of response.data

    // Ensure response structure is correct
    if (response.data && response.data.AuthorWorklog) {
      const data = response.data.AuthorWorklog;
      console.log('Fetched data:', data); // Log fetched data
      return data;
    } else {
      throw new Error('Unexpected response structure');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
