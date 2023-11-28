/* eslint-disable react/prop-types */
const Button = ({ label, onClick, disabled, outline, small, icon: Icon }) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      onClick={onClick}
      className={`
            relative
            disabled:opacity-70
            disabled:cursor-not-allowed
            rounded-tl-3xl
            rounded-br-3xl
            hover:opacity-80
            transition
            px-4
            border-none
            ${outline ? "bg-white" : "bg-green-500"}
            ${outline ? "text-black" : "text-white"}
            ${small ? "text-sm" : "text-md"}
            ${small ? "py-1" : "py-3"}
            ${small ? "font-light" : "font-semibold"}
            ${small ? "border-[1px]" : "border-2"}
          `}
    >
      {Icon && (
        <Icon
          size={24}
          className="
                absolute
                left-4
                top-3
              "
        />
      )}
      {label}
    </button>
  );
};

export default Button;
