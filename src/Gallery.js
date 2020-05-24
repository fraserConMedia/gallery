import React from "react";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import { SRLWrapper } from "simple-react-lightbox";
import './App.css'



function PhotoGallery() {
  

  return (
    <div>
      <SRLWrapper>
      <Gallery className="photo" photos={photos} />
      </SRLWrapper>
     
    </div>
  );
}

export default PhotoGallery;
