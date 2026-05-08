import { useTranslation } from 'react-i18next'

const Hero = () => {
  const { t } = useTranslation()

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="pt-32 pb-16 md:py-32 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slideUp">
            <h1 className="section-title leading-tight mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-lg text-dark-600 mb-8 leading-relaxed">
              {t('hero.description')}
            </p>

            {/* CTA Button */}
            <button
              onClick={scrollToContact}
              className="btn btn-primary text-lg mb-8"
              aria-label="Start free trial"
            >
              {t('hero.cta')} 🚀
            </button>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {t('hero.stats', { returnObjects: true }).map((stat: any, index: number) => (
                <div key={index} className="animate-slideUp" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {stat.number}
                  </div>
                  <p className="text-sm text-dark-600">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Illustration */}
          <div className="flex justify-center animate-slideUp" style={{ animationDelay: '200ms' }}>
            <div className="relative w-full h-96 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl shadow-2xl flex items-center justify-center">
              <div className="text-8xl animate-pulse">🎙️</div>
              <div className="absolute top-4 right-4 w-32 h-32 bg-primary-300 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-primary-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
