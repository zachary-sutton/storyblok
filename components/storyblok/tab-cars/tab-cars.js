import React from "react"
import img1 from "../../../images/social-icons/advert-banner.jpeg"

class TabCars extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            young: true,
            mid: false,
            old: false
        }
        this.handleYoungClick = this.handleYoungClick.bind(this)
        this.handleMidClick = this.handleMidClick.bind(this)
        this.handleOldClick = this.handleOldClick.bind(this)
    }

    //really bad repetitive, find way using event obj to make into one method
    handleYoungClick(){
        this.setState(prevState => {
            return {
                young: !prevState.young,
                mid: false,
                old: false
            }
        })
    }

    handleMidClick(){
        this.setState(prevState => {
            return {
                young: false,
                mid: !prevState.mid,
                old: false
            }
        })
    }

    handleOldClick(){
        this.setState(prevState => {
            return {
                young: false,
                mid: false,
                old: !prevState.old
            }
        })
    }

    render(){
        console.log(this.state.young)
        const date = new Date()
        const shortDate = date.toLocaleDateString()

        const returnDate = new Date()
        returnDate.setDate(returnDate.getDate() + 7)
        const shortReturnDate = returnDate.toLocaleDateString()

        //more duplication? how to make one statement
        const highlightYoung = this.state.young === true ? "bg-blue-600 text-white" : ""
        const highlightMid = this.state.mid === true ? "bg-blue-600 text-white" : ""
        const highlightOld = this.state.old === true ? "bg-blue-600 text-white" : ""


        return(
            <div className="p-10 bg-white">
                <h1 className="text-3xl mb-3">Search Cars:</h1>
                <form className="w-full">
                    <input className="p-1 py-4 my-1 text-sm w-full" style={{border: "solid 0.5px black"}}  onChange={this.props.handleText} name="from" type="text" placeholder="from: e.g. Leeds Bradford (LBA)" value={this.props.from} />
                    <input className="p-1 py-4 my-1 text-sm w-full" style={{border: "solid 0.5px black"}} onChange={this.props.handleText} name="departDate" type="text" placeholder={`depart date: e.g. ${shortDate}`} value={this.props.departDate} />
                    <input className="p-1 py-4 my-1 text-sm w-full" style={{border: "solid 0.5px black"}} onChange={this.props.handleText} name="returnDate" type="text" placeholder={`return date: e.g. ${shortReturnDate}`} value={this.props.returnDate}/>
                <div className="mt-4">
                    <h1>Drivers Age:</h1>
                    <div className="flex flex-row justify-between">
                        <button onClick={this.handleYoungClick} type="button" name="young" className={`w-4/12 p-2 mr-1 ${highlightYoung}`} style={{border: "solid 0.5px black"}}>18-29</button>
                        <button onClick={this.handleMidClick} type="button" name="mid" className={`w-4/12 p-2 mr-1 ${highlightMid}`} style={{border: "solid 0.5px black"}}>30-69</button>
                        <button onClick={this.handleOldClick} type="button" name="old" className={`w-4/12 p-2 mr-1 ${highlightOld}`} style={{border: "solid 0.5px black"}}>70+</button>
                    </div>
                </div>
                <button className="w-full p-4 mt-4 transition duration-500 ease-in-out bg-blue-600 hover:bg-black text-white text-center border-2 border-black">Show Holidays</button>
                </form>
            </div>
        )

    }
}

export default TabCars