export const services = [
    {
        icon: '🔌',
        title:'Elektroinstallation',
        desc: 'Neubau, Altbau oder Sanierung: Leitungen, Steckdosen und Sicherungskästen nach aktueller Norm.',
    },
     {
    icon: '🚗',
    title: 'Wallbox & E-Mobilität',
    desc: 'Wir installieren Ihre Wallbox sicher und kümmern uns um die Anmeldung beim Netzbetreiber.',
  },
  {
    icon: '🏠',
    title: 'Smart Home',
    desc: 'Licht, Heizung und Rollläden bequem per App oder Sprache steuern.',
  },
  {
    icon: '🛠️',
    title: 'Reparatur & Notdienst',
    desc: 'Stromausfall oder defekte Leitung? Wir sind schnell bei Ihnen in Gotha und Umgebung.',
  },
]


// 🧠 Why a separate file? If the client says "change the Smart Home text", you open one small data file, not a big component full of HTML. Content and design live apart. Same idea as your projectsData, just in its own file. And .js, because there's no JSX inside! 😉