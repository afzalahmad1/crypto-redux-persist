import { configureStore } from "@reduxjs/toolkit";
import  usersSlice  from "./slices/UsersSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers} from "@reduxjs/toolkit";

const persistConfig = {
    key: "users",
    version: 1,
    storage,
}

const reducer = combineReducers({
    users: usersSlice,
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
})
export const persistor = persistStore(store)
export default store;