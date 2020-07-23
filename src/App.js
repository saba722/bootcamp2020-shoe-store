import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from 'react-router-dom';
import CitiesSlider from './components/MainSlider/MainSlider';
import Trending from './components/Trending/Trending';
import MenSlider from './components/MenSlider/MenSlider';

export default function App() {
  return (
    <Router>
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
      <nav className='top-menu'>
        <div className='logo-div'>
          <img src='https://www.creativehire.com.au/wp-content/uploads/2016/08/nike-logo-gray-1-1024x640.png' alt='logo' className='logo'/>
        </div>
        <div className='menu-div'>
          {menuLinks.map((link) => (
            <Link key={link.name} to={link.link} className='menu-link'>
                {link.name}
            </Link>
          ))}
        </div>
      </nav>

      <CitiesSlider slides={slides} />
      <div className='bg-white'>
        <br />
        <br />
        <br />
        <br />
        <Trending />
        <br />
        <br />
        <br />
        <br />
        <MenSlider />
      </div>
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

  const { slug} = useParams();
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

const slides = [
  {
    city: 'Make It Shine',
    country: 'Nike',
    img: 'https://wallpaperplay.com/walls/full/b/b/f/352713.jpg',
  },
  {
    city: 'Gear Up',
    country: 'Nike',
    img: 'https://cdn.wallpapersafari.com/36/65/kXQzCH.jpg',
  },
  {
    city: 'Just In',
    country: 'Nike',
    img: 'https://wallpaperset.com/w/full/b/3/e/201406.jpg',
  },
  {
    city: 'Go Wild',
    country: 'Nike',
    img: 'https://c0.wallpaperflare.com/preview/28/600/957/pair-of-black-white-and-red-air-jordan-1-shoes.jpg',
  },
  {
    city: 'Pop Classic',
    country: 'Nike',
    img: 'https://i.pinimg.com/originals/1b/62/8a/1b628a1503c015ea736c6f4b18c313cc.png',
  },
];

const menuLinks = [{name:"Home",link:"/"},{name:"Launch",link:"/launch"},{name:"Men",link:"/men"},{name:"Women",link:"/women"},{name:"About Us",link:"/about"},]