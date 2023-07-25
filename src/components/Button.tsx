import { IconType } from "react-icons/lib";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
  loading?: boolean;
  extraClasses?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon: Icon,
  loading,
  extraClasses
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn ${extraClasses} ${
        outline
          ? "bg-white border-2 border-black hover:border-black hover:bg-black/5"
          : "btn-secondary hover:opacity-80"
      }`}
    >
      {Icon && <Icon />}
      {label}
    </button>
  );
};

export default Button;
