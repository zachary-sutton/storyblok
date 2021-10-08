import img1 from "../../../images/social-icons/advert-banner.jpeg"

const TabHolidays = (props) => {

    const date = new Date()
    const shortDate = date.toLocaleDateString()

    const returnDate = new Date()
    returnDate.setDate(returnDate.getDate() + 7)
    const shortReturnDate = returnDate.toLocaleDateString()

    return(
        <div className="p-10 bg-white">
            <h1 className="text-3xl mb-3">Search Holidays:</h1>
            <form className="w-full">
                <input className="p-1 py-4 my-1 text-sm w-full" style={{border: "solid 0.5px black"}}  onChange={props.handleText} name="from" type="text" placeholder="from: e.g. Leeds Bradford (LBA)" value={props.from} />
                <input className="p-1 py-4 my-1 text-sm w-full" style={{border: "solid 0.5px black"}}  onChange={props.handleText} name="to" type="text" placeholder="to: e.g. Amsterdam (AMS)" value={props.to} />
                <input className="p-1 py-4 my-1 text-sm w-full" style={{border: "solid 0.5px black"}} onChange={props.handleText} name="departDate" type="text" placeholder={`depart date: e.g. ${shortDate}`} value={props.departDate} />
                <input className="p-1 py-4 my-1 text-sm w-full" style={{border: "solid 0.5px black"}} onChange={props.handleText} name="returnDate" type="text" placeholder={`return date: e.g. ${shortReturnDate}`} value={props.returnDate}/>
            <div className="mt-4">
                <div className="flex justify-between content-center py-1">
                    <h1 className="text-sm">Guests</h1>
                    <div className="flex justify-between">
                        <button className="px-1" type="button" onClick={props.handleMinusNumbers} name="adults" value={props.adults} >-</button>
                        <h1 className="px-1 text-center">{props.adults}</h1>
                        <button className="px-1" type="button" onClick={props.handlePlusNumbers} name="adults" value={props.adults}>+</button>
                    </div>
                </div>
                <div className="flex justify-between">
                    <h1 className="text-sm">Rooms</h1>
                    <div className="flex justify-between">
                        <button className="px-1" type="button" onClick={props.handleMinusNumbers} name="children" value={props.children} >-</button>
                        <h1 className="px-1">{props.children}</h1>
                        <button className="px-1" type="button" onClick={props.handlePlusNumbers} name="children" value={props.children}>+</button>
                    </div>
                </div>
            </div>
            <button className="w-full p-4 mt-4 transition duration-500 ease-in-out bg-blue-600 hover:bg-black text-white text-center border-2 border-black">Show Holidays</button>
            </form>
        </div>
    )
}

export default TabHolidays