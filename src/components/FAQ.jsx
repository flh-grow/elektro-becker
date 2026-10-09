import {faqs} from '../data/faqs'
import FAQItem from './FAQItem'

function FAQ() {
  return(
    <section className='max-w-3xl mx-auto px-6 py-20'>
      <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">FAQ</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Häufige Fragen</h2>


      <div className=''>
        {faqs.map((faq) => (
          <FAQItem
          key={faq.question}
          question={faq.question}
          answer={faq.answer} />
        ))}
      </div>
    </section>
  )
}
export default FAQ