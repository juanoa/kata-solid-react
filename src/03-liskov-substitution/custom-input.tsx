import React, {ChangeEventHandler} from "react";

interface Props {
  value?: string | ReadonlyArray<string> | number;
  placeholder?: string;
  onUpdate?: ChangeEventHandler<HTMLInputElement>;
}

export const CustomInput: React.FC<Props> = ({value, onUpdate, placeholder}) => {
  return (
    <input
      value={value}
      onChange={onUpdate}
      className="bg-blue-200 border-2 border-blue-300 rounded text-2xl placeholder:font-light p-2"
      placeholder={placeholder}
    />
  )
}