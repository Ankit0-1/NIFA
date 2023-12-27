import React, { useEffect, useState } from "react";

function Slider() {
  const [showImage, setShowImage] = useState(0);

  useEffect(() => {
    console.log("first");
    const timer = setInterval(() => {
      console.log("1 sfirst");
      changeImage();
    }, 5000);

    return () => clearInterval(timer);
  }, [showImage]);

  const changeImage = () => {
    const imageToShow = (showImage + 1) % 3;
    setShowImage(imageToShow);
  };

  const prevImage = () => {
    const imageToShow = showImage == 0 ? 2 : (showImage - 1) % 3;

    setShowImage(imageToShow);
  };

  const images = [
    "https://www.nifafinearts.com/banner-images/1858311846home-banner4.jpg",
    "https://www.nifafinearts.com/banner-images/1922909411home-banner3.jpg",
    "https://www.nifafinearts.com/banner-images/1550551577home-banner1.jpg",
  ];

  return (
    <div className="slider-container">
      <button className="next-icon" onClick={() => changeImage()}>
        Next
      </button>

      <button className="previous-icon" onClick={() => prevImage()}>
        Previous
      </button>

      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          className={showImage === index ? "visible" : "hidden"}
          style={{ width: "100%", height: "100%" }}
        />
      ))}
    </div>
  );
}

export default Slider;
