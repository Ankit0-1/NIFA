import React from "react";

function StudentWorkCard() {
  const items = Array.from({ length: 22 }, (_, i) => {
    let num = i + 1;
    const imgSrcJpg = `https://www.nifafinearts.com/images/homegallery/img${num}.jpg`;
    const imgSrcJPG = `https://www.nifafinearts.com/images/homegallery/img${num}.JPG`;
    const imgSrcJpeg = `https://www.nifafinearts.com/images/homegallery/img${num}.jpeg`;

    return (
      <li key={num} className="gallery-item">
        <a href={imgSrcJpg} data-fancybox="images">
          <img
            src={imgSrcJpg}
            alt={`Image ${num}`}
            onError={(e) => {
              // If .jpg fails to load, try loading .JPG
              if (e.target.src === imgSrcJpg) {
                e.target.src = imgSrcJPG;
              }
              // If .JPG fails to load, try loading .jpeg
              else if (e.target.src === imgSrcJPG) {
                e.target.src = imgSrcJpeg;
              }
            }}
          />
        </a>
      </li>
    );
  });

  return <>{items}</>;
}

export default StudentWorkCard;
