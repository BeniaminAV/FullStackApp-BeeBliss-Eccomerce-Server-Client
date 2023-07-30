interface InputProps {
  label: string
  type: string
  name: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

const FormField: React.FC<InputProps> = ({
  label,
  type,
  name,
  onChange,
  value,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} onChange={onChange} value={value} />
    </div>
  )
}

export default FormField
