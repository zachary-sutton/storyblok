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
import Awards from "../awards"
import SocialPartners from '../social-partners'
import Terms from '../terms-and-conditions'
import Footer from '../footer'
import MapTest from '../../layout/map-test'
import FooterGrid from '../../layout/footer-grid'
import FooterContainer from '../footer-container/footer-container'

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
  "social_partners": SocialPartners,
  "terms": Terms,
  "FAQs" : Footer,
  "test-map" : MapTest,
  "footer-grid" : FooterGrid,
  "footer-container" : FooterContainer
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

