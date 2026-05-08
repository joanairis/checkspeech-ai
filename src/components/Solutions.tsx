import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Solutions = () => {
  const { t } = useTranslation()
  const [openAccordion, setOpenAccordion] = useState(0)
  const solutions = t('solutions.items', { returnObjects: true })

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? -1 : index)
  }

  return (
    <section id="solutions" className="section bg-dark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="section-title">{t('solutions.title')}</h2>
          <p className="section-subtitle">{t('solutions.description')}</p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 mb-12">
          {solutions.map((solution: any, index: number) => (
            <div
              key={index}
              className="card p-8 animate-slideUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-4">{solution.icon}</div>
              <h3 className="text-2xl font-bold text-dark-900 mb-3">{solution.title}</h3>
              <p className="text-dark-600 mb-4">{solution.description}</p>
              <p className="text-sm text-dark-500 italic border-l-4 border-primary-600 pl-4">
                {solution.details}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Accordion */}
        <div className="md:hidden space-y-4">
          {solutions.map((solution: any, index: number) => (
            <div key={index} className="card animate-slideUp" style={{ animationDelay: `${index * 100}ms` }}>
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full p-6 flex items-start justify-between text-left hover:bg-dark-100 transition-colors"
                aria-expanded={openAccordion === index}
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="text-3xl flex-shrink-0">{solution.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-dark-900">{solution.title}</h3>
                    <p className="text-sm text-dark-600 mt-1">{solution.description}</p>
                  </div>
                </div>
                <svg
                  className={`w-6 h-6 text-primary-600 flex-shrink-0 ml-4 transition-transform duration-300 ${
                    openAccordion === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>

              {openAccordion === index && (
                <div className="px-6 pb-6 border-t border-dark-200 mt-4 animate-slideDown">
                  <p className="text-dark-600">{solution.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions
