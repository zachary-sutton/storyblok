const CTACard = ({blok}) => {
    
    return (
            <div className="transition duration-500 transform hover:-translate-y-1 hover:scale-110 cursor-pointer flex flex-col justify-end bg-center bg-cover rounded-3xl w-full shadow-2xl" style={{backgroundImage: `url(${blok.bg_img.filename})`}}>
                <div className="bg-white opacity-70 w-full rounded-b-3xl">
                    <h1 className="pl-4 opacity-100 w-full rounded-b-3xl">{blok.name}</h1>
                </div>
            </div>
    )
  }
  
  export default CTACard
  