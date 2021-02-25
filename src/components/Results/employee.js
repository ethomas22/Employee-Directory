import React from "react";

export default function employee(props) {
  return (
    <div className="row">
      <div className="col-2"><img src={props.image} /></div>
      <div className="col-2">{props.name}</div>
      <div className="col-3">{props.phone}</div>
      <div className="col-3"><a href={"mailto:" + props.email}>{props.email}</a></div>
      <div className="col-2">{props.dob}</div>
    </div>
  );
}
