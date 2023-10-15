import React from 'react';
import TourCards from "./components/TourCards/TourCards";
import NavBar from "./components/layout/NavBar";
import Counter from "./components/counter/Counter";
import Product from "./components/Product/Product";
import WatchCart from "./components/WatchCart/WatchCart";
import Counter2 from './components/Counter2/Counter2';
import UserName from './components/UserName/UserName';


const App:React.FC<any> = () => {
  return (
    <>
      <NavBar heading={"1. React with Props and State"} />
      <TourCards cards={[]}/>

      <NavBar heading={"2. Counter App"} />
      <Counter/>

      <NavBar heading={"3. Products Cart"} />
      <Product/>

      <NavBar heading={"4. Watch Cart"} />
      <WatchCart/>

      <NavBar heading={"5. React Event Handling"} />
      <Counter2/>

      <NavBar heading={"6. React Forms Handling"} />
      <UserName/>

    </>
  );
}

export default App;
