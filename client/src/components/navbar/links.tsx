import LinkRoute from "../linkRoute"

const Links = () => {
  return (
    <div className="hidden flex-row gap-x-10 border-[1px] p-3 rounded-full px-5 uppercase lg:flex">
      <LinkRoute label="Product" to={"/product"} />
      <LinkRoute label="Laptisor" to={"/laptisor"} />
      <LinkRoute label="Honey" to={"/honey"} />
      <LinkRoute label="World Honey" to={"/world-honey"} />
      <LinkRoute label="Tonic" to={"/tonic"} />
      <LinkRoute label="Candy" to={"/candy"} />
    </div>
  )
}

export default Links
