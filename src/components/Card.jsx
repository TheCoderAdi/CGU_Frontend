import React from "react";

const Card = ({ event, s_date }) => {
  return (
    <div className="cardAll">
      <div className="content">
        <p>{event}</p>
      </div>
      <div className="line"></div>
      <div className="time">Date : {s_date}</div>
    </div>
  );
};

export default Card;
