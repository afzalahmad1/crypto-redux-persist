import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Common/Header";
import Loader from "../components/Common/Loader";
import { coinObject } from "../functions/coinObject";
import List from "../components/Dashboard/List";
import CoinInfo from "../components/Coin/Coininfo";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import LineChart from "../components/Coin/LineChart";
//import { convertDate } from "../functions/convertDate";
import SelectDays from "../components/Coin/SelectDays";
import { settingChartData } from "../functions/settingChartData";
//import PriceType from "../components/Coin/PriceType";
import TogglePriceType from "../components/Coin/PriceType";

function CoinPage() {
  let currentUser = JSON.parse(localStorage.getItem("currentUser"))
  const { id } = useParams();
  const [isLoading,setIsLoading] = useState(true);
  const [coinData,setCoinData] = useState();
  const [days,setDays] = useState(30);
  const [chartData,setChartData] = useState({});
  const [priceType, setPriceType] = useState('prices');



  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);


  async function getData(){
    //function call getCoinData
    const data = await getCoinData(id);
   // console.log("data"+ data);
    if(data){
      //function call coinObject for setting state
      
      coinObject(setCoinData, data);
        const prices = await getCoinPrices(id,days,priceType)
        if(prices.length > 0){
          settingChartData(setChartData,prices,false);
          setIsLoading(false)
        }
      }
  }

   const handleDaysChange = async (event) => {
    setIsLoading(true);
    setDays(event.target.value);
    const prices = await getCoinPrices(id,event.target.value,priceType)
        if(prices.length > 0){
          //console.log("dddddfgghjhj")
          settingChartData(setChartData,prices,false);
          setIsLoading(false)
        }
      
  };

 
  const handlePriceTypeChange = async (event, newType) => {
   // console.log(newType)
    setIsLoading(true);
    if(newType !== null){
      setPriceType(newType);
      const prices = await getCoinPrices(id,days, newType)
      //console.log(typeof prices)
      if(prices.length > 0){
        settingChartData(setChartData,prices,false);
        setIsLoading(false)
      }
    }else{
      setIsLoading(false)
    }
   

    
  };

  if(!currentUser){
    return <h1 style={{textAlign:"center"}}>Please Login First.....</h1>
  }

  return (
        <div>
           <Header />
           {isLoading ? (
           <Loader />
           ) : (
           <>
           <div className="grey-wrapper" style={{padding: "0rem 1rem"}}>
           <List coin={coinData}/>
           </div>
           <div className="grey-wrapper">
            <SelectDays days={days} handleDaysChange={handleDaysChange}/>
            <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange}/>
            <LineChart chartData={chartData} priceType={priceType}/>
           </div>
           <CoinInfo heading={coinData.name} desc={coinData.desc}/>
           </>
           )}
         </div>
  )
}

export default CoinPage;
