import React from "react";
import "./style.css";
import Header from './components/Header';
import Footer from './components/Footer';
import EventHandling from './components/EventHandling'
import StateManagement from "./components/StateManagement";

export default function App() {
  return (
    <div>
      <Header />
      <EventHandling />
      <Footer />
    </div>
  );
}

//   <StateManagement />
