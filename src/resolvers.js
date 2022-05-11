import axios from 'axios';

module.exports = {
  Query: {
    cep: (_, { cep }) => axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return [];
    })
  },
};