const DirectoryProduct = ({ honey }: any) => {
  return (
    <div className="max-w-[500px] min-h-[300px] border p-5">
      <p>{honey.name}</p>
      <p>{honey.description}</p>
      <strong>{honey.price} RON</strong>
    </div>
  )
}

export default DirectoryProduct
