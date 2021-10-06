import SocialParters from "../social-partners"

const FooterContainer = ({blok}) => {
    return (
        <div className="flex flex-row justify-around w-full bg-gray-100 p-10 bg-gray-200">
            <SocialParters partners={blok} arrayNumb="0" />
            <SocialParters partners={blok} arrayNumb="1" />
        </div>
    )
  }
  
  export default FooterContainer
  