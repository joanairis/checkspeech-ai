import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  const socialLinks = [
    { name: 'Facebook', url: 'https://facebook.com', icon: '👍' },
    { name: 'Twitter', url: 'https://twitter.com', icon: '𝕏' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
    { name: 'YouTube', url: 'https://youtube.com', icon: '▶️' },
  ]

  return (
    <footer className="bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="animate-slideUp">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🎙️</span>
              <span className="font-bold text-lg">{t('navbar.logo')}</span>
            </div>
            <p className="text-dark-300 text-sm">
              Transforming voice into insights with AI
            </p>
          </div>

          {/* Menu Links */}
          <div className="animate-slideUp" style={{ animationDelay: '100ms' }}>
            <h4 className="font-bold mb-4 text-white">Product</h4>
            <ul className="space-y-2 text-dark-300 text-sm">
              <li><a href="#solutions" className="hover:text-primary-400 transition-colors">{t('footer.menu.solutions')}</a></li>
              <li><a href="#pricing" className="hover:text-primary-400 transition-colors">{t('footer.menu.pricing')}</a></li>
              <li><a href="#clients" className="hover:text-primary-400 transition-colors">{t('footer.menu.clients')}</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="animate-slideUp" style={{ animationDelay: '200ms' }}>
            <h4 className="font-bold mb-4 text-white">Support</h4>
            <ul className="space-y-2 text-dark-300 text-sm">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">API Reference</a></li>
              <li><a href="#contact" className="hover:text-primary-400 transition-colors">{t('footer.menu.contact')}</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="animate-slideUp" style={{ animationDelay: '300ms' }}>
            <h4 className="font-bold mb-4 text-white">{t('footer.social')}</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl hover:scale-125 transition-transform"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-dark-300 text-sm">
            <p>{t('footer.copyright')}</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
