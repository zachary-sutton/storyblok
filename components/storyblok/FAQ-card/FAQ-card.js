const FAQCard = ({title, faqs}) => {
    console.log(faqs)
    return (
        <div>
            <h1 className="text-2xl">{title}</h1>
            <ul>
                {faqs.map((faq, i) => (
                    <li key={i}>{faq.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default FAQCard
