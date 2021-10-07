import SbEditable from 'storyblok-react'
import Teaser from './Teaser'
import Feature from './Feature'
import Grid from '../../layout/stock-components/Grid'
import FeaturedArticles from './FeaturedArticles'
import Placeholder from './Placeholder'
import NavBar from '../nav-bar'
import LandingContent from '../landing-content'
import CTACard from '../CTACard'
import DOTW from '../destination-of-the-week'
import PopularDestinationTile from "../popular-destination-tile"
import CustomGrid from '../../layout/custom-grid'
import BestOffersCard from '../best-offers-card'
import BestOffersGrid from "../../layout/best-offers-grid"
import Awards from "../awards/awards"
import SocialsAndPartners from '../socials-and-partners/socials-and-partners'
import FooterGrid from '../../layout/footer-grid'
import FooterContainer from '../footer-container/footer-container'
import FAQContainer from '../FAQ-container/FAQ-container'

// resolve Storyblok components to Next.js components
const Components = {
  'teaser': Teaser,
  'grid': Grid,
  'feature': Feature,
  'featured-articles': FeaturedArticles,
  "nav-bar" : NavBar, 
  "landing-content": LandingContent,
  "cta-card": CTACard,
  "DOTW" : DOTW,
  "popular-destination-tile" : PopularDestinationTile,
  "custom-grid" : CustomGrid,
  "best-offers-card" : BestOffersCard,
  "best-offers-grid" : BestOffersGrid,
  "awards" : Awards,
  "socials_and_partners": SocialsAndPartners,
  "footer-grid" : FooterGrid,
  "footer-container" : FooterContainer,
  "FAQ-container" : FAQContainer
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

