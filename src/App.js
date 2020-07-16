import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from 'react-router-dom';

export default function App() {
  return (
    <Router>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/launch">Launch</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="launch" element={<Launch />}>
          <Route path="/" element={<LaunchIndex />} />
          <Route path=":slug" element={<LaunchShoe />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome Home!</h1>
    </div>
  );
}

function Launch() {
  return (
    <div>
      <h1>Launch</h1>

      <Outlet />

    </div>
  );
}

function LaunchIndex() {
  return (
    <ul>
      {Object.entries(shoes).map(([slug, { name, img }]) => (
      <li key={slug}>
        <Link to={`/launch/${slug}`} >
          <h2>{name}</h2>
          <img src={img} alt={name} />
        </Link>
      </li>
      ))}
    </ul>
  );
}

function LaunchShoe()
{

  const { slug } = useParams();
  const shoe = shoes[slug];

  if(!shoe)
  {
    return <h2>Not Found</h2>
  }

  const {name, img} = shoe;

  return (
    <div>
      <h2>{name}</h2>
      <img src={img} alt={name} />
    </div>
  );
}

function NotFound()
{
  return (
    <div>
      <h1>Not Found!</h1>
      <p>Sorry your page was not found!</p>
    </div>
  );
}

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