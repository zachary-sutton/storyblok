import FAQCard from "../FAQ-card/FAQ-card"

const FAQContainer = ({blok}) => {
    // console.log(blok.FAQs[0])
    return (
        <div className="flex flex-row w-full justify-around bg-gray-200 font-my-font text-center">
            {blok.FAQs[0].faq_cards.map((faq, i) => (
                <FAQCard title={faq.title} faqs={faq.FAQs} key={i} />
            ))}
        </div>
    )
}

export default FAQContainer
