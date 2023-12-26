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
        <div className="card-body border-bottom" data-testid="form-inputs">
          <div className="form-floating">
            <WowInput name="gold" onChange={handleChange} value={inputs.gold} />
            <label style={{ color: "#CA4" }} htmlFor="gold-input" key="gold">
              Gold
            </label>
          </div>
          <div className="form-floating">
            <WowInput
              name="silver"
              onChange={handleChange}
              value={inputs.silver}
            />
            <label style={{ color: "#d1d1d1" }} htmlFor="silver-input">
              Silver
            </label>
          </div>
          <div className="form-floating">
            <WowInput
              name="copper"
              onChange={handleChange}
              value={inputs.copper}
            />
            <label style={{ color: "#bd5c17" }} htmlFor="copper-input">
              Copper
            </label>
          </div>
        </div>
        <div className="card-body border-bottom">
          <div className="form-floating">
            <WowInput
              name="multiplier"
              onChange={handleChange}
              value={inputs.multiplier}
            />
            <label htmlFor="multiplier-input">Quantity</label>
          </div>
        </div>
        <WowButton text="Reset" onButtonPress={resetValues} />
        <WowGoldDisplay
          copper={inputs.copper}
          silver={inputs.silver}
          gold={inputs.gold}
          multiplier={inputs.multiplier}
        />
      </div>
    </>
  );
};

export default GoldCalculator;
