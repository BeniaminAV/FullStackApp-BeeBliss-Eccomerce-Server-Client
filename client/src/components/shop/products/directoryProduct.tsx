const DirectoryProduct = ({ honey }: any) => {
  const { name, description, price } = honey

  return (
    <div className="p-5 border-[1px] h-[300px] rounded-md my-2 bg-[#f3f3f3]">
      <div className="h-[200px]">
        <p className="text-center font-semibold text-lg">{name}</p>
        <p className="text-md text-neutral-500 py-5">{description}</p>
      </div>
      <div className="text-end">
        <strong className="text-rose-700">{price} RON</strong>
      </div>
    </div>
  )
}

export default DirectoryProduct
