/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from "react";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      heightFeet: "",
      heightInch: "",
      weight: "",
    };

    this.handleHeightFeetChange = this.handleHeightFeetChange.bind(this);
    this.handleHeightInchChange = this.handleHeightInchChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
    this.calculateBMI = this.calculateBMI.bind(this);
  }

  handleHeightFeetChange(event) {
    this.setState({
      heightFeet: event.target.value,
    });
  }

  handleHeightInchChange(event) {
    this.setState({
      heightInch: event.target.value,
    });
  }

  handleWeightChange(event) {
    this.setState({
      weight: event.target.value,
    });
  }

  calculateBMI() {
    if (this.state.weight && this.state.heightFeet && this.state.heightInch) {
      const INCHES_IN_FEET = 12;
      let height = Number(this.state.heightFeet);
      height *= INCHES_IN_FEET;
      height += Number(this.state.heightInch);

      const weight = this.state.weight;

      let bmi = (weight / (height * height)) * 703;
      bmi = bmi.toFixed(2);

      return bmi;
    }
  }

  getBMIResults(bmi) {
    let bmiResults = {
      label: "",
      alertClass: "",
    };

    if (bmi <= 18.5) {
      bmiResults.label = "Underweight";
      bmiResults.alertClass = "bg-red-500 text-white";
    } else if (bmi <= 24.9) {
      bmiResults.label = "Normal weight";
      bmiResults.alertClass = "bg-green-500 text-white";
    } else if (bmi <= 29.9) {
      bmiResults.label = "Overweight";
      bmiResults.alertClass = "bg-yellow-500 text-black";
    } else if (bmi >= 30) {
      bmiResults.label = "Obesity";
      bmiResults.alertClass = "bg-red-500 text-white";
    } else {
      bmiResults.label = "BMI";
      bmiResults.alertClass = "bg-blue-500 text-white";
    }

    return bmiResults;
  }

  render() {
    let bmi = this.calculateBMI();
    let results = this.getBMIResults(bmi);

    return (
      <div className="App container mx-auto p-5">
        <h1 className="text-3xl font-bold mb-4 text-slate-50">
          CALCULATE YOUR BMI
        </h1>
        <p className=" text-slate-200">Enter your weight and height below.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div>
            <form>
              {/* Weight */}
              <div className="mb-4">
                <label
                  htmlFor="bmiWeight"
                  className="block text-sm font-medium text-slate-100"
                >
                  Weight
                </label>
                <div className="flex">
                  <input
                    className="form-input bg-[#FEFFDE] p-1 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    id="bmiWeight"
                    type="number"
                    min="1"
                    max="1000"
                    value={this.state.weight}
                    onChange={this.handleWeightChange}
                  />
                  <span className="ml-2 text-slate-50">lb</span>
                </div>
              </div>

              {/* Height */}
              <div className="mb-4">
                <label
                  htmlFor="bmiHeight"
                  className="block text-sm font-medium text-slate-100"
                >
                  Height
                </label>
                <div className="flex items-center gap-2">
                  <input
                    className="form-input bg-[#FEFFDE] p-1 mt-1 block w-1/2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    id="bmiHeightFeet"
                    type="number"
                    min="1"
                    max="12"
                    value={this.state.heightFeet}
                    onChange={this.handleHeightFeetChange}
                  />
                  <span className="ml-2 text-slate-50">fit</span>
                  <input
                    className="form-input bg-[#FEFFDE] p-1 mt-1 block w-1/2 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    id="bmiHeightInch"
                    type="number"
                    min="0"
                    max="12"
                    value={this.state.heightInch}
                    onChange={this.handleHeightInchChange}
                  />
                  <span className="ml-2 text-slate-50">in</span>
                </div>
              </div>
            </form>
          </div>

          <div>
            <BmiDisplay
              bmi={bmi}
              label={results.label}
              alertClass={results.alertClass}
            />
          </div>
        </div>
      </div>
    );
  }
}

function BmiDisplay(props) {
  return (
    <div className={`bmi-result p-4 rounded ${props.alertClass}`}>
      <div className="text-2xl font-bold mb-2">{props.bmi || ""}</div>
      <div className="text-lg font-semibold">{props.label}</div>
    </div>
  );
}

export default App;
