import React, { useState } from "react";
import Employee from "./employee";

export default function Results(props) {
  const [employeeResult, setemployeeResult] = useState({
    results: props.results,
    sorted: false
  });
  return (
    <div>
      <div className="row">
        <div className="col-2">Image</div>
        <div className="col-2" onClick={function() {
            if (employeeResult.sorted) {
              setemployeeResult({
                results: employeeResult.results.reverse(),
                sorted: true
              });
            }
            else {
              setemployeeResult({
                results: employeeResult.results.map(result => ({
                  ...result,
                  toString: function() {
                    return this.name.first + " " + this.name.last;
                  }
                })).sort(),
                sorted: true
              });
            }
        }}>Name</div>
        <div className="col-3">Phone</div>
        <div className="col-3">Email</div>
        <div className="col-2">DOB</div>
      </div>
      {employeeResult.results.map(result => <Employee image={result.picture.thumbnail} name={result.name.first + " " + result.name.last} phone={result.phone} email={result.email} dob={result.dob.date} />) }
    </div>
  );
}
