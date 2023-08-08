
interface ButtonProps {
    label: string;
    secondary?: boolean;
    fullWidth?: boolean;
    large?: boolean;
    onClick: () => void;
    disabled?: boolean;
    isl?: boolean;
    h?: boolean;
    outline?: boolean;
  }

  const Button: React.FC<ButtonProps> = ({ 
    label, 
    secondary, 
    fullWidth, 
    onClick, 
    h,
    isl,
    large, 
    disabled, 
    outline 
  }) => {
    return(
        <button
        disabled={disabled}
        onClick={onClick}
        className={`
          disabled:opacity-70
          disabled:cursor-not-allowed
          rounded-[10px]
                 
          hover:opacity-80
          transition
          border-2
          ${isl ? 'h-[0em]' : ''}
          ${fullWidth ? 'w-full' : 'w-fit'}
          ${secondary ? 'bg-blue-500' : 'bg-blue-500'}
          ${secondary ? 'text-white' : 'text-white'}
          ${secondary ? '' : 'border-blue-500'}
          ${large ? 'text-xl' : 'text-md'}
          ${large ? 'px-5' : 'px-4'}
          ${h ? '' : ''}
          ${large ? 'py-3' : 'py-2'}
          ${outline ? 'bg-[#0066fc]' : ''}
          ${outline ? 'border-white' : ''}
          ${outline ? 'text-white' : ''}
        `}
      >
        {label}
      </button>
    )
}

export default Button;