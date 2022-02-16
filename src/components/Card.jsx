import React from "react";

const Card = (props) => {
  const { nombre, foto, email } = props;
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <img src={foto} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{email}</p>
      </div>
    </div>
  );
};

export default Card;
