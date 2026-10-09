import { services } from '../data/services'
import ServiceCard from './ServiceCard'

function Services() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">Leistungen</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Was wir für Sie tun</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.icon}
            title={service.title}
            desc={service.desc}
          />
        ))}
      </div>
    </section>
  )
}

export default Services