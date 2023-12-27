import React from "react";

function NifaUpdate() {
  return (
    <>
      <div id="markque-container">
        <div className="container">
          <div id="part-marq">
            <div id="headingdd">
              <h3 style={{ fontWeight: "bold" }}>Nifa Updates:: </h3>
            </div>
            <div id="marqueeq">
              <marquee
                behavior="scroll"
                direction="left"
                scrollamount="3"
                scrolldelay="1"
                onmouseover="this.stop()"
                onmouseout="this.start()"
              >
                <p>
                  <strong>
                    All NIFA courses are now available worldwide through our
                    Live and Interactive Online Classes. Please&nbsp;download
                    the NIFA app from our online classes page to register for a
                    complimentary trial class.
                  </strong>
                </p>
              </marquee>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal -->
<!--modal --> */}
      <div id="welcome-container">
        <div className="container">
          <div id="heading">
            <h1>
              Welcome To <span>National Institute of Fine Arts </span>
            </h1>
          </div>
          <p>
            National Institute of Fine Arts (NIFA) is a national center for
            education in arts, fostering the excellence of emerging and
            established artists and advancing art to create a more human world.
            National Institute of Fine Arts&nbsp; (NIFA) was established by
            MRS&nbsp;RENU KHERA in Delhi and&nbsp;NCR of Delhi on July
            2005.&nbsp;Institute established another unit in Panna (M.P) which
            is affiliated to Raja Mansingh Music and Arts University (Gwalior).
            Its aim is to provide education and training to students on a wide
            spectrum of Fine Arts.
          </p>

          <p>
            National Institute of Fine Arts<strong>&nbsp;</strong>is a place
            where the creative expression of individuals is nurtured and a sense
            of community flourishes. We seek to shape the global future of arts
            with an emphasis on excellence that allows its members to reach for
            the highest artistic standards as individuals while recognizing that
            the Art&nbsp;is&nbsp;one of the foundations of a healthy and
            creative society. This is a place where national and international
            leaders in the arts gather, teach, show and perform their work. The
            institute&nbsp;prides itself on its openness and on creating an
            environment that is safe, welcoming, and built on mutual respect.
          </p>

          <p>
            <strong>
              National Institute of Fine Arts&nbsp;is a place where the creative
              expression of individuals is nurtured and a sense of community
              flourishes.
            </strong>
          </p>
          <button
            type="button"
            className="btn btn-outline"
            // onclick="window.location.href='about-us.php'"
          >
            Read More
          </button>
        </div>
      </div>
      <div style={{ clear: "both" }}></div>
    </>
  );
}

export default NifaUpdate;
