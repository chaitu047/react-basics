import React from "react";
import "./style.css";
import Header from './components/Header';
import Footer from './components/Footer';
//import EventHandling from './components/EventHandling'
//import StateManagement from "./components/StateManagement";
//import HandleRoutes from './components/HandleRoutes';
import Purchase from "./redux-demo/Purchase";
import Cart from "./redux-demo/Cart";
import Total from "./redux-demo/Total";
export default function App() {
  return (
    <div>
      <Header />
        <Purchase />
        <Cart />
        <Total />
      <Footer />
    </div>
  );
}

//   <StateManagement />
//   <EventHandling />
//   <HandleRoutes />