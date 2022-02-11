import React from "react";

export default function Question() {
  return (
    <div className="main-stack">
      <div className="maxwidth">
        <h1 className="clrbl">What is Staking?</h1>
        <p>
          Proof of Stake blockchains use staking as the security mechanism to
          keep nodes honest. You can help protect networks, while holding your
          crypto in your wallet, delegating them to a trusted validator. In
          return, you get rewards.
        </p>

       
    
        <div className="input">
        <input  placeholder="What is proof of stake in blockchain? " />
        <input  placeholder="What does qube.vc staking investment platform do?" />
        <input  placeholder="What are minimum and maximum deposit? " />
        <input  placeholder="How much does it cost to stake with qube.vc? " />
        <input  placeholder="How do you keep my funds safe? " />
    
        </div>
        
        <button className="qbtn">View more</button>
   

      </div>

     


    </div>
  );
}
