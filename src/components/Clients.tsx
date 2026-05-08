import { useTranslation } from 'react-i18next'

const Clients = () => {
  const { t } = useTranslation()

  const clients = [
    { name: 'TechCorp', initials: 'TC' },
    { name: 'VoiceAI', initials: 'VA' },
    { name: 'GlobalTalk', initials: 'GT' },
    { name: 'MediaFlow', initials: 'MF' },
    { name: 'DataVoice', initials: 'DV' },
    { name: 'SoundLab', initials: 'SL' },
  ]

  return (
    <section id="clients" className="section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="section-title">{t('clients.title')}</h2>
          <p className="section-subtitle">{t('clients.description')}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="card p-6 flex items-center justify-center h-24 hover:bg-primary-50 cursor-pointer animate-slideUp"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 text-white flex items-center justify-center mx-auto mb-2 font-bold text-sm">
                  {client.initials}
                </div>
                <p className="text-sm font-semibold text-dark-700">{client.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients
