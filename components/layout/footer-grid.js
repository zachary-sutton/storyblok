const FooterGrid = ({blok}) => {
        return (
        <div>
            <div className="flex justify-between text-center w-8/12 m-auto border-2 font-my-font">
                {
                    blok.grid.map((ulBlock, i) => (
                        <div key={i}>
                            <h1 className="text-2xl mb-4">{ulBlock.ul[0].title}</h1>
                            {ulBlock.ul.map((liItem, i) => (
                                <div key={i}>
                                    <p className="mb-0">{liItem.text}</p>
                                </div>
                            ))}
                        </div>
                    ))}

            </div>
        </div>
    )
  }
  
  export default FooterGrid
  