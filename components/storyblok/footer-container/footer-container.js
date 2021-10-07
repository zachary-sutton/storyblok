import SocialsAndPartners from "../socials-and-partners/socials-and-partners"
import FAQContainer from "../FAQ-container/FAQ-container"
import React from "react"

const FooterContainer = ({blok}) => {
    // const socials_and_partners = blok
    // console.log(blok.socials_and_partners)
    return (
        <div className="bg-gray-200">
            <div className="flex flex-row justify-around w-8/12 m-auto bg-gray-100 p-10 bg-gray-200">
                {blok.socials_and_partners.map((sap, i) => (
                        <SocialsAndPartners key={i} title={sap.title} imgs={sap.images} />
                    ))}
            </div>
            <FAQContainer blok={blok} />
            <div className="w-8/12 m-auto font-my-font py-10">
                <h1 className="text-xl">{blok.terms_and_conditions[0].title}</h1>
                <p className="text-xs">{blok.terms_and_conditions[1].title}</p>
            </div>
        </div>
    )
  }
  
  export default FooterContainer
  