import React from "react";
import Gallery from "react-photo-gallery";
import {photos} from './photos'
import { outdoorPhotos } from "./outdoorPhotos";
import {kitchenPhotos} from "./kitchenPhotos"
import { SRLWrapper } from "simple-react-lightbox";
import './App.css'




function PhotoGallery() {
  

  return (
    <div>
    <SRLWrapper>
      <div className='photo-container'>
        <h2 className="gallery-section">KITCHEN</h2>
      <Gallery className="photo" photos={kitchenPhotos} />

      <h2 className="gallery-section">INDOOR</h2>

        <Gallery className="photo" photos={photos} />
      

        <h2 className="gallery-section">OUTDOOR</h2>

         <Gallery className="photo" photos={outdoorPhotos} />
     
</div>
    </SRLWrapper>
  
    <footer className="py-5 bg-dark">
        <div className="container">
            <p className="m-0 text-center text-white">Copyright &copy; Fraser Construction 2020</p>
        </div>
    
    </footer>
     
    </div>
  );
}

export default PhotoGallery;
