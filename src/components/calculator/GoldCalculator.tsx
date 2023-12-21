import { useState } from "react";
import WowButton from "../util/WowButton";
import "./GoldCalculator.css";

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
    switch (event.target.name) {
      case "gold":
        setInputs({ ...inputs, gold: event.target.value });
        break;
      case "silver":
        setInputs({ ...inputs, silver: event.target.value });
        break;
      case "copper":
        setInputs({ ...inputs, copper: event.target.value });
        break;
      case "multiplier":
        setInputs({ ...inputs, multiplier: event.target.value });
        break;
    }
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
            <input
              name="gold"
              id="goldInput"
              data-testid="gold-input"
              className="form-control"
              placeholder="Gold"
              min="0"
              type="number"
              onChange={handleChange}
              value={inputs.gold || ""}
            />
            <label style={{ color: "#CA4" }} htmlFor="goldInput" key="gold">
              Gold
            </label>
          </div>
          <div className="form-floating">
            <input
              name="silver"
              id="silverInput"
              data-testid="silver-input"
              className="form-control"
              key="silver"
              type="number"
              onChange={handleChange}
              min="0"
              value={inputs.silver || ""}
              placeholder="Silver"
            />
            <label style={{ color: "#d1d1d1" }} htmlFor="silverInput">
              Silver
            </label>
          </div>
          <div className="form-floating">
            <input
              name="copper"
              id="copperInput"
              data-testid="copper-input"
              className="form-control"
              key="copper"
              min="0"
              type="number"
              onChange={handleChange}
              value={inputs.copper || ""}
              placeholder="Copper"
            />
            <label style={{ color: "#bd5c17" }} htmlFor="copperInput">
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
