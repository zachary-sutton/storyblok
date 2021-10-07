const BestOffersCard = ({blok}) => {
    
    return (
        <div className="font-my-font bg-center bg-cover flex flex-col w-full m-2 rounded-3xl shadow-2xl" style={{backgroundImage: `url(${blok.bg_img.filename})`}}>
            <h1 className="text-3xl m-8"><span className="bg-white rounded-3xl p-2 px-4">{blok.name}</span></h1>
            <h1 className="text-2xl ml-8 mb-8"><span className="bg-white rounded-3xl p-2 px-4 opacity-100">£{blok.price}</span></h1>
            <div className="flex flex-row justify-center bg-white">
                <h1 className="px-12">From:{" " + blok.from}</h1>
                <h1 className="px-12">To:{" " + blok.to}</h1>
            </div>
        </div>
    )
  }
  
  export default BestOffersCard
  