'use client'

export default function Footer() {
  const languages = ['En', 'Es', 'Fr', 'De', 'Ru']

  return (
    <footer className="bg-background border-t border-accent/20 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Column 1 - Logo and Navigation */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full text-accent" fill="currentColor">
                  <path d="M20 30 L40 15 L40 45 L20 60 Z" />
                  <path d="M45 30 L65 15 L65 45 L45 60 Z" />
                  <path d="M70 30 L90 15 L90 45 L70 60 Z" opacity="0.7" />
                </svg>
              </div>
              <div>
                <div className="text-xl font-bold text-foreground">SOVFUND</div>
                <div className="text-xs text-accent uppercase tracking-wider">Capital Partners</div>
              </div>
            </div>

            {/* Navigation Links - Column 1 */}
            <ul className="space-y-3 text-foreground/80">
              <li>
                <a href="#" className="hover:text-accent transition text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition text-sm">
                  Vision
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition text-sm">
                  Investment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition text-sm">
                  Team
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 - Navigation Links */}
          <div className="lg:col-span-1">
            <ul className="space-y-3 text-foreground/80 lg:pt-20">
              <li>
                <a href="#" className="hover:text-accent transition text-sm">
                  Structure
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition text-sm">
                  Technology
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition text-sm">
                  Contacts
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact & Location */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Contact Us */}
              <div>
                <h4 className="font-bold text-foreground text-base mb-3">Contact Us</h4>
                <div className="space-y-2">
                  <p className="text-foreground/80 text-sm">+1 (999) 888-77-66</p>
                  <p className="text-foreground/80 text-sm">hello@ipsum.com</p>
                </div>
              </div>

              {/* Location */}
              <div>
                <h4 className="font-bold text-foreground text-base mb-3">Location</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-foreground font-medium text-sm mb-1">Panama</p>
                    <p className="text-foreground/70 text-xs">Strategic Gateway to Latin America</p>
                  </div>
                  <div>
                    <p className="text-foreground font-medium text-sm mb-1">Abu Dhabi</p>
                    <p className="text-foreground/70 text-xs">Middle East Financial Hub</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4 - Languages */}
          <div className="lg:col-span-1 lg:flex lg:justify-end">
            <div>
              <h4 className="font-bold text-foreground text-base mb-3">Languages</h4>
              <div className="flex flex-wrap gap-3">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    className="text-foreground/80 hover:text-accent transition text-sm font-medium"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
