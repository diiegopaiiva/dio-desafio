import axios from 'axios';

const URL_API = 'http://localhost:5000'; // Atualize com o URL correto do seu backend

export const makeRequest = async (message) => {
  try {
    const response = await axios.post(URL_API, { prompt: message });
    return response.data;
  } catch (error) {
    console.error('Error calling API:', error);
    throw error;
  }
};