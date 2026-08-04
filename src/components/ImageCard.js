import React from "react";

function ImageCard({ image, title, description }) {
  return (
    <>
      <div className="card">
        <img src={image} alt={title} />

        <div className="card-body">
          <h2>{title}</h2>

          <p>{description}</p>

          <button>View Image</button>
        </div>
      </div>
    </>
  );
}

export default ImageCard;