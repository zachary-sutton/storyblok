import SocialsAndPartners from "../socials-and-partners/socials-and-partners"
import FAQContainer from "../FAQ-container/FAQ-container"

const FooterContainer = ({blok}) => {
    // const socials_and_partners = blok
    // console.log(blok.socials_and_partners)
    return (
        <>
            <div className="flex flex-row justify-around w-full bg-gray-100 p-10 bg-gray-200">
                {blok.socials_and_partners.map((sap, i) => (
                        <SocialsAndPartners key={i} title={sap.title} imgs={sap.images} />
                    ))}
            </div>
            <FAQContainer blok={blok} />
            <div>
                <h1>{blok.terms_and_conditions[0].title}</h1>
                <p>{blok.terms_and_conditions[1].title}</p>
            </div>
        </>
    )
  }
  
  export default FooterContainer
  