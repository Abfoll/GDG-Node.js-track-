const axios = require('axios');


const API_URL = 'https://jsonplaceholder.typicode.com/posts';


async function fetchData() {
  try {
  
    const response = await axios.get(API_URL);

   
    console.log('Data fetched successfully:', response.data);
  } catch (error) {
    
    console.error('Error fetching data:', error.message);
  }
}


fetchData();
