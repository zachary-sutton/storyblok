import img1 from "../../../images/social-icons/advert-banner.jpeg"

const TabFlights = (props) => {

    const date = new Date()
    const shortDate = date.toLocaleDateString()

    const returnDate = new Date()
    returnDate.setDate(returnDate.getDate() + 7)
    const shortReturnDate = returnDate.toLocaleDateString()

    return(
        <div className="p-10 bg-white">
            <h1 className="text-3xl mb-3">Search Flights:</h1>
            <form className="w-full">
            <div style={{border: "solid 1px black"}}>
                <input className="rounded-lg p-1 my-1 text-sm w-full" onChange={props.handleText} name="from" type="text" placeholder="from: e.g. Leeds Bradford (LBA)" value={props.from} />
                <hr className="w-10/12 m-auto" style={{borderTop: "solid 0.5px black"}} />
                <input className="p-1 my-1 text-sm w-full" onChange={props.handleText} name="to" type="text" placeholder="to: e.g. Amsterdam (AMS)" value={props.to} />
            </div>
            <div className="mt-4" style={{border: "solid 1px black"}}>
                <input className="p-1 my-1 text-sm w-full" onChange={props.handleText} name="departDate" type="text" placeholder={`depart date: e.g. ${shortDate}`} value={props.departDate} />
                <hr className="w-10/12 m-auto" style={{borderTop: "solid 0.5px black"}} />
                <input className="p-1 my-1 text-sm w-full" onChange={props.handleText} name="returnDate" type="text" placeholder={`return date: e.g. ${shortReturnDate}`} value={props.returnDate}/>
            </div>
            <div className="mt-4">
                <div className="flex justify-between content-center py-1">
                    <h1 className="text-sm">Adults (16+)</h1>
                    <div className="flex justify-between">
                        <button className="px-1" type="button" onClick={props.handleMinusNumbers} name="adults" value={props.adults} >-</button>
                        <h1 className="px-1 text-center">{props.adults}</h1>
                        <button className="px-1" type="button" onClick={props.handlePlusNumbers} name="adults" value={props.adults}>+</button>
                    </div>
                </div>
                <div className="flex justify-between">
                    <h1 className="text-sm">Children (2-15)</h1>
                    <div className="flex justify-between">
                        <button className="px-1" type="button" onClick={props.handleMinusNumbers} name="children" value={props.children} >-</button>
                        <h1 className="px-1">{props.children}</h1>
                        <button className="px-1" type="button" onClick={props.handlePlusNumbers} name="children" value={props.children}>+</button>
                    </div>
                </div>
                <div className="flex justify-between py-1">
                    <h1 className="text-sm">Infants (0-2)</h1>
                    <div className="flex justify-between">
                        <button className="px-1" type="button" onClick={props.handleMinusNumbers} name="infants" value={props.infants} >-</button>
                        <h1 className="px-1">{props.infants}</h1>
                        <button className="px-1" type="button" onClick={props.handlePlusNumbers} name="infants" value={props.infants}>+</button>
                    </div>
                </div>
            </div>
            <button className="w-full p-4 mt-4 transition duration-500 ease-in-out bg-blue-600 hover:bg-black text-white text-center border-2 border-black">Show Flights</button>
            </form>
        </div>
    )
}

export default TabFlights