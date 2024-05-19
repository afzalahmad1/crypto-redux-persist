import React, { useEffect, useState } from 'react'
import './styles.css'
import { get100Coins } from '../../../functions/get100Coins'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function SelectCoins({crypto1,crypto2,handleCoinChange}) {

    const [allcoins,setallCoins] = useState([]);


    const styles = {
        height: "2rem",
        color: "var(--white)",
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)"
        },
        "& .MuiSvgIcon-root": {
            color: "var(--white)",
        },
        "&:hover": {
            "&& fieldset": {
                borderColor: "#3a80e9",
            },
        },
      }

      
      useEffect(()=>{
        getData();
      },[])

      async function getData(){
        const myCoins =await get100Coins();
        //console.log(myCoins);
        setallCoins(myCoins);
      }
  return (
    <div className='coins-flex'>
      <p>Crypto 1</p>
       <Select
          value={crypto1}
          label="Crypto 1"
          onChange={(event)=>handleCoinChange(event,false)}
          sx={styles}
        >
          {allcoins.filter((item)=> item.id!==crypto2)
          .map((coin,idx)=>{
            return(
              <MenuItem key={idx} value={coin.id}>{coin.name}</MenuItem>
            )
          })}
        </Select>

        <p>Crypto 2</p>
        <Select
          value={crypto2}
          label="Crypto 2"
          onChange={(event)=>handleCoinChange(event,true)}
          sx={styles}
        >
          {allcoins.filter((item)=> item.id!==crypto1).map((coin,idx)=>{
            return(
              <MenuItem key={idx} value={coin.id}>{coin.name}</MenuItem>
            )
          })}
        </Select>
    </div>
  )
}

export default SelectCoins;
