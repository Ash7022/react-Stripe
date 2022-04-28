// import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import axios from "axios";

import Card from "./Card"
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";





function App() {
  const stripeApiKey="publickey";

  
  
    
  

  return (
   
   <>
    
    <Elements stripe={loadStripe(stripeApiKey)}>

<Card/>
</Elements>
   </>
  );
}

export default App;
