import React from "react";

function OurCourseCard({ data }) {
  return (
    <>
      {data.map((item, i) => (
        <div class="col-md-3" key={i}>
          <div class="pac-col4">
            <img src={item.src} class="img-responsive" />
            <div>
              <p>{item.paragraph}</p>
              <button
                type="button"
                // onclick="window.location.href='course.php?id=12'"
                class="pacbt"
              >
                Know More
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default OurCourseCard;
