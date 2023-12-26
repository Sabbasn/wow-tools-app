import { ChangeEvent } from "react";

interface Props {
  name: string;
  value: number;
  onChange: (e: ChangeEvent) => void;
}

export function WowInput(props: Props) {
  const capitalizedName =
    props.name.charAt(0).toUpperCase() + props.name.slice(1);
  return (
    <>
      <input
        className="form-control mb-1"
        value={props.value || ""}
        name={props.name}
        id={`${props.name}-input`}
        data-testid={`${props.name}-input`}
        placeholder={capitalizedName}
        onChange={(e) => props.onChange(e)}
        type="number"
        min="0"
      />
    </>
  );
}
