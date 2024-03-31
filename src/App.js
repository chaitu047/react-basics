import React from "react";
import "./style.css";
import Header from './components/Header';
import Footer from './components/Footer';
//import EventHandling from './components/EventHandling'
//import StateManagement from "./components/StateManagement";

import HandleRoutes from './components/HandleRoutes'
export default function App() {
  return (
    <div>
      <Header />
      <HandleRoutes />
      <Footer />
    </div>
  );
}

//   <StateManagement />
//   <EventHandling />
