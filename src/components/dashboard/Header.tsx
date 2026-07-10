import { Link } from 'react-router-dom'
import { useAuth } from '../../lib/AuthContext'

export default function DashboardHeader() {
  const { user } = useAuth()
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-white/5 bg-deep-900/80 px-6 backdrop-blur-xl">
      {/* Page title area */}
      <div className="flex items-center gap-3">
        <Link
          to="/"
          className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-gray-600 transition-colors duration-200 hover:bg-white/5 hover:text-gray-400"
        >
          <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to site
        </Link>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Search */}
      <div className="relative hidden sm:block">
        <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search projects, logs..."
          className="w-64 rounded-xl border border-white/5 bg-deep-700/50 py-2 pl-10 pr-4 text-sm text-gray-300 placeholder-gray-600 backdrop-blur-sm transition-all duration-200 focus:border-cyber-cyan/30 focus:outline-none focus:ring-1 focus:ring-cyber-cyan/20"
        />
        <div className="absolute right-3 top-1/2 hidden -translate-y-1/2 items-center gap-1 rounded-md border border-white/5 px-1.5 py-0.5 text-[10px] text-gray-600 md:flex">
          ⌘K
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        {/* Notification bell */}
        <button className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/5 bg-white/5 text-gray-500 transition-all duration-200 hover:border-white/10 hover:text-gray-300">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-neon-pink text-[9px] font-bold text-white">
            3
          </span>
        </button>

        {/* Avatar */}
        <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyber-cyan to-cyber-blue text-xs font-bold text-white shadow-lg shadow-cyber-cyan/10 transition-all duration-200 hover:shadow-xl hover:shadow-cyber-cyan/20">
          {(user?.email?.[0] ?? '?').toUpperCase()}
        </button>
      </div>
    </header>
  )
}
