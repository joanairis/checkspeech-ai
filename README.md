# CheckSpeech AI - Landing Page

A professional, responsive landing page for CheckSpeech AI - an advanced speech-to-text API platform with AI capabilities.

## 🚀 Features

### Core Sections
- ✅ **Hero Section** - Impactful introduction with CTA and statistics
- ✅ **Solutions** - 4 service cards with accordion (mobile/tablet)
- ✅ **Clients** - Client logos showcase
- ✅ **Pricing** - 3 pricing tiers with highlighted Business plan
- ✅ **Contact Form** - Complete form with validations and CAPTCHA
- ✅ **Footer** - Navigation links and social media

### Mandatory Features
- 🍪 **Cookie Banner** - GDPR-compliant cookie consent
- 🔘 **2 CTAs** - Strategic call-to-action buttons
- 📊 **Dynamic Components** - Accordion, animations, interactive elements
- 📋 **Form Validation** - Email, phone, required fields, CAPTCHA

### Bonus Features
- 🌍 **Multi-language** - Portuguese (BR) and English
- 📌 **Sticky Navbar** - Navigation always visible
- ⚡ **Animations** - Smooth transitions and entrance effects
- 📱 **100% Responsive** - Mobile, tablet, desktop
- ♿ **Accessibility** - ARIA labels, semantic HTML

## 🛠 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **react-i18next** - Internationalization
- **react-hook-form** - Form management

## 📦 Installation

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Live Demo

Deploy to Vercel:

```bash
npm i -g vercel
vercel
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Navigation with language switcher
│   ├── Hero.tsx            # Hero section
│   ├── Solutions.tsx       # Solutions with accordion
│   ├── Clients.tsx         # Client logos
│   ├── Pricing.tsx         # Pricing plans
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer
│   └── CookieBanner.tsx    # Cookie consent
├── i18n/
│   ├── config.ts           # i18next configuration
│   └── locales/
│       ├── pt-BR.json      # Portuguese translations
│       └── en.json         # English translations
├── styles/
│   └── index.css           # Global styles
├── App.tsx                 # Main app component
└── main.tsx                # Entry point
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the primary color scheme.

### Translations
Add or modify translations in `src/i18n/locales/` JSON files.

### Content
Update component props and content directly in React components.

## 📊 Performance

- Optimized for Core Web Vitals
- Lazy loading images
- CSS-in-JS with Tailwind
- Minified production builds

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is proprietary and created for CheckSpeech AI.

## 👨‍💻 Contributing

For questions or issues, please contact the development team.

---

**Created with ❤️ for CheckSpeech AI**
