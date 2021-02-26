import React from "react";

export default function search(props) {
  return (
    <div>
      <input type="text" placeholder="Search Employee" onChange={props.onChange}></input>
    </div>
  );
}
