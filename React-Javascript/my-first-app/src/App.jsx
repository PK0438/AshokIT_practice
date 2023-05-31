import React from "react";
import "./App.css";
import MyCard from "./components/MyCard";
import TourCards from "./components/TourCards/TourCards";
import NavBar from "./components/layout/NavBar";
import Counter from "./components/counter/Counter";
import Product from "./components/Product/Product";
import WatchCart from "./components/WatchCart/WatchCart";

const App = () => {
  return (
    <>
    
    <NavBar heading={"1. React with Props and State"} />
      <TourCards/>

      <NavBar heading={"2. Counter App"} />
      <Counter/>

      <NavBar heading={"3. Products Cart"} />
      <Product/>

      <NavBar heading={"4. Watch Cart"} />
      <WatchCart/>


      <div className="container mb-3"></div>
    </>
  );
}

export default App;
 