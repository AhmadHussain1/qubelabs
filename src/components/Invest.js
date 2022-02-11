import React from "react";

export default function Invest() {
  return (
    <div className="main-work">
      <div className="center">
        <h1>Invest with us</h1>
        <p>These are some of the brands that trust us.</p>

        <div className="row  imain-div">
          <div className="i-div">
            <img className="ilogo" src="/images/ilogo1.jpeg" alt="" />

            <h2 className="clrbl">Bounty Ox</h2>
            <p>
              Qube partners with promising blockchain projects, assisting them
              towards successful ICOs, through funding, advisory services and
              community awareness generation.
            </p>
          </div>

          <div className="i-div">
            <img className="ilogo" src="/images/ilogo2.jpeg" alt="" />

            <h2 className="clrbl">Wabi</h2>
            <p>
              Qube partners with promising blockchain projects, assisting them
              towards successful ICOs, through funding, advisory services and
              community awareness generation.
            </p>
          </div>

          <div className="i-div">
            <img className="ilogo" src="/images/ilogo3.jpeg" alt="" />

            <h2 className="clrbl">Electrify Asia </h2>
            <p>
              Qube partners with promising blockchain projects, assisting them
              towards successful ICOs, through funding, advisory services and
              community awareness generation.
            </p>
          </div>
        </div>

        <button className="qbtn">Learn more</button>
      </div>
    </div>
  );
}
