const TabCars = (props) => (
    <div className="p-10 border-2 bg-white">
        <h1>CARS</h1>
        <form>
        <input className="border-2" onChange={props.handleText} name="from" type="text" placeholder="from" value={props.from} />
        <input className="border-2" onChange={props.handleText} name="to" type="text" placeholder="to" value={props.to} />
        <input className="border-2" onChange={props.handleText} name="departDate" type="text" placeholder="depart date" value={props.departDate} />
        <input className="border-2" onChange={props.handleText} name="returnDate" type="text" placeholder="return date" value={props.returnDate}/>
        <div className="flex justify-around">
            <h1>Adults (16+)</h1>
            <div className="flex">
                <button type="button" onClick={props.handleMinusNumbers} name="adults" value={props.adults} >-</button>
                <h1>{props.adults}</h1>
                <button type="button" onClick={props.handlePlusNumbers} name="adults" value={props.adults}>+</button>
            </div>
        </div>
        <div className="flex justify-around">
            <h1>Children (2-15)</h1>
            <div className="flex">
                <button type="button" onClick={props.handleMinusNumbers} name="children" value={props.children} >-</button>
                <h1>{props.children}</h1>
                <button type="button" onClick={props.handlePlusNumbers} name="children" value={props.children}>+</button>
            </div>
        </div>
        <div className="flex justify-around">
            <h1>Infants (0-2)</h1>
            <div className="flex">
                <button type="button" onClick={props.handleMinusNumbers} name="infants" value={props.infants} >-</button>
                <h1>{props.infants}</h1>
                <button type="button" onClick={props.handlePlusNumbers} name="infants" value={props.infants}>+</button>
            </div>
        </div>
        </form>
    </div>
)

export default TabCars