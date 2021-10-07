import React from "react"

class QuickBookingContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            from: "",
            to: "",
            departDate: "",
            returnDate: "",
            adults: 0,
            children: 0,
            infants: 0
        }

        this.handleText = this.handleText.bind(this)
        this.handlePlusNumbers = this.handlePlusNumbers.bind(this)
        this.handleMinusNumbers = this.handleMinusNumbers.bind(this)
    }

    handleText(e){
        this.setState({[e.target.name]: e.target.value})
    }

    handlePlusNumbers(e){
        console.log(this.state.adults)
        if(e.target.name === "adults"){
            this.setState(prevState => ({
                [e.target.name]: prevState.adults + 1
            }))
        } else if(e.target.name === "children"){
            this.setState(prevState => ({
                [e.target.name]: prevState.children + 1
            }))
        } else {
            this.setState(prevState => ({
                [e.target.name]: prevState.infants + 1
            }))
            }
        }


        handleMinusNumbers(e){
            if(e.target.name === "adults"){
                this.setState(prevState => ({
                    [e.target.name]: prevState.adults - 1
                }))
            } else if(e.target.name === "children"){
                this.setState(prevState => ({
                    [e.target.name]: prevState.children - 1
                }))
            } else {
                this.setState(prevState => ({
                    [e.target.name]: prevState.infants - 1
                }))
                }
            }


    render(){
        return(
            <div className="w-3/12 font-my-font">
                <div className="flex flex-row justify-between text-center">
                    <h1 className="border-2 w-4/12 rounded-t-xl">Flights</h1>
                    <h1 className="border-2 w-4/12 rounded-t-xl">Holidays</h1>
                    <h1 className="border-2 w-4/12 rounded-t-xl">Cars</h1>
                </div>
                <div className="p-10 border-2">
                    <form>
                    <input className="border-2" onChange={this.handleText} name="from" type="text" placeholder="from" value={this.state.from} />
                    <input className="border-2" onChange={this.handleText} name="to" type="text" placeholder="to" value={this.state.to} />
                    <input className="border-2" onChange={this.handleText} name="departDate" type="text" placeholder="depart date" value={this.state.departDate} />
                    <input className="border-2" onChange={this.handleText} name="returnDate" type="text" placeholder="return date" value={this.state.returnDate}/>
                    <div className="flex justify-around">
                        <h1>Adults (16+)</h1>
                        <div className="flex">
                            <button type="button" onClick={this.handleMinusNumbers} name="adults" value={this.state.adults} >-</button>
                            <h1>{this.state.adults}</h1>
                            <button type="button" onClick={this.handlePlusNumbers} name="adults" value={this.state.adults}>+</button>
                        </div>
                    </div>
                    <div className="flex justify-around">
                        <h1>Children (2-15)</h1>
                        <div className="flex">
                            <button type="button" onClick={this.handleMinusNumbers} name="children" value={this.state.children} >-</button>
                            <h1>{this.state.children}</h1>
                            <button type="button" onClick={this.handlePlusNumbers} name="children" value={this.state.children}>+</button>
                        </div>
                    </div>
                    <div className="flex justify-around">
                        <h1>Infants (0-2)</h1>
                        <div className="flex">
                            <button type="button" onClick={this.handleMinusNumbers} name="infants" value={this.state.infants} >-</button>
                            <h1>{this.state.infants}</h1>
                            <button type="button" onClick={this.handlePlusNumbers} name="infants" value={this.state.infants}>+</button>
                        </div>
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}
  
export default QuickBookingContainer
  