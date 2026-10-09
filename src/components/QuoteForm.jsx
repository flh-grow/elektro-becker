import { useState } from "react"
import { services } from '../data/services'

function QuoteForm() {
  const [formData, setFormData] = useState({
    name:'',
    phone:'',
    service:'',
    message:'',
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function validate() {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name='Bitte geben Sie Ihren Namen ein.'
    }
    if (!/^[0-9+\s/-]{6,}$/.test(formData.phone)) {
    newErrors.phone = 'Bitte geben Sie eine gültige Telefonnummer ein.'
  }
  if(!formData.service) {
    newErrors.service = 'Bitte wählen Sie eine Leistung'
  }

  return newErrors
  }


  function handleSubmit(e) {
    e.preventDefault()
    const newErrors = validate()
    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
    }
  }

  function handleChange(e){
    const {name, value}= e.target  
    setFormData({...formData, [name]: value})
    setErrors({ ...errors, [name]: '' })
  }

  const inputStyle = 
  'w-full bg-slate-900 border rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition'

  return(
    <section id="angebot" className="max-w-2xl mx-auto px-6 py-20">
      <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">Kontakt</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">Kostenloses Angebot anfordern</h2>
      <p className="text-slate-400 mb-10">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>

      {submitted ? (
  <div className="border border-amber-400 rounded-xl p-8 text-center">
    <p className="text-4xl mb-4">✅</p>
    <h3 className="text-2xl font-bold mb-2">Vielen Dank, {formData.name}!</h3>
    <p className="text-slate-400">Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
  </div>
) : (
  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        
        <div>
         <input name="name"
         placeholder="Ihr Name *" 
         value={formData.name}
          onChange={handleChange} 
          className={`${inputStyle} ${errors.name ? 'border-red-500' : 'border-slate-700'}`}
          />{errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>



          <div>
          <input name="phone"
          type="tel"
         placeholder="Telefonnummer *" 
         value={formData.phone} 
         onChange={handleChange} 
         className={`${inputStyle} ${errors.phone ? 'border-red-500' : 'border-slate-700'}`}/>
         {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
          </div>



        <div>
  <select
    name="service"
    value={formData.service}
    onChange={handleChange}
    className={`${inputStyle} ${errors.service ? 'border-red-500' : 'border-slate-700'}`}
  >
    <option value="">Welche Leistung? *</option>
    {services.map((s) => (
      <option key={s.title} value={s.title}>{s.title}</option>
    ))}
  </select>
  {errors.service && <p className="text-red-400 text-sm mt-1">{errors.service}</p>}
</div>

          <textarea name="message" rows={4} placeholder="Beschreiben Sie kurz Ihr Anliegen" value={formData.message} onChange={handleChange} className={`${inputStyle} border-slate-700 resize-none`} />

          <button type="submit" className="font-bold py-4 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-lg transition">
            Angebot anfordern →
          </button>

      </form>
)}
    </section>
  
)}
export default QuoteForm