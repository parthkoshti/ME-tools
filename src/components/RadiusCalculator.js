import React from "react";

class Radius extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radius: null,
      circumference: null,
      halfCircumference: null,
      area: null,
    };

    // this.handleHalfCircumference = this.handleHalfCircumference.bind(this);
    // this.handleCircumference = this.handleCircumference.bind(this);
    this.halfCircumferenceCalc = this.halfCircumferenceCalc.bind(this);
    this.circumferenceCalc = this.circumferenceCalc.bind(this);
    this.areaCalc = this.areaCalc.bind(this);
  }

  // handleCircumference(e) {
  //   this.setState({ circumference: e.target.value });
  // }

  // handleHalfCircumference(e) {
  //   this.setState({ halfCircumference: e.target.value });
  //   console.log("rad " + this.state.halfCircumference * 3);
  // }

  halfCircumferenceCalc(e) {
    e.preventDefault();
    var radius = (this.state.halfCircumference / Math.PI).toFixed(4);
    console.log("radius: " + radius);
    this.setState({ radius: radius });
  }

  circumferenceCalc(e) {
    e.preventDefault();
    var radius = (this.state.circumference / (2 * Math.PI)).toFixed(4);
    console.log("radius: " + radius);
    this.setState({ radius: radius });
  }
  areaCalc(e) {
    e.preventDefault();
    var radius = Math.sqrt(this.state.area / Math.PI).toFixed(4);
    console.log("radius: " + radius);
    this.setState({ radius: radius });
  }

  render() {
    return (
      <div className="container col-5">
        <div>
          <div>
            <h2>Get radius</h2>
          </div>
        </div>

        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Half Circumference:
              </span>
            </div>
            <form onSubmit={this.halfCircumferenceCalc}>
              <input
                type="text"
                pattern="[0-9]*"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                value={this.state.halfCircumference}
                onChange={(e) =>
                  this.setState({ halfCircumference: e.target.value })
                }
              ></input>
            </form>
          </div>
        </div>

        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Circumference:
              </span>
            </div>
            <form onSubmit={this.circumferenceCalc}>
              <input
                type="text"
                pattern="[0-9]*"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                value={this.state.circumference}
                onChange={(e) =>
                  this.setState({ circumference: e.target.value })
                }
              ></input>
            </form>
          </div>
        </div>

        <div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-sm">
                Area:
              </span>
            </div>
            <form onSubmit={this.areaCalc}>
              <input
                type="text"
                pattern="[0-9]*"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                value={this.state.area}
                onChange={(e) => this.setState({ area: e.target.value })}
              ></input>
            </form>
          </div>
        </div>

        <div>Result: {this.state.radius}</div>
      </div>
    );
  }
}

export default Radius;
