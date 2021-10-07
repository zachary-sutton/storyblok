import FAQCard from "../FAQ-card/FAQ-card"

const FAQContainer = ({blok}) => {
    return (
        <div className="w-10/12 m-auto">            
            <hr className="border-1 border-gray-300 my-2" />
            <div className="flex flex-row w-full justify-around p-8 bg-gray-200 font-my-font text-center">
                {blok.FAQs[0].faq_cards.map((faq, i) => (
                    <FAQCard title={faq.title} faqs={faq.FAQs} key={i} />
                ))}
            </div>
            <hr className="border-1 border-gray-300" />
        </div>
    )
}

export default FAQContainer
