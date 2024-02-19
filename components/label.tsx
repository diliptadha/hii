import React from "react";

interface LabelProps {
  className?: string;
  label?: string | string[];
  onPress?: () => void;
}
export const LabelComponent: React.FC<LabelProps> = ({
  label,
  className,
  onPress,
  ...props
}) => {
  return (
    <div>
      <text className={className} onClick={onPress} {...props}>
        {label}
      </text>
    </div>
  );
};
