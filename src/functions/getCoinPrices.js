import axios from "axios";
export const getCoinPrices = (id, days, priceType) =>{

    //for chart (price,market_cap,total_volume)
   const prices = axios(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
    .then((response)=>{
      // console.log(response.data);
      return response.data[priceType];
    }).catch((error)=>{
      console.log(error);
    })
    return prices;
}