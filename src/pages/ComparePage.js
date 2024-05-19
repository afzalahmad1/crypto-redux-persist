import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import SelectCoins from "../components/Compare/SelectCoins";
import SelectDays from "../components/Coin/SelectDays";
import { getCoinData } from "../functions/getCoinData";
import { getCoinPrices } from "../functions/getCoinPrices";
import { coinObject } from "../functions/coinObject";
import List from "../components/Dashboard/List";
import CoinInfo from "../components/Coin/Coininfo";
import { settingChartData } from "../functions/settingChartData";
import LineChart from "../components/Coin/LineChart";
import TogglePriceType from "../components/Coin/PriceType";
import Loader from "../components/Common/Loader";

function ComparePage() {
  let currentUser = JSON.parse(localStorage.getItem("currentUser"))
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [crypto1Data, setCrypto1Data] = useState([]);
  const [crypto2Data, setCrypto2Data] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [priceType, setPriceType] = useState("prices");
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState(null);

  async function handleDaysChange(event) {
    setIsLoading(true);
    setDays(event.target.value);
    const prices1 = await getCoinPrices(crypto1, event.target.value, priceType);
    const prices2 = await getCoinPrices(crypto2, event.target.value, priceType);
    settingChartData(setChartData, prices1, prices2);
    setIsLoading(false);
  }
  const handlePriceTypeChange = async (event, newType) => {
    // console.log(newType)
     setIsLoading(true);
     if(newType !== null){
       setPriceType(newType);
       const prices1 = await getCoinPrices(crypto1, days, newType);
       const prices2 = await getCoinPrices(crypto2, days, newType);
       settingChartData(setChartData, prices1, prices2);
       setIsLoading(false)
       //console.log(typeof prices)
     }else{
       setIsLoading(false)
     }
    }

  useEffect(() => {
    getData();
  }, []);

  // const getData = async () => {
  //   setIsLoading(true);
  //   const data = await get100Coins();
  //   if (data) {
  //     setAllCoins(data);
  //   }
  //   const data1 = await getCoinData(coin1);
  //   const data2 = await getCoinData(coin2);
  //   coinObject(setCoin1Data, data1);
  //   coinObject(setCoin2Data, data2);
  //   const prices1 = await getCoinPrices(coin1, days);
  //   const prices2 = await getCoinPrices(coin2, days);
  //   settingChartData(setChartData, prices1, coin1Data, coin2Data, prices2);
  //   setIsLoading(false);
  // };

  async function getData() {
    try {
      setIsLoading(true);
    const data1 = await getCoinData(crypto1);

    if (data1 != null || data1 !== undefined) {
      const data2 = await getCoinData(crypto2);
      coinObject(setCrypto1Data, data1);
      if (data2 != null || data2 !== undefined) {
        coinObject(setCrypto2Data, data2);
        const prices1 = await getCoinPrices(crypto1, days, priceType); 
        const prices2 = await getCoinPrices(crypto2, days, priceType);
        settingChartData(setChartData, prices1, prices2);
        //console.log(typeof prices1);
        // console.log("prices2", prices2);
        setIsLoading(false);
      }
    }
    } catch (error) {
      console.log(error);
    }
  }

  const handleCoinChange = async (event, isCoin2) => {
    setIsLoading(true);
    if (isCoin2) {
      setCrypto2(event.target.value);
      const data = await getCoinData(event.target.value); //here event.data.value == id
      // console.log("data"+ data);
      coinObject(setCrypto2Data, data);
      const prices1 = await getCoinPrices(crypto1, days, priceType);
      const prices2 = await getCoinPrices(crypto2, days, priceType);
      settingChartData(setChartData, prices1, prices2);
        // console.log(" pricess1111====>",prices1);
        // console.log(" pricess22222====>",prices2);
        setIsLoading(false);
    } else {
      setCrypto1(event.target.value);
      //console.log("cr1",event.target.value);
      const data = await getCoinData(event.target.value); //here event.data.value == id
      coinObject(setCrypto1Data, data);
      const prices1 = await getCoinPrices(crypto1, days, priceType);
      const prices2 = await getCoinPrices(crypto2, days, priceType);
      settingChartData(setChartData, prices1, prices2);
      setIsLoading(false);
    }
  };
  

  if(!currentUser){
    return <h1 style={{textAlign:"center"}}>Please Login First.....</h1>
  }

  if (crypto1Data == null || crypto2Data == null || chartData == null)
    return null;
  return (
    <div>
      <Header />
      {isLoading ? (
           <Loader />
      ) : (
        <>
      <div className="coins-days-flex">
        <SelectCoins
          crypto1={crypto1}
          crypto2={crypto2}
          handleCoinChange={handleCoinChange}
        />
        <SelectDays
          days={days}
          handleDaysChange={handleDaysChange}
          noPTag={true}
        />
      </div>

      <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
        <List coin={crypto1Data} />
      </div>
      <div className="grey-wrapper" style={{ padding: "0rem 1rem" }}>
        <List coin={crypto2Data} />
      </div>
      <div className="grey-wrapper">
        <TogglePriceType
          priceType={priceType}
          handlePriceTypeChange={handlePriceTypeChange}
        />
        <LineChart
          chartData={chartData}
          priceType={priceType}
          multiAxis={true}
        />
      </div>

      <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
      <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
      </>
      )}
    </div>
  );
}

export default ComparePage;
