const footerLinks = {
  Product: ['Features', 'Pricing', 'Integrations', 'Changelog', 'Roadmap'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Partners'],
  Resources: ['Documentation', 'API Reference', 'Guides', 'Community', 'Status'],
  Legal: ['Privacy', 'Terms', 'Security', 'Cookies', 'GDPR'],
}

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-20 pb-8">
      {/* Top gradient line */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyber-cyan/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Top section */}
        <div className="mb-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#" className="mb-4 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyber-cyan to-cyber-blue text-sm font-bold text-white shadow-lg shadow-cyber-cyan/20">
                S
              </span>
              <span className="text-lg font-bold tracking-tight">
                Site<span className="text-cyber-cyan">01</span>
              </span>
            </a>
            <p className="mb-6 max-w-xs text-sm leading-relaxed text-gray-500">
              The modern platform for building and scaling applications. Built for developers who want to move fast.
            </p>
            <div className="flex gap-4">
              {['X', 'GitHub', 'Slack', 'YouTube'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/5 bg-white/5 text-xs font-medium text-gray-500 backdrop-blur-sm transition-all duration-300 hover:border-cyber-cyan/20 hover:bg-cyber-cyan/10 hover:text-cyber-cyan"
                >
                  {social.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 transition-colors duration-200 hover:text-gray-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Site01. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-gray-600 transition-colors duration-200 hover:text-gray-400">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-gray-600 transition-colors duration-200 hover:text-gray-400">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-gray-600 transition-colors duration-200 hover:text-gray-400">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
