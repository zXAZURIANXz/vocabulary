import axios from "axios";

const baseURL = "http://localhost:3001/word";

/**
 * 
 * Obtiene todas las palabras en la lista
 */
export const getWords = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    throw error;
  }
};


/**
 * 
 * Agrega una nueva palabra
 */
export const setWords = async (data) => {
    axios.post(baseURL, data, {
        headers: {
          'Content-Type': 'application/json', // Indica que estás enviando JSON en el cuerpo
        }
    })
    .then((response) => {
        console.log('Solicitud POST exitosa:', response.data);
    })
    .catch((error) => {
        console.error('Error al realizar la solicitud POST:', error);
    });
};