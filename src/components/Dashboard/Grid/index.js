import React, { useState, useEffect } from "react";
import "./styles.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Link } from "react-router-dom";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from '@mui/icons-material/Star';

import { useDispatch, useSelector } from "react-redux";
import { updateWatchList } from "../../../store/slices/UsersSlice";

function Grid({ coin }) {
 //const [watchlist,setWatchlist] = useState([]);
 const currentUser = JSON.parse(localStorage.getItem("currentUser"))
 const users = useSelector(state => state.users)
 const dispatch = useDispatch();
 const [star,setStar] = useState(false);
     
 useEffect(()=>{
  // console.log("coin id",coin.id)
  for(let user of users){
    if(user.email === currentUser.email){
      // console.log("whatss",user.watchList)
      user.watchList.includes(coin.id)?setStar(true): setStar(false)

    }
  }
 },[])



    function saveInWatchList(e,coin){
      e.preventDefault();
      setStar(!star)
    
      // addToLocalStorage(coin.id,users);
      console.log("before push", users);
      dispatch(updateWatchList({id:coin.id,email:currentUser.email}))
      console.log("after push", users);
  }
  return (
    <Link to={`/coin/${coin.id}`}>
      <div
        className={`grid-container ${
          coin.price_change_percentage_24h < 0 && "grid-container-red"
        }`}
      >
        <div className="big-container">
          <div className="info-flex">
            <img src={coin.image} className="coin-logo" alt="crypto" />
            <div className="name-col">
              <p className="coin-symbol">{coin.symbol}</p>
              <p className="coin-name">{coin.name}</p>
            </div>
          </div>
          <div
            className="star-item"
            style={{
              border:
                coin.price_change_percentage_24h < 0
                  ? "2px solid var(--red)"
                  : "2px solid var(--green)",
              color:
                coin.price_change_percentage_24h < 0
                  ? "var(--red)"
                  : "var(--green)",
            }}
            onClick={(e)=>{saveInWatchList(e,coin)}}
          >
            {star?<StarIcon />:<StarBorderIcon />}
            
          </div>
        </div>

        {/*Conditional rendering 1*/}
        {coin.price_change_percentage_24h > 0 ? (
          <div className="chip-flex">
            <div className="price-chip">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip">
              <TrendingUpRoundedIcon />
            </div>
          </div>
        ) : (
          <div className="chip-flex ">
            <div className="price-chip chip-red">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="icon-chip chip-red">
              <TrendingDownRoundedIcon />
            </div>
          </div>
        )}
        <div className="info-container">
          <h3
            className="coin-price"
            style={{
              color:
                coin.price_change_percentage_24h < 0
                  ? "var(--red)"
                  : "var(--green)",
            }}
          >
            ${coin.current_price.toLocaleString()}
          </h3>
          <p className="total-volume">
            Total Volume : {coin.total_volume.toLocaleString()}
          </p>
          <p className="market-cap">
            Market Cap : {coin.market_cap.toLocaleString()}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Grid;
