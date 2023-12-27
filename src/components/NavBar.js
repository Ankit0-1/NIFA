import React from "react";

function NavBar() {
  return (
    <div className="container-fluid header-top">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <p>Welcome to the National Institute of Fine Arts</p>
          </div>
          <div className="col-md-4 d-inline-flex header-col-rit">
            <div className="top-mail">
              <a href="tel:9555112200" target="_top">
                <i className="fas fa-phone-alt mr-2"></i>9555112200
              </a>
              <a href="tel:9810130552" target="_top">
                <i className="fas fa-phone-alt mr-2"></i>9810130552
              </a>
            </div>
          </div>
          <div className="col-md-4 d-inline-flex header-col-rit">
            <div className="top-mail">
              <a href="mailto:admission@nifafinearts.com" target="_top">
                <i className="fas fa-envelope mr-2"></i>
                admission@nifafinearts.com
              </a>
            </div>
            <ul className="header-social">
              <li>
                <a href="https://www.facebook.com/nifafinearts" target="_blank">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/artsnifa?lang=en" target="_blank">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/nifafinearts?igshid=9ni7d0aogzed"
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCud0pfiZT-Ph2JX1_tN6rbw"
                  target="_blank"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
