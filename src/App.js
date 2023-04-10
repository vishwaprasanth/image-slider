import { useState } from 'react';
import './App.css';
import ImageSlider from "./ImageSlider";

function App() {
  const slides = 
  [{url: 'http://localhost:3000/image-1.jpg', title: "beach"},
   {url: 'http://localhost:3000/image-2.jpg', title: "boat"},
   {url: 'http://localhost:3000/image-3.jpg', title: "Forest"},
   {url: 'http://localhost:3000/image-4.jpg', title: "City"},
   {url: 'http://localhost:3000/image-5.jpg', title: "italy"},
];

  const conatinerStyle = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div className="App">
      <h1>hello</h1>
      <div style={conatinerStyle}>
      <ImageSlider slides={slides}/>
      </div>
       
    </div>
  );
}

export default App;
