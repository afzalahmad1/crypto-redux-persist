import React from 'react'
import './styles.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
function Search({search , onSearchChange}) {
    //search is global variable daclared in dashboard page
  return (
    <div className='search-flex'>
        <SearchRoundedIcon/>
      <input placeholder='Search' type='text'
      value={search}
      onChange={(e)=>onSearchChange(e)}/>
    </div>
  )
}

export default Search;
