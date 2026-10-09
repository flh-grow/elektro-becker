import { useToggle } from '../hooks/useToggle'

function FAQItem ({question, answer}) {
  const {isOn, toggle}= useToggle()
  return (
    <div className='border-b border-slate-800'>
      <button
      onClick={toggle}
      className="w-full flex justify-between items-center py-5 text-left font-semibold text-lg hover:text-amber-400 transition">
        {question}
        <span className="text-amber-400 text-2xl ml-4">{isOn ? '−' : '+'}</span>
      </button>

      {isOn && <p className="text-slate-400 pb-5 leading-relaxed">{answer}</p>}

    </div>
  )
}
export default FAQItem