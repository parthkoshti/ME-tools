import React from "react";

class Radius extends React.Component {
  render() {
    return (
      <div className="container col-5">
        <div>
          <div>
            <h2>Get radius from circumference/half circumference.</h2>
          </div>
        </div>

        <div>
          <div>
            <h4>Enter the circumference (mm):</h4>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">
                mm
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            ></input>
          </div>
          <div>Results:</div>
        </div>

        {/* <div>
          <div>
            <h2>Get radius from circumference/half circumference.</h2>
          </div>
        </div> */}

        <div>
          <div>
            <h4>Enter the circumference (in):</h4>
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">
                in
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            ></input>
          </div>
          <div>Results:</div>
        </div>
      </div>
    );
  }
}

export default Radius;
