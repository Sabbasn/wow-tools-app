import { useState } from "react";
import WowButton from "../util/WowButton";
import "./GoldCalculator.css";
import { WowInput } from "../util/WowInput";
import { WowGoldDisplay } from "../util/WowGoldDisplay";

const GoldCalculator = () => {
  const [inputs, setInputs] = useState({
    gold: 0,
    silver: 0,
    copper: 0,
    multiplier: 1,
  });

  const resetValues = () => {
    setInputs({ copper: 0, silver: 0, gold: 0, multiplier: 1 });
  };

  const handleChange = (event: any) => {
    setInputs((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <>
      <div
        className="d-flex flex-column card align-items-center"
        style={{ minWidth: "400px" }}
      >
        <div
          className="card-body list-group list-group-flush"
          data-testid="form-inputs"
        >
          <div className="list-group-item">
            <WowInput
              name="gold"
              onChange={handleChange}
              value={inputs.gold}
              color="#CA4"
            />
            <WowInput
              name="silver"
              onChange={handleChange}
              value={inputs.silver}
              color="#d1d1d1"
            />
            <WowInput
              name="copper"
              onChange={handleChange}
              value={inputs.copper}
              color="#bd5c17"
            />
          </div>
          <div className="list-group-item">
            <WowInput
              name="Amount"
              onChange={handleChange}
              value={inputs.multiplier}
              color="grey"
            />
          </div>
          <div className="list-group-item d-flex flex-column justify-content-center mx-auto">
            <WowButton text="Reset" onButtonPress={resetValues} />
            <WowGoldDisplay
              copper={inputs.copper}
              silver={inputs.silver}
              gold={inputs.gold}
              multiplier={inputs.multiplier}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GoldCalculator;
