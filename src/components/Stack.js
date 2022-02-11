import React from "react";
import data from "./Stackdata";
export default function Stack() {
  return (
    <div className="main-stack">
      <div className="center">
        <h1>Stack with us</h1>
        <p>
          Earn passive income in crypto by delegating your idle tokens. We
          contribute to secure the following blockchains.
        </p>
      </div>

      <div className="row prod">
        {data.products.map((prod) => (
          <div key={prod._id} className=" uniq">
            <div className="row">
              <div className="simg">
                <img src={prod.logo} alt="" />
              </div>

              <div>
                <p className="sname">{prod.name}</p>
                <p>{prod.price}</p>
              </div>
            </div>

            <div className="stack-btn">{prod.btn}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
