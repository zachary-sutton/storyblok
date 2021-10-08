import QuickBookingContainer from "../quick-booking-container/quick-booking-container"

const LandingContent = ({blok}) => {
    return (
        <div className="flex justify-center shadow-2xl min-h-screen" style={{backgroundImage: `url(${blok.landingImg.filename})`}}>
            <QuickBookingContainer />
        </div>
    )
  }
  
  export default LandingContent
  