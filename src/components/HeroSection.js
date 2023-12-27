import React from "react";

function HeroSection() {
  return (
    <>
      <div class="container">
        <div id="logo">
          <a href="./">
            <img
              src="https://www.nifafinearts.com/images/nifa-new-logo.png"
              class="img-responsive"
            />
          </a>
        </div>

        <div class="responsive">
          <ul>
            <li>
              <img src="https://www.nifafinearts.com/images/email.png" />
              <a href="mailto:admission@nifafinearts.com">
                admission@nifafinearts.com
              </a>
            </li>
            <li class="margin-right-0">
              <img src="https://www.nifafinearts.com/images/phone.png" />
              <a href="#">+91-9555112200/9810130552</a>
            </li>
          </ul>
        </div>

        <div class="responsive-menu">
          <select
            name="page_name"
            onChange="location = this.options[this.selectedIndex].value;"
          >
            <option value="./" selected="selected">
              Home
            </option>
            <option>About us</option>
            <option value="facility.php">&nbsp;-Facilities</option>

            <option value="course.php">
              Courses
              <option value="course.php?id=38">
                &nbsp;-B.F.A from UGC Recognised University
              </option>
              <option value="course.php?id=40">
                &nbsp;-M.A from UGC Recognised University{" "}
              </option>
              <option value="course.php?id=24">
                &nbsp;-Two years Advance Diploma in Fine Arts
              </option>
              <option value="course.php?id=29">
                &nbsp;-One Year Diploma in Fine Arts
              </option>
              <option value="course.php?id=12">
                &nbsp;-6 Months Diploma in Fine Arts
              </option>
              <option value="course.php?id=35">
                &nbsp;-Entrance Preparation For N.I.D
              </option>
              <option value="course.php?id=32">
                &nbsp;-Entrance Preparation for NIFT
              </option>
              <option value="course.php?id=31">
                &nbsp;-Animation Sketching
              </option>
              <option value="course.php?id=16">
                &nbsp;-Entrance Preparation for B.F.A
              </option>
              <option value="course.php?id=30">
                &nbsp;- 1 to 3 Months Certificate Hobby Course{" "}
              </option>
              <option value="course.php?id=25">
                &nbsp;-Kids Diploma (L-2)
              </option>
              <option value="course.php?id=39">
                &nbsp;-Kids Diploma (L-1)
              </option>
              <option value="course.php?id=36">
                &nbsp;-Hobby Certificate Course For Kids
              </option>
            </option>
            <option value="activity-page.php">
              Activities
              <option value="activity-page.php?id=8">&nbsp;-Workshops</option>
              <option value="activity-page.php?id=2">&nbsp;-Outdoor</option>
              <option value="activity-page.php?id=10">
                &nbsp;-National Art Seminar & Award Show, 2018
              </option>
              <option value="activity-page.php?id=4">
                &nbsp;-Media Coverage
              </option>
              <option value="activity-page.php?id=9">
                &nbsp;-Judging Art Events
              </option>
              <option value="activity-page.php?id=5">&nbsp;-Exhibition</option>
              <option value="activity-page.php?id=7">
                &nbsp;-Daily Activities
              </option>
            </option>
            <option value="online-admission.php">Admission</option>
            <option value="students-area.php">
              Art Gallery
              <option value="students-area.php?id=4">
                &nbsp;-Work by Kids Level-2
              </option>
              <option value="students-area.php?id=3">
                &nbsp;-Work by Kids Level-1
              </option>
              <option value="students-area.php?id=1">&nbsp;-Sketching</option>
              <option value="students-area.php?id=2">
                &nbsp;-Paintings done by Students of Level-3
              </option>
            </option>
            <option value="franchise.php">Franchisee</option>
            <option value="download-mobile-app.php">Online Classes</option>
            <option value="videos.php">Videos</option>
            <option value="payment.php">Pay Fee</option>
            <option value="contact.php">Contact Us</option>
          </select>
        </div>

        <div id="menu">
          <div class="button-menu">
            <ul id="nav">
              <li>
                <a href="./">Home</a>
              </li>
              <li>
                <a>About</a>
                <ul>
                  <li>
                    <a>Facilities</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Courses</a>
                <ul>
                  <li>
                    <a>B.F.A from UGC Recognised University</a>
                  </li>
                  <li>
                    <a>M.A from UGC Recognised University </a>
                  </li>
                  <li>
                    <a>Two years Advance Diploma in Fine Arts</a>
                  </li>
                  <li>
                    <a>One Year Diploma in Fine Arts</a>
                  </li>
                  <li>
                    <a>6 Months Diploma in Fine Arts</a>
                  </li>
                  <li>
                    <a>Entrance Preparation For N.I.D</a>
                  </li>
                  <li>
                    <a>Entrance Preparation for NIFT</a>
                  </li>
                  <li>
                    <a>Animation Sketching</a>
                  </li>
                  <li>
                    <a>Entrance Preparation for B.F.A</a>
                  </li>
                  <li>
                    <a> 1 to 3 Months Certificate Hobby Course </a>
                  </li>
                  <li>
                    <a>Kids Diploma (L-2)</a>
                  </li>
                  <li>
                    <a>Kids Diploma (L-1)</a>
                  </li>
                  <li>
                    <a>Hobby Certificate Course For Kids</a>
                  </li>
                </ul>
              </li>

              <li>
                <a>Activities</a>
                <ul>
                  <li>
                    <a>Workshops</a>
                  </li>
                  <li>
                    <a>Outdoor</a>
                  </li>
                  <li>
                    <a>National Art Seminar & Award Show, 2018</a>
                  </li>
                  <li>
                    <a>Media Coverage</a>
                  </li>
                  <li>
                    <a>Judging Art Events</a>
                  </li>
                  <li>
                    <a>Exhibition</a>
                  </li>
                  <li>
                    <a>Daily Activities</a>
                  </li>
                </ul>
              </li>

              <li>
                <a>Admission</a>
              </li>
              <li>
                <a>Art Gallery</a>
                <ul>
                  <li>
                    <a>Work by Kids Level-2</a>
                  </li>
                  <li>
                    <a>Work by Kids Level-1</a>
                  </li>
                  <li>
                    <a>Sketching</a>
                  </li>
                  <li>
                    <a>Paintings done by Students of Level-3</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Franchise</a>
              </li>

              <li>
                <a>Online Classes</a>
              </li>
              <li>
                <a>Videos</a>
              </li>
              <li>
                <a>Pay Fee</a>
              </li>

              <li>
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
