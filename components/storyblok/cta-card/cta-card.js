import {Helmet} from 'react-helmet'
import {useEffect} from 'react'

const CTACard = ({blok}) => {
    //this should probably be mapped like footer section is.
    return (
        <div className="w-full p-12 m-2 font-my-font shadow-2xl rounded-3xl cursor-pointer bg-cover" style={{backgroundImage: `url(${blok.bg_img.filename})`}}>
                <h2 className="text-4xl text-center"><span className="bg-white px-2 rounded-3xl">{blok.title_text}</span></h2>
                <h4 className="text-2xl py-4 text-center"><span className="bg-white px-2 rounded-3xl">{blok.cta_reason_text + " >"}</span></h4>
        </div>
    )
  }
  
  export default CTACard
  