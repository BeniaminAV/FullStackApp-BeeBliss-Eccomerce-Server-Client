import { Link } from "react-router-dom"

interface LinkRouteProps {
  label: React.ReactNode
  to: string
}

const LinkRoute: React.FC<LinkRouteProps> = ({ label, to }) => {
  return (
    <Link
      className="relative text-md font-semibold trasnsition ease-in duration-75 text-rose-600 hover:text-rose-500"
      to={to}>
      {label}
    </Link>
  )
}

export default LinkRoute
