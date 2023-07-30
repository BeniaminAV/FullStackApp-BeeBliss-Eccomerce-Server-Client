interface ButtonProps {
  onClick?: (e: any) => void
  label: string
  bgColor?: string
}

const Button: React.FC<ButtonProps> = ({ onClick, label, bgColor }) => {
  return (
    <button
      className={`w-full border p-2 rounded-md uppercase text-md text-white font-semibold my-2 transition ${bgColor}`}
      onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
