import SbEditable from 'storyblok-react'
import Teaser from './Teaser'
import Feature from './Feature'
import Grid from '../../layout/stock-components/Grid'
import Placeholder from './Placeholder'
import NavBar from '../nav-bar/nav-bar'
import LandingContent from '../landing-content/landing-content'
import CTACard from '../cta-card/cta-card'
import DestinationOfTheWeek from '../destination-of-the-week/destination-of-the-week'
import PopularDestinationTile from "../popular-destination-tile/popular-destination-tile"
import CustomGrid from '../../layout/custom-grid'
import BestOffersCard from '../best-offers-card/best-offers-card'
import BestOffersGrid from "../../layout/best-offers-grid"
import Awards from "../awards/awards"
import SocialsAndPartners from '../socials-and-partners/socials-and-partners'
import FooterGrid from '../../layout/footer-grid'
import FooterContainer from '../footer-container/footer-container'
import FAQContainer from '../FAQ-container/FAQ-container'
import QuickBookingContainer from '../quick-booking-container/quick-booking-container'
import RichTest from '../rich-test/rich-test'

// resolve Storyblok components to Next.js components
const Components = {
  'teaser': Teaser,
  'grid': Grid,
  'feature': Feature,
  "nav-bar" : NavBar, 
  "landing-content": LandingContent,
  "cta-card": CTACard,
  "destination-of-the-week" : DestinationOfTheWeek,
  "popular-destination-tile" : PopularDestinationTile,
  "custom-grid" : CustomGrid,
  "best-offers-card" : BestOffersCard,
  "best-offers-grid" : BestOffersGrid,
  "awards" : Awards,
  "socials_and_partners": SocialsAndPartners,
  "footer-grid" : FooterGrid,
  "footer-container" : FooterContainer,
  "FAQ-container" : FAQContainer,
  "quick-booking-container" : QuickBookingContainer,
  "rich-test" : RichTest

}

const DynamicComponent = ({blok}) => {
  // check if component is defined above
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component]
    // wrap with SbEditable for visual editing
    return (
      <SbEditable content={blok}>
        <Component blok={blok} />
      </SbEditable>
      )
  }

  return <Placeholder componentName={blok.component}/>
}

export default DynamicComponent

