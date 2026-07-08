import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  {
    section: 'Main',
    items: [
      { label: 'Overview', href: '/dashboard', icon: '◉' },
      { label: 'Projects', href: '/dashboard/projects', icon: '◇' },
      { label: 'Deployments', href: '/dashboard/deployments', icon: '○' },
    ],
  },
  {
    section: 'Monitor',
    items: [
      { label: 'Analytics', href: '/dashboard/analytics', icon: '▤' },
      { label: 'Logs', href: '/dashboard/logs', icon: '☰' },
      { label: 'Metrics', href: '/dashboard/metrics', icon: '◈' },
    ],
  },
  {
    section: 'Team',
    items: [
      { label: 'Members', href: '/dashboard/members', icon: '☷' },
      { label: 'Settings', href: '/dashboard/settings', icon: '⚙' },
    ],
  },
]

export default function Sidebar() {
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={`fixed left-0 top-0 z-40 flex h-full flex-col border-r border-white/5 bg-deep-800/90 backdrop-blur-xl transition-all duration-300 ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      {/* Logo */}
      <div className={`flex h-16 items-center border-b border-white/5 px-4 ${collapsed ? 'justify-center' : 'gap-3'}`}>
        <Link to="/" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyber-cyan to-cyber-blue text-sm font-bold text-white shadow-lg shadow-cyber-cyan/20">
          S
        </Link>
        {!collapsed && (
          <span className="text-lg font-bold tracking-tight">
            Site<span className="text-cyber-cyan">01</span>
          </span>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-6 scrollbar-hide">
        {navItems.map((group) => (
          <div key={group.section} className="mb-6">
            {!collapsed && (
              <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-600">
                {group.section}
              </p>
            )}
            <ul className="space-y-1">
              {group.items.map((item) => {
                const isActive = location.pathname === item.href
                return (
                  <li key={item.label}>
                    <Link
                      to={item.href}
                      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-cyber-cyan/10 text-cyber-cyan shadow-sm shadow-cyber-cyan/5'
                          : 'text-gray-500 hover:bg-white/5 hover:text-gray-300'
                      } ${collapsed ? 'justify-center' : ''}`}
                      title={collapsed ? item.label : undefined}
                    >
                      <span className="text-lg">{item.icon}</span>
                      {!collapsed && <span>{item.label}</span>}
                      {isActive && !collapsed && (
                        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-cyber-cyan" />
                      )}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="mx-3 mb-2 flex items-center justify-center rounded-xl border border-white/5 py-2 text-xs text-gray-600 transition-colors duration-200 hover:border-white/10 hover:text-gray-400"
      >
        {collapsed ? '→' : '←'}
      </button>

      {/* User profile */}
      <div className={`border-t border-white/5 p-4 ${collapsed ? 'flex justify-center' : ''}`}>
        <div className={`flex items-center gap-3 ${collapsed ? '' : 'w-full'}`}>
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyber-cyan to-cyber-blue text-[10px] font-bold text-white">
            JD
          </div>
          {!collapsed && (
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-gray-300">John Doe</p>
              <p className="truncate text-xs text-gray-600">john@site01.dev</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}
