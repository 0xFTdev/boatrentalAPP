import React from 'react'

const ShipDetail = () => {

  const { ships, getShips } = useAppState()

  useEffect(() => {
      getArticles();
  }, []);

  const id = useParams();


  const detailShip = ship.filter((article) => {
      console.log("aici este id", ship._id);
      return ship._id === id.id
  })

  const serverAdress = "http://localhost:3500/"




  return (
    <>
    <div>ShipDetail</div>

    <main className="bg-white">
    <img
        src={detailShip?.imageUrl}
        alt={detailShip[0]?.name}
        className="aspect-video h-40 w-full object-cover object-center"
    />
    <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">

        <div>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{blogArticle[0]?.title}</h2>
            <p>{detailShip[0]?.serialNumber}</p>

            <p className="mt-4 text-gray-500">
                {detailShip[0]?.shipType}
            </p>


        </div>

        <img
           src={detailShip?.imageUrl}
           alt={detailShip[0]?.name}
            className="aspect-video h-full w-full object-cover object-center"
        />
    </div>
</main>

</>



  )
}

export default ShipDetail