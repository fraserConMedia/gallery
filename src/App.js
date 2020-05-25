import React from 'react'
import SimpleReactLightbox from "simple-react-lightbox";import Nav from './Nav'
import Gallery from './Gallery'
import './App.css'



function App() {
  

  return (
    <div>
      
      <SimpleReactLightbox>
      <Nav />
      <h1>Photo Gallery</h1>
      <Gallery />
      </SimpleReactLightbox>
     
    </div>
  );
}

export default App;
