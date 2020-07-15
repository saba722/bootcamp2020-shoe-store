import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default function App()
{
  return <Router>
      <Route path="/" element={shoes} />
  </Router>
}

// function Home()
// {
//   return <div>
//     <h1>Welcome Home!</h1>
//   </div>
// }

const shoes = {
  "air-jordan-3-valor-blue":
  {
    name: "VALOR BLUE",
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/89120cc5-0213-4c35-8224-d60469ce348f/air-max-270-react-se-shoe-9PzxFV.jpg",
  },
  "jordan-mars-270-london":
  {
    name: "JORDAN MARS 270 LONDON",
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/05af7097-95d8-48d5-9c79-67d6a7979a99/air-vapormax-360-shoe-Spzn3F.jpg",
  },
  "air-jordan-1-zoom-racer-blue":
  {
    name: "RACER BLUE",
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ed507bd6-3f5e-43da-b91f-f385af43afba/air-max-90-shoe-Hfq027.jpg",
  },
};