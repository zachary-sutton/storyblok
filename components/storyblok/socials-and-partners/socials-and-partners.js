const SocialsAndPartners = ({title , imgs}) => {
    return (
        <div className="flex flex-col justifty-center font-my-font text-2xl">
            <h1 className="text-center m-4">{title[0].title}</h1>
            <div className="flex flex-row justify-center items-center w-full">
                {imgs.map((img, i) => <img className="mr-4" src={img.image.filename} key={i} />)}
            </div>
        </div>

    )
  }
  
  export default SocialsAndPartners

  