import React from "react";
import OurCourseCard from "./OurCourseCard";

const data = [
  {
    src: "https://www.nifafinearts.com/images/animation-sketching.jpg",
    paragraph:
      "   6 Months Diploma in Sketching & Oil Painting - Regular/Part time",
  },
  {
    src: "https://www.nifafinearts.com/images/3mchc.jpg",
    paragraph:
      "              1 to 3 Months Certificate Hobby Course (Regular and Weekend)",
  },
  {
    src: "https://www.nifafinearts.com/images/1ydfa.jpg",
    paragraph:
      "   6 Months Diploma in Sketching & Oil Painting - Regular/Part time",
  },
  {
    src: "https://www.nifafinearts.com/images/2ydfa.jpg",
    paragraph:
      "             Two years Advance Diploma in Fine Arts - Regular/Part time",
  },
  {
    src: "https://www.nifafinearts.com/images/entrance-prepration.jpg",
    paragraph: "Entrance Preparation For N.I.D",
  },
  {
    src: "https://www.nifafinearts.com/images/bfa.jpg",
    paragraph: "B.F.A from UGC Recognised University",
  },

  {
    src: "https://www.nifafinearts.com/images/ma.jpg",
    paragraph: "M.A in Painting from UGC Recognised University",
  },
  {
    src: "https://www.nifafinearts.com/images/entrance-prepration3.jpg",
    paragraph: "Entrance preparation for B.F.A",
  },
  {
    src: "https://www.nifafinearts.com/images/kidl1.jpg",
    paragraph: "Kids 1 year Diploma (Level-1)",
  },
  {
    src: "https://www.nifafinearts.com/images/kidl2.jpg",
    paragraph: "Kids 1 year Diploma (Level-2)",
  },
  {
    src: "https://www.nifafinearts.com/images/entrance-prepration2.jpg",
    paragraph: "Entrance Preparation for NIFT",
  },
  {
    src: "https://www.nifafinearts.com/images/hccfk.jpg",
    paragraph: "3 Months Hobby Certificate Course For Kids",
  },
];

function OurCourses() {
  return (
    <>
      <div style={{ clear: "both" }}></div>
      <div id="course-program-container" class="coursec">
        <div class="container">
          <div class="left-container">
            <div id="head">
              <h2>Our Courses</h2>
            </div>

            <div class="package-cont">
              <div class="row equal">{<OurCourseCard data={data} />}</div>
            </div>
          </div>
        </div>
        <div style={{ clear: "both" }}></div>
      </div>
    </>
  );
}

export default OurCourses;
