import React from "react";

const ImageSlider = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="carousel w-full max-w-lg rounded-lg shadow-lg">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Slide+1" className="w-full" alt="Slide 1" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://via.placeholder.com/600x300/33FF57/FFFFFF?text=Slide+2" className="w-full" alt="Slide 2" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://via.placeholder.com/600x300/3357FF/FFFFFF?text=Slide+3" className="w-full" alt="Slide 3" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
