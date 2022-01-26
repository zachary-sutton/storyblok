import QuickBookingContainer from "../quick-booking-container/quick-booking-container"
import KalturaPlayer from "../kaltura-player/kaltura-player"

const LandingContent = ({ blok }) => {
	return (
		<div
			className="flex justify-center shadow-2xl min-h-screen"
			style={{ backgroundImage: `url(${blok.landingImg.filename})` }}
		>
			{/* <QuickBookingContainer /> */}
			<KalturaPlayer />
		</div>
	)
}

export default LandingContent
