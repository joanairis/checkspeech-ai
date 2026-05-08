import { useTranslation } from 'react-i18next'

const Pricing = () => {
  const { t } = useTranslation()
  const plans = t('pricing.plans', { returnObjects: true })

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="pricing" className="section bg-dark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slideUp">
          <h2 className="section-title">{t('pricing.title')}</h2>
          <p className="section-subtitle">{t('pricing.description')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan: any, index: number) => (
            <div
              key={index}
              className={`card transition-all duration-300 animate-slideUp ${
                plan.badge ? 'pricing-highlight md:h-auto' : 'h-full'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="bg-primary-600 text-white text-xs font-bold px-4 py-2 rounded-b-lg text-center">
                  ⭐ {plan.badge}
                </div>
              )}

              <div className="p-8">
                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-dark-900 mb-4">{plan.name}</h3>

                {/* Price */}
                <div className="mb-6">
                  <div className="text-4xl font-bold text-primary-600 mb-2">
                    {plan.price || plan.monthlyPrice}
                  </div>
                  {plan.monthlyLabel && (
                    <p className="text-sm text-dark-600">
                      {plan.monthlyLabel}
                      {plan.annualPrice && (
                        <span className="block text-xs mt-2">
                          ou {plan.annualPrice} {plan.annualLabel}
                        </span>
                      )}
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="flex gap-3 text-dark-700 text-sm">
                      <span className="text-primary-600 font-bold flex-shrink-0">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={scrollToContact}
                  className={`w-full btn ${
                    plan.badge ? 'btn-primary' : 'btn-outline'
                  }`}
                  aria-label={`Choose ${plan.name} plan`}
                >
                  {plan.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
