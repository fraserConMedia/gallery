import React from 'react'
import SimpleReactLightbox from "simple-react-lightbox";import Nav from './Nav'
import Gallery from './Gallery'
import './App.css'



function App() {
  

  return (
    <div>
      <SimpleReactLightbox>
      <Nav />
      
      <Gallery />
      </SimpleReactLightbox>
     
    </div>
  );
}

export default App;
