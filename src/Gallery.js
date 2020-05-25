import React from "react";
import Gallery from "react-photo-gallery";
import {photos} from './photos'
import { outdoorPhotos } from "./outdoorPhotos";
import { SRLWrapper } from "simple-react-lightbox";
import './App.css'




function PhotoGallery() {
  

  return (
    <div>
    <SRLWrapper>
      <div className='photo-container'>
      <Gallery className="photo" photos={photos} />
      <div className="break"> </div>
      <Gallery className="photo" photos={outdoorPhotos} />
      </div>
    </SRLWrapper>
    <footer class="py-5 bg-dark">
        <div class="container">
            <p class="m-0 text-center text-white">Copyright &copy; Fraser Construction 2020</p>
        </div>
    
    </footer>
     
    </div>
  );
}

export default PhotoGallery;
