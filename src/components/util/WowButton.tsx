import "./WowButton.css";

interface Props {
  text: string;
  onButtonPress: () => void;
}

function WowButton(props: Props) {
  return (
    <button
      data-testid="wow-btn"
      onClick={props.onButtonPress}
      className="button mx-auto"
    >
      {props.text}
    </button>
  );
}

export default WowButton;
