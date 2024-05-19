import { Route, Routes, BrowserRouter } from "react-router-dom";
//import Header from "./components/Common/Header";
//import Footer from './components/Common/Footer'
import HomePage from './pages/HomePage'
import DashboardPage from "./pages/Dashboard";
import CoinPage from "./pages/Coin";
import ComparePage from "./pages/ComparePage";
import WatchList from "./pages/WatchList";
import Signup from "./pages/Signup";
import Login from "./pages/Login";



const App = ()=>{






  return(
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage/>} />
        <Route path="/coin/:id" element={<CoinPage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/watchlist" element={<WatchList />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;