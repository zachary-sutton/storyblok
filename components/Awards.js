const Awards = ({blok}) => {
    
    return (
        <div className="flex flex-row justify-center py-5 bg-blue-600 w-full m-auto my-20 text-white font-my-font text-center">
            <div className="flex flex-col items-center w-2/12">
                <img src={blok.award_image1.filename} />
                <p className="mt-5 px-5">
                    Business Airline of the Year and
                    Best Short-Haul Airline
                    Business Travel Awards 2019
                </p>        
            </div>
            <div className="flex flex-col items-center w-2/12">
                <img src={blok.award_image3.filename} />
                <p className="mt-5 px-5">
                    Best Low-Cost Airline
                    Italia Travel Awards 2019
                </p>
            </div>
            <div className="flex flex-col items-center w-2/12">
                <img src={blok.award_image2.filename} />
                <p className="mt-5 px-5">
                    Best Low-Cost Airline in Europe
                    Skytrax World Airline Awards 2019       
                </p>
            </div>
        </div>
    )
  }
  
  export default Awards
  