import axios from "axios";

export const getCoinData = (id) => {
  //for particular id details
  const myData = axios(`https://api.coingecko.com/api/v3/coins/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
    return myData;
};
