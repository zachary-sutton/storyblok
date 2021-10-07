const DestinationOfTheWeek = ({blok}) => {
    return (
        <>
        <div className="w-10/12 md:w-11/12 flex justify-start m-auto xl:w-8/12">
            <h1 className="font-my-font text-3xl">Destination of the week</h1>
        </div>
        <div className="w-10/12 md:w-11/12 m-auto flex justify-between bg-right bg-cover rounded-3xl shadow-2xl xl:w-8/12 cursor-pointer" style={{backgroundImage: `url(${blok.bg_img.filename})`}}>
            <div className="flex flex-col justify-between bg-blue-200 rounded-l-3xl w-3/12 opacity-70">
                <h1 className="opacity-100 pl-4">{blok.desc}</h1>
                <h1 className="bg-white pl-4 rounded-bl-3xl">Book Now >>></h1>

            </div>
            <h1 className="p-10 font-my-font text-5xl"><span className="bg-white px-2 rounded-3xl">{blok.dest_name}</span></h1>
        </div>
        </>
    )
  }
  
  export default DestinationOfTheWeek
  