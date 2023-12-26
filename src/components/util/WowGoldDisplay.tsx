interface Props {
  copper: number;
  silver: number;
  gold: number;
  multiplier: number;
}

function isInputValid(
  copper: number,
  silver: number,
  gold: number,
  multiplier: number
) {
  const isValid = copper >= 0 && silver >= 0 && gold >= 0 && multiplier > 0;
  return isValid;
}

export function WowGoldDisplay(props: Props) {
  const copper = props.copper * props.multiplier;
  const silver = props.silver * props.multiplier + Math.floor(copper / 100);
  const gold = props.gold * props.multiplier + Math.floor(silver / 100);

  return !isInputValid(
    props.copper,
    props.silver,
    props.gold,
    props.multiplier
  ) ? (
    <h1
      data-testid="not-valid-text"
      className="mx-auto p-3 alert"
      style={{ color: "red" }}
    >
      Numbers must be positive
    </h1>
  ) : (
    <h1 className="mx-auto p-3" data-testid="valid-text">
      {gold}
      <span style={{ color: "#CA" }}>g</span> {silver % 100}
      <span style={{ color: "#d1d1d1" }}>s</span> {copper % 100}
      <span style={{ color: "#bd5c17" }}>c</span>
    </h1>
  );
}
