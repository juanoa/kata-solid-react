import React from "react";

interface Props {
  icon?: React.ReactNode;
  label: string;
  colorLabel?: string;
}

export const Button: React.FC<Props> = ({label, icon, colorLabel}) => {
  return (
    <div className="bg-amber-400 p-3 w-fit rounded cursor-pointer hover:bg-amber-500">
      <div className="flex items-center gap-3">
        {icon}
        <span style={{color: colorLabel}}>{label}</span>
      </div>
    </div>
  )
}