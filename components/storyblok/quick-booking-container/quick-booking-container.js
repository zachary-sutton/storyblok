import React from "react"
import TabFlights from "../tab-flights/tab-flights"
import TabHolidays from "../tab-holidays/tab-holidays"
import TabCars from "../tab-cars/tab-cars"

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
            infants: 0,
            tab: 2
        }

        this.handleText = this.handleText.bind(this)
        this.handlePlusNumbers = this.handlePlusNumbers.bind(this)
        this.handleMinusNumbers = this.handleMinusNumbers.bind(this)
        this.handleFlightTab = this.handleFlightTab.bind(this)
        this.handleHolidaysTab = this.handleHolidaysTab.bind(this)
        this.handleCarsTab = this.handleCarsTab.bind(this)
    }
    //THIS ALL NEEDS ADDING TO STORYBLOK

    //split logic into another file
    handleText(e){
        this.setState({[e.target.name]: e.target.value})
    }

    handlePlusNumbers(e){
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
            this.setState(prevState => (
                prevState.adults === 0 ? {[e.target.name]: 0} : {
                [e.target.name]: prevState.adults - 1
                }))
        } else if(e.target.name === "children"){
            this.setState(prevState => (
                prevState.children === 0 ? {[e.target.name]: 0} : {
                [e.target.name]: prevState.children - 1
                }))
        } else {
            this.setState(prevState => (
                prevState.infants === 0 ? {[e.target.name]: 0} : {
                [e.target.name]: prevState.infants - 1
                }))
            }
        }
        // needs to be all one hook, e.target.name not working find another way
        handleFlightTab(){
            this.setState({tab: 0})
        }

        handleHolidaysTab(){
            this.setState({tab: 1})
        }

        handleCarsTab(){
            this.setState({tab: 2})
        }

    render(){
        //conditional rendering for tabs
        const tabDisplay = () => {
            if(this.state.tab === 0){
                return(
                    <TabFlights 
                        handleText={this.handleText} 
                        handleMinusNumbers={this.handleMinusNumbers} 
                        handlePlusNumbers={this.handlePlusNumbers} 
                        from={this.state.from}
                        to={this.state.to}
                        departDate={this.state.departDate}
                        returnDate={this.state.returnDate}
                        adults={this.state.adults}
                        children={this.state.children}
                        infants={this.state.infants}
                    />
                )
            } else if(this.state.tab === 1){
                return(
                    <TabHolidays 
                    handleText={this.handleText} 
                    handleMinusNumbers={this.handleMinusNumbers} 
                    handlePlusNumbers={this.handlePlusNumbers} 
                    from={this.state.from}
                    to={this.state.to}
                    departDate={this.state.departDate}
                    returnDate={this.state.returnDate}
                    adults={this.state.adults}
                    children={this.state.children}
                    infants={this.state.infants}
                />
                )
            } else {
                return(
                    <TabCars
                    handleText={this.handleText} 
                    handleMinusNumbers={this.handleMinusNumbers} 
                    handlePlusNumbers={this.handlePlusNumbers} 
                    from={this.state.from}
                    to={this.state.to}
                    departDate={this.state.departDate}
                    returnDate={this.state.returnDate}
                    adults={this.state.adults}
                    children={this.state.children}
                    infants={this.state.infants}
                />
                )
            }
        }

        return(
            <div className="w-3/12 font-my-font my-auto">
                <div className="flex flex-row justify-between text-center text-white">
                    <h1 name="flights" onClick={this.handleFlightTab} className="w-4/12 rounded-t-xl bg-black p-1 mr-1">Flights</h1>
                    <h1 name="holidays" onClick={this.handleHolidaysTab} className="w-4/12 rounded-t-xl bg-black p-1 mr-1">Holidays</h1>
                    <h1 name="cars" onClick={this.handleCarsTab} className="w-4/12 rounded-t-xl bg-black p-1">Cars</h1>
                </div>
                {tabDisplay()}
            </div>
        )
    }
}
  
export default QuickBookingContainer
  