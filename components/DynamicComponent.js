import SbEditable from 'storyblok-react'
import Teaser from './Teaser'
import Feature from './Feature'
import Grid from './Grid'
import FeaturedArticles from './FeaturedArticles'
import Placeholder from './Placeholder'
import NavBar from './NavBar'
import LandingContent from './LandingContent'
import CTACard from './CTACard'
import DOTW from './DOTW'
import PopularDestinationTile from "./PopularDestinationTile"
import CustomGrid from './CustomGrid'
import BestOffersCard from './BestOffersCard'
import BestOffersGrid from "./BestOffersGrid"
import Awards from "./Awards"

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
  "awards" : Awards
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

