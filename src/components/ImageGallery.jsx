import React from "react";
import ImageCard from "./ImageCard";
import images from "../data/images";

function ImageGallery() {
  return (
    <>
      <div className="gallery">
        {images.map((item) => (
          <ImageCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}

export default ImageGallery;