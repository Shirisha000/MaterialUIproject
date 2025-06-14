import React from "react";

const Form = ({ inputitem, handleChange, additem }) => {
  return (
    <div className="form">
      <input
        type="text"
        name="itemname"
        value={inputitem.itemname}
        onChange={handleChange}
        placeholder="Enter an item"
      />
      <div className="contentarea">
        <textarea
          type="text"
          placeholder="Enter the message"
          name="content"
          value={inputitem.content}
          onChange={handleChange}
          rows="10"
        ></textarea>
      </div>
      <button onClick={additem}>Add</button>
    </div>
  );
};

export default Form;
