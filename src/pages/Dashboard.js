import React, { useEffect, useState } from "react";
import Header from "../components/Common/Header";
import TabsComponent from "../components/Dashboard/Tabs";
import Search from "../components/Dashboard/Search";
import PaginationComponent from '../components/Dashboard/Pagination'
import Loader from '../components/Common/Loader'
import BackToTop from '../components/Common/BackToTop'
import { get100Coins } from "../functions/get100Coins";

function DashboardPage() {

let currentUser = JSON.parse(localStorage.getItem("currentUser"))

  const [coins, setCoins] = useState([]);
  const [paginatedCoins, setPaginatedCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //Pagination
  const [page, setPage] = useState(1)
  const handlePageChange = (event, value) => {
    setPage(value);
    var previousIndex = (value -1)*10;
    setPaginatedCoins(coins.slice(previousIndex,previousIndex + 10))
  };

  // state for search component
  const [search,setSearch] = useState("")

  //search function for search component
  const onSearchChange = (e)=>{
    setSearch(e.target.value)
  }
  var filteredCoin = coins.filter((item)=>{
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) || item.symbol.toLowerCase().includes(search.toLowerCase())
    )
  })

  useEffect(()=>{
    getData();
  },[]);

  const getData= async ()=>{
      const myCoins = await get100Coins();
      if(myCoins){
        setCoins(myCoins)
        setPaginatedCoins(myCoins.slice(0,10))
        setIsLoading(false)
      }else{
        setIsLoading(false)
      }
  }
  if(!currentUser){
    return <h1 style={{textAlign:"center"}}>Please Login First.....</h1>
  }
  return (
    <>
    <Header />
    <BackToTop />
    {isLoading?(
      <Loader />
    ) : (<div>
     
      <Search  search={search} onSearchChange={onSearchChange}/>
      <TabsComponent coins={search?filteredCoin : paginatedCoins} />
      {!search && <PaginationComponent  page={page} handlePageChange={handlePageChange}/>} 
    </div>
    )}
    </>
  );
}

export default DashboardPage;
