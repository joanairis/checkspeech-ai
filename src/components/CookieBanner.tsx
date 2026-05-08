import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const CookieBanner = () => {
  const { t } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white shadow-2xl border-t-4 border-primary-600 animate-slideUp">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <span className="text-2xl flex-shrink-0">🍪</span>
            <p className="text-dark-700 text-sm md:text-base">
              {t('cookies.message')}
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={handleReject}
              className="px-4 py-2 rounded-lg text-dark-700 hover:bg-dark-100 font-semibold text-sm transition-colors"
              aria-label="Reject cookies"
            >
              {t('cookies.reject')}
            </button>
            <button
              onClick={handleAccept}
              className="btn btn-primary text-sm"
              aria-label="Accept cookies"
            >
              {t('cookies.accept')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner
