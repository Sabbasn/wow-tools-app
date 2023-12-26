import { useState } from "react";
import WowButton from "../util/WowButton";
import "./GoldCalculator.css";
import { WowInput } from "../util/WowInput";

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

  function isInputValid() {
    const isValid =
      inputs.copper >= 0 &&
      inputs.silver >= 0 &&
      inputs.gold >= 0 &&
      inputs.multiplier > 0;
    return isValid;
  }

  const goldFormatter = () => {
    const copper = inputs.copper * inputs.multiplier;
    const silver =
      +inputs.silver * inputs.multiplier + +Math.floor(copper / 100);
    const gold = +inputs.gold * inputs.multiplier + +Math.floor(silver / 100);

    if (!isInputValid()) {
      return (
        <h1
          data-testid="not-valid-text"
          className="mx-auto p-3 alert"
          style={{ color: "red" }}
        >
          Numbers must be positive
        </h1>
      );
    }
    return (
      <h1 className="mx-auto p-3" data-testid="valid-text">
        {gold}
        <span style={{ color: "#CA" }}>g</span> {silver % 100}
        <span style={{ color: "#d1d1d1" }}>s</span> {copper % 100}
        <span style={{ color: "#bd5c17" }}>c</span>
      </h1>
    );
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
          <div className="d-flex justify-content-center form-floating">
            <input
              name="multiplier"
              id="multiplier"
              key="multiplier"
              min="0"
              data-testid="multiplier-input"
              className="form-control"
              onChange={handleChange}
              value={inputs.multiplier}
            />
            <label htmlFor="multiplier">Quantity</label>
          </div>
        </div>
        <WowButton text="Reset" onButtonPress={resetValues} />
        {goldFormatter()}
      </div>
    </>
  );
};

export default GoldCalculator;
