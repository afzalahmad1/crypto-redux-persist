import { createSlice } from "@reduxjs/toolkit";
let initialState = []
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    createUser(state, action) {
         
      console.log("State", state, "action", action.payload);
      return state = [...state, action.payload]
        // state.push(action.payload)
    },
    updateWatchList(state,action){
      console.log("updateWatchList",state,action);
      state.map((user)=>{
        if(user.email === action.payload.email){
          if(!user.watchList.includes(action.payload.id)){
            console.log("not present");
            user.watchList.push(action.payload.id)
          }else{
            console.log("present");
             user.watchList.splice(user.watchList.indexOf(action.payload.id),1)
          
            
          }
        }
      })
    }
  },
});

// console.log(productsSlice.actions);
export default usersSlice.reducer;
export const {  createUser , updateWatchList} = usersSlice.actions; 