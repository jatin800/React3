import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Exchanges from "./components/Exchanges";
import Coins from "./components/Coins";
import CoinDetails from "./components/CoinDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exchanges' element={<Exchanges />} />
        <Route path='/coins' element={<Coins />} />
        <Route path='/coin/:id' element={<CoinDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
