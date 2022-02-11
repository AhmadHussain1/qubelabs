import React from "react";

export default function Form() {
  return (
    <div className="main-stack form-maindiv">
      <div className="row">
        <div className="div1">
          <h1>Got something for us? Get in touch . . .</h1>
          <p>
            Our products will transform your business. Feel free to use the
            form, or contact us directly via hello@qubevc.com
          </p>
        </div>

        <div className="div2">
          <div className="inputform">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <textarea cols="20" rows="5" placeholder="Message"></textarea>
          </div>
          <button className="qbtn">Send</button>
        </div>
      </div>

      <div className="row last-one">
        <div className="a">
          <h2><img className="formlogo" src="/images/stlogo6.jpeg" alt=""></img>Qube</h2>
          <p>
            Professional investors, blockchain strategists and social-media
            influencers, investing in a decentralized future
          </p>
        </div>
        <div className="b">
          <h2>Navigation</h2>

          <li>Home</li>
          <li>Features</li>
          <li>Stacking</li>
          <li>Portfolio</li>
          <li>FAQs</li>
        </div>
        <div className="c">
          <h2>Contacts</h2>
          <p>San Francisco, CA 94111 One Ferry Building, Suite 255</p>
          <p>+1 (415) 677-5340</p>
        </div>
        <div className="d">
          <h2>Subscribe to our newsletter </h2>
          <input type="text" placeholder="Email" />
          <button className="qbtn">Subscribe</button>
        </div>
        <p className="foot">Website designed by Ahmad Hussain</p>
      </div>
    </div>
  );
}
