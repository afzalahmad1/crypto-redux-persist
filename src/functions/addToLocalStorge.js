

export const addToLocalStorage = (id,users)=>{
   
    //  const users = useSelector(state => state.users)
    //  console.log("Before users", users);
    //  console.log("CCCCCusers", currentUser);

    //  users.map((user)=>{
    //   if(user.email === currentUser.email){
    //      console.log(user.watchList)

    //     // user.watchlist.push(id);
    //   }
    //  })
    //  console.log("after push", users);
    let arr = JSON.parse(localStorage.getItem("watchlist")) || [];
      arr.push(id)
       //console.log(e,"e",coin,"coin")
       //setWatchlist(arr);
       localStorage.setItem("watchlist",JSON.stringify(arr));
}