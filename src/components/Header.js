import React from "react";
import Button from "@mui/material/Button";
export default function Header() {
  return (
    <div className="header row">
      <div className="hd1">
        <ul>
          <li>
          <span> <img src="/images/s0.png" alt="Qube" /></span>
          </li>

          <li>Features</li>
          <li>Staking</li>
          <li>Portfolio</li>
          <li>FAQs</li>
          <li>Contact</li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <img src="/images/s1.png" alt="" />
          </li>
          <li>
            <img src="/images/s2.png" alt="" />
          </li>
          <li>
            <img src="/images/s3.png" alt="" />
          </li>
          <li>
            <Button variant="contained">Contained</Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
