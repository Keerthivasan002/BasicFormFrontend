import React from "react";
import "../styles/finish.css";
import done from "../assets/done.png"

const Final = () => {
  return (
    <div className="finalMain">
      <section className="finalSub">
        <img src={done} alt="img" className="icon" />
        <h1>Your application as been received</h1>
        <h3>Thank you!</h3>
      </section>
    </div>
  );
};

export default Final;
