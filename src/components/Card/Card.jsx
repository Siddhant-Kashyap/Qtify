import React from "react";
import "./CArd.css";


const Card = ({ data, type }) => {
  switch (type) {
    case "normal":
      return (
        <div className="Album_Cont" id={data.id}>
          <div className="Album_card">
            <div className="Album_card_image">
              <img src={data.image} alt={data.title} />
            </div>
            <div className="Album_card_text">
              <h3>{data.follows} Follows</h3>
            </div>
          </div>
          <h3 className="Album_title">{data.title}</h3>
        </div>
      );
    default:
      return null;
  }
};

export default Card;