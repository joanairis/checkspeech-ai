import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

interface FormData {
  name: string
  email: string
  phone: string
  country: string
  message: string
  gdpr: boolean
  captchaAnswer: number
}

const Contact = () => {
  const { t } = useTranslation()
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null)
  const [captchaQuestion, setCaptchaQuestion] = useState({ num1: 5, num2: 3, operator: '+' })
  const [showMessage, setShowMessage] = useState(true)

  // Generate random CAPTCHA
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1
    const num2 = Math.floor(Math.random() * 10) + 1
    const operators = ['+', '-']
    const operator = operators[Math.floor(Math.random() * operators.length)]
    setCaptchaQuestion({ num1, num2, operator })
  }

  const getCaptchaAnswer = () => {
    const { num1, num2, operator } = captchaQuestion
    return operator === '+' ? num1 + num2 : num1 - num2
  }

  const onSubmit = async (data: FormData) => {
    if (data.captchaAnswer !== getCaptchaAnswer()) {
      setSubmitStatus('error')
      setShowMessage(true)
      generateCaptcha()
      return
    }

    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setShowMessage(true)
      reset()
      generateCaptcha()
      setTimeout(() => setShowMessage(false), 5000)
    } catch {
      setSubmitStatus('error')
      setShowMessage(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section bg-dark-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slideUp">
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">{t('contact.description')}</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="card p-8 animate-slideUp">
          {/* Status Messages */}
          {showMessage && submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg flex items-start gap-3 animate-slideDown">
              <span className="text-xl">✅</span>
              <p>{t('contact.form.success')}</p>
            </div>
          )}
          {showMessage && submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg flex items-start gap-3 animate-slideDown">
              <span className="text-xl">❌</span>
              <p>{t('contact.form.error')}</p>
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-dark-700 mb-2">
                {t('contact.form.name')} *
              </label>
              <input
                id="name"
                type="text"
                className="form-input"
                placeholder="João Silva"
                {...register('name', { required: true })}
                aria-invalid={errors.name ? 'true' : 'false'}
              />
              {errors.name && <span className="text-red-600 text-sm mt-1">Required field</span>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-dark-700 mb-2">
                {t('contact.form.email')} *
              </label>
              <input
                id="email"
                type="email"
                className="form-input"
                placeholder="joao@example.com"
                {...register('email', {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                })}
                aria-invalid={errors.email ? 'true' : 'false'}
              />
              {errors.email && <span className="text-red-600 text-sm mt-1">Valid email required</span>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-dark-700 mb-2">
                {t('contact.form.phone')}
              </label>
              <input
                id="phone"
                type="tel"
                className="form-input"
                placeholder="+55 11 99999-9999"
                {...register('phone')}
              />
            </div>

            {/* Country */}
            <div>
              <label htmlFor="country" className="block text-sm font-semibold text-dark-700 mb-2">
                {t('contact.form.country')} *
              </label>
              <select
                id="country"
                className="form-input"
                {...register('country', { required: true })}
                aria-invalid={errors.country ? 'true' : 'false'}
              >
                <option value="">Select a country</option>
                <option value="BR">Brazil</option>
                <option value="PT">Portugal</option>
                <option value="US">United States</option>
                <option value="AR">Argentina</option>
                <option value="MX">Mexico</option>
              </select>
              {errors.country && <span className="text-red-600 text-sm mt-1">Required field</span>}
            </div>
          </div>

          {/* Message */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-semibold text-dark-700 mb-2">
              {t('contact.form.message')}
            </label>
            <textarea
              id="message"
              rows={4}
              className="form-textarea"
              placeholder="Tell us about your needs..."
              {...register('message')}
            />
          </div>

          {/* CAPTCHA */}
          <div className="mb-6">
            <label htmlFor="captcha" className="block text-sm font-semibold text-dark-700 mb-2">
              {t('contact.form.captcha')} {captchaQuestion.num1} {captchaQuestion.operator} {captchaQuestion.num2}? *
            </label>
            <input
              id="captcha"
              type="number"
              className="form-input"
              placeholder="Answer"
              {...register('captchaAnswer', { required: true, valueAsNumber: true })}
              aria-invalid={errors.captchaAnswer ? 'true' : 'false'}
            />
            {errors.captchaAnswer && <span className="text-red-600 text-sm mt-1">Required field</span>}
          </div>

          {/* GDPR Checkbox */}
          <div className="mb-6">
            <label htmlFor="gdpr" className="flex items-start gap-3 cursor-pointer">
              <input
                id="gdpr"
                type="checkbox"
                className="w-5 h-5 mt-1 rounded accent-primary-600"
                {...register('gdpr', { required: true })}
                aria-invalid={errors.gdpr ? 'true' : 'false'}
              />
              <span className="text-sm text-dark-700">
                {t('contact.form.gdpr')} *
              </span>
            </label>
            {errors.gdpr && <span className="text-red-600 text-sm mt-1 block">Must accept terms</span>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Submit form"
          >
            {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
