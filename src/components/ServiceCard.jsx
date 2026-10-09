function ServiceCard({desc, title, icon}) {
  return(
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-amber-400 transition">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{desc}</p>
    </div>
  )
}

export default ServiceCard