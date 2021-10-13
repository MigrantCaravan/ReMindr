import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <RiDeleteBin6Fill></RiDeleteBin6Fill>
      </button>
    </div>
  );
}

export default Note;
