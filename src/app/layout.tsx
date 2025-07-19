import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Senior Welfare Guide - Find Benefits & Services',
  description: 'Helping seniors worldwide access welfare programs and government services. Senior-friendly design with large fonts and high contrast.',
  keywords: ['seniors', 'welfare', 'benefits', 'accessibility', 'government services'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* Skip to main content for screen readers */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
                     bg-blue-600 text-white px-4 py-2 rounded-md z-50 text-lg font-medium"
        >
          Skip to main content
        </a>
        
        {/* Navigation */}
        <nav className="bg-white shadow-lg border-b-2 border-blue-100">
          <div className="senior-container">
            <div className="flex justify-between h-20">
              {/* Logo */}
              <div className="flex items-center">
                <a href="/" className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">🏠</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900 hidden sm:block">
                    Senior Welfare Guide
                  </span>
                </a>
              </div>
              
              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-4">
                <a href="/" className="senior-nav-link">
                  🏠 Home
                </a>
                <a href="/benefits" className="senior-nav-link">
                  👥 Find Benefits
                </a>
                <a href="/programs" className="senior-nav-link">
                  📋 All Programs
                </a>
                <a href="tel:055-860-8000" className="senior-button">
                  📞 Emergency
                </a>
              </div>
            </div>
          </div>
        </nav>
        
        {/* Main Content */}
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="senior-container py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Contact */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📞</span>
                    <a href="tel:055-860-8000" className="text-lg hover:text-blue-300">
                      055-860-8000
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">✉️</span>
                    <a href="mailto:welfare@senior.org" className="text-lg hover:text-blue-300">
                      welfare@senior.org
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Emergency */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-red-300">🚨 Emergency</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-lg">Fire/Medical</span>
                    <a href="tel:119" className="text-xl font-bold text-red-300">119</a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg">Police</span>
                    <a href="tel:112" className="text-xl font-bold text-red-300">112</a>
                  </div>
                </div>
              </div>
              
              {/* Accessibility */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Accessibility</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">♿</span>
                    <span className="text-lg">Screen Reader Friendly</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🔍</span>
                    <span className="text-lg">Large Fonts</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-lg text-gray-300">
                © 2024 Senior Welfare Guide. Helping seniors worldwide.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 