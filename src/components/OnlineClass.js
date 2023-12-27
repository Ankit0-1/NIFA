import React from "react";

function OnlineClass() {
  return (
    <>
      <section className="container-fluid downapp">
        <div className="container">
          <div className="row onclassec">
            <div className="col-md-5">
              <div className="lmore-content">
                <h2>Online Classes</h2>
                <p>
                  Dear Students/Parents, Nifa presents its Learning App for your
                  regular art practice in which we have added many amazing
                  features Like: Step-by-step recorded demo videos prepared by
                  your faculty members. Regular assessment of your practise
                  through assignment section. Live class section from same app.
                  Attendance, payment invoice, art news, announcements,
                  important information and direct connect with the management
                  team are some more features. So hurry up n join now to
                  experience personalised coaching by experts sitting at your
                  home.
                </p>
                <p>We wish u Happy Learning. Stay Safe n Healthy.</p>
                <button
                  type="button"
                  className="btn btn-outline"
                  // onclick="window.location.href='download-mobile-app.php'"
                >
                  Read More
                </button>

                <p className="nfothed">Download the app</p>
                <ul className="list-inline nappimg">
                  <li className="list-inline-item">
                    <a href="https://play.google.com/store/apps/details?id=co.thanos.fljvr">
                      <img
                        src="https://www.nifafinearts.com/images/gplay.png"
                        className="img-responsive"
                      />
                    </a>
                  </li>
                  <li classNameName="list-inline-item">
                    <a href="https://apps.apple.com/us/app/apple-store/id1472483563">
                      <img
                        src="https://www.nifafinearts.com/images/appstore.png"
                        className="img-responsive"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-7">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/-9cJjaLXKqE?rel=0"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OnlineClass;
