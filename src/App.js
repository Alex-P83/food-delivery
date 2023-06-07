// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import { Shops, ShoppingCart, History, Coupons } from './pages';
import './App.css';
import { Layout } from "./components/";


function App() {

  return (
    <div className="App">
      {/* <Shops/> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Shops />} />
          <Route path="/shopping-card" element={<ShoppingCart />} />
          <Route path="/history" element={<History />} />
          <Route path="/coupons" element={<Coupons />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
