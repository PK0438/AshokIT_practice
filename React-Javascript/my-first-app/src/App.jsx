import React from "react";
import "./App.css";
import MyCard from "./components/MyCard";
import TourCards from "./components/TourCards/TourCards";
import NavBar from "./components/Layout/NavBar";

const App = () => {
  return (
    <>
    
    <NavBar heading={"1. React with Props and State"} />
    
      {/* <MyCard heading={"Good Morning"} bgColor={"bg-success"}/>
      <MyCard heading={"Good Afternoon"} bgColor={"bg-warning"}/>
      <MyCard heading={"Good Evening"} bgColor={"bg-danger"}/> */}

      <TourCards/>


    </>
  );
}

export default App;
 