import React from "react";
import StudentWorkCard from "./StudentWorkCard";

const imageData = [
  {
    imageSrc: "https://www.nifafinearts.com/images/homegallery/img1.jpg",
  },
  {
    imageSrc: "https://www.nifafinearts.com/images/homegallery/img2.jpg",
  },
  {
    imageSrc: "https://www.nifafinearts.com/images/homegallery/img3.jpg",
  },
  {
    imageSrc: "https://www.nifafinearts.com/images/homegallery/img4.jpg",
  },
  {
    imageSrc: "https://www.nifafinearts.com/images/homegallery/img5.JPG",
  },
  {
    imageSrc: "https://www.nifafinearts.com/images/homegallery/img6.JPG",
  },
  {
    imageSrc: "https://www.nifafinearts.com/images/homegallery/img7.jpg",
  },
  {
    imageSrc: "https://www.nifafinearts.com/images/homegallery/img8.jpg",
  },
  {
    imageSrc: "https://www.nifafinearts.com/images/homegallery/img9.jpg",
  },
  {
    imageSrc: "https://nifafinearts.com/images/homegallery/img10.jpg",
  },
];

function StudentsWork() {
  return (
    <div class="container-fluid">
      <div id="gallery-container" class="container">
        <div id="head">
          <h2>Students Work</h2>
        </div>
        <div class="container">
          <div class="row">
            <ul class="galul">{<StudentWorkCard />}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentsWork;
