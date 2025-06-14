import React from "react";

const Getlist = ({ id, itemname, content, onDelete }) => {
  return (
    <li className="list-item">
      <div className="item-box">
        <h3>{itemname}</h3>
        <p>{content}</p>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </li>
  );
};

export default Getlist;
