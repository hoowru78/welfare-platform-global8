# Senior Welfare Guide - Clean Version

A simple, senior-friendly website to help seniors find welfare programs and government services worldwide.

## ✨ Features

- 🎯 **Senior-Friendly Design** - Large fonts (18px base), high contrast, touch-friendly buttons
- 📱 **Mobile Responsive** - Works perfectly on phones, tablets, and computers
- ♿ **Accessibility Compliant** - Screen reader friendly, keyboard navigation
- 🚀 **Fast Loading** - Minimal dependencies, optimized for seniors
- 📞 **Emergency Contacts** - Prominently displayed for quick access

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open in Browser
Open [http://localhost:3000](http://localhost:3000) to see your website.

### 4. Deploy to Vercel
```bash
npm run build
```
Then connect your GitHub repository to Vercel for automatic deployment.

## 📁 Essential Files Structure

```
senior-welfare-clean/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Main layout with navigation & footer
│   │   ├── page.tsx         # Homepage
│   │   └── globals.css      # Senior-friendly styles
│   └── components/          # (For future components)
├── package.json             # Dependencies (minimal)
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Senior-friendly Tailwind setup
├── tsconfig.json            # TypeScript configuration
└── vercel.json              # Deployment configuration
```

## 🎨 Senior-Friendly Design Features

- **Large Text**: 18px base font size (instead of 16px)
- **High Contrast**: Blue and gray color scheme for visibility
- **Touch-Friendly**: 44px minimum button size
- **Simple Navigation**: Clear emoji icons and labels
- **Emergency Access**: Red emergency contact buttons
- **Accessibility**: WCAG 2.1 AA compliant

## 🌍 Ready for Global Deployment

This clean version is optimized for:
- ✅ Fast builds (under 1 minute)
- ✅ Minimal dependencies (no conflicts)
- ✅ Global CDN deployment
- ✅ Mobile-first design
- ✅ Senior accessibility needs

## 🛠️ Customization

### Adding New Pages
Create new files in `src/app/` directory:
- `src/app/benefits/page.tsx` for `/benefits` page
- `src/app/programs/page.tsx` for `/programs` page

### Modifying Styles
Edit `src/app/globals.css` and `tailwind.config.js` for styling changes.

### Emergency Contacts
Update phone numbers in `src/app/layout.tsx` and `src/app/page.tsx`.

---

## 💡 Why This Clean Version?

This version removes all the complex dependencies that were causing build errors:
- ❌ No internationalization conflicts
- ❌ No missing Tailwind plugins
- ❌ No complex routing issues
- ✅ Simple, working senior welfare website
- ✅ Easy to deploy and maintain
- ✅ Perfect foundation for future features

**Ready to help seniors worldwide! 🌍❤️** 