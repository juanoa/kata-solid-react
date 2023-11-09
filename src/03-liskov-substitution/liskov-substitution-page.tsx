import {CustomInput} from "./custom-input.tsx";
import {useState} from "react";

// TODO: Update CustomInput to be sustituible for a HTML <input/> element
export const LiskovSubstitutionPage = () => {
  const [value, setValue] = useState("");

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <CustomInput value={value} onUpdate={(e) => setValue(e.target.value)} backgroundText="Input" />
    </div>
  )
}