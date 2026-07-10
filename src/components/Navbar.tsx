import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../lib/AuthContext'

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Stats', href: '#stats' },
  { label: 'Testimonials', href: '#testimonials' },
]

export default function Navbar() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSignOut = async () => {
    await signOut()
    navigate('/')
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-deep-900/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyber-cyan to-cyber-blue text-sm font-bold text-white shadow-lg shadow-cyber-cyan/20 transition-transform duration-300 group-hover:scale-110">
            S
          </span>
          <span className="text-lg font-bold tracking-tight">
            Site<span className="text-cyber-cyan">01</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-gray-400 transition-colors duration-300 hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-cyber-cyan transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Desktop auth buttons */}
        <div className="hidden items-center gap-3 md:flex">
          {user ? (
            <>
              <Link
                to="/dashboard"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-400 transition-colors duration-300 hover:text-white"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-cyber-cyan to-cyber-blue text-[10px] font-bold text-white">
                  {(user.email?.[0] ?? '?').toUpperCase()}
                </span>
                Dashboard
              </Link>
              <button
                onClick={handleSignOut}
                className="rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-gray-400 transition-all duration-300 hover:border-white/20 hover:text-white"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-lg px-4 py-2 text-sm font-medium text-gray-400 transition-colors duration-300 hover:text-white"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="relative rounded-lg bg-gradient-to-r from-cyber-cyan to-cyber-blue px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-cyber-cyan/25 transition-all duration-300 hover:shadow-xl hover:shadow-cyber-cyan/30 hover:scale-105"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[2px] w-6 rounded-full bg-gray-300 transition-all duration-300 ${
              mobileOpen ? 'translate-y-[3.5px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-6 rounded-full bg-gray-300 transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-6 rounded-full bg-gray-300 transition-all duration-300 ${
              mobileOpen ? '-translate-y-[3.5px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out md:hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="border-t border-white/5 bg-deep-800/95 backdrop-blur-xl px-6 py-4">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-2.5 text-sm font-medium text-gray-400 transition-colors duration-200 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <hr className="border-white/5 my-2" />
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-400 transition-colors duration-200 hover:bg-white/5 hover:text-white"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-cyber-cyan to-cyber-blue text-[10px] font-bold text-white">
                    {(user.email?.[0] ?? '?').toUpperCase()}
                  </span>
                  Dashboard
                </Link>
                <button
                  onClick={() => {
                    setMobileOpen(false)
                    handleSignOut()
                  }}
                  className="rounded-lg border border-white/10 px-4 py-2.5 text-center text-sm font-medium text-gray-400 transition-colors duration-200 hover:border-white/20 hover:text-white"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-2.5 text-sm font-medium text-gray-400 transition-colors duration-200 hover:bg-white/5 hover:text-white"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg bg-gradient-to-r from-cyber-cyan to-cyber-blue px-4 py-2.5 text-center text-sm font-semibold text-white shadow-lg shadow-cyber-cyan/25"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
