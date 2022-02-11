import React from "react";

export default function Work() {
  return (
    <div className="main-work">
      <div className="center">
        <h1 >Work with us</h1>
        <p>
          Here are some reasons why you will make the best decision by choosing
          us.
        </p>
      </div>

      <div className="row workdiv">
        <div className="main-content">
        <h2 className="clrbl">Strategic partnership </h2>
        <p className="workp">Qube partners with promising blockchain
        projects, assisting them towards successful
        ICOs, through funding, advisory services and
        community awareness generation.
        </p>
        </div>

        <div className="main-content">
        <h2 className="clror">Advisory services </h2>
        <p className="workp">Through years of advising, Qube has accrued
        significant expertise in ICO strategy, including:
        token metrics, token sale mechanism, token
        distribution, exchange listings, and more.
        </p>
        </div>

        <div className="main-content">
        <h2 className="clrbl">Influencer Network </h2>
        <p className="workp">Qube has an extensive social-media influencer
        network that it utilizes to build a community for
        its partner blockchain projects.
        </p>
        </div>
      </div>
    </div>
  );
}
