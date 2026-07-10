import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useAuth } from '../lib/AuthContext'

export default function SignUpPage() {
  const { user, loading, signUp, signInWithProvider } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-deep-900">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-cyber-cyan border-t-transparent" />
      </div>
    )
  }

  if (user) {
    return <Navigate to="/dashboard" replace />
  }

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setSubmitting(true)
    const { error } = await signUp(email, password)
    if (error) {
      setError(error)
    } else {
      setSuccess(true)
    }
    setSubmitting(false)
  }

  const handleProviderSignIn = async (provider: 'google' | 'github') => {
    setError(null)
    await signInWithProvider(provider)
  }

  if (success) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-deep-900 px-4">
        <div className="w-full max-w-md rounded-2xl border border-white/10 bg-deep-800/80 p-8 text-center backdrop-blur-xl">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-cyber-cyan/10">
            <svg className="h-8 w-8 text-cyber-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="mb-2 text-xl font-bold text-white">Check your email</h2>
          <p className="text-sm text-gray-500">
            We sent a confirmation link to <strong className="text-gray-300">{email}</strong>. Click the link to activate your account.
          </p>
          <Link
            to="/login"
            className="mt-6 inline-block rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyber-cyan/25 transition-all duration-300 hover:shadow-xl hover:shadow-cyber-cyan/30"
          >
            Go to Sign In
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-deep-900 px-4">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-neon/5 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <Link to="/" className="mb-8 flex items-center justify-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyber-cyan to-cyber-blue text-sm font-bold text-white">
            S
          </span>
          <span className="text-lg font-bold tracking-tight">
            Site<span className="text-cyber-cyan">01</span>
          </span>
        </Link>

        {/* Card */}
        <div className="rounded-2xl border border-white/10 bg-deep-800/80 p-8 backdrop-blur-xl">
          <h1 className="mb-2 text-2xl font-bold text-white">Create account</h1>
          <p className="mb-8 text-sm text-gray-500">
            Get started with your free account
          </p>

          {/* Social login buttons */}
          <div className="mb-6 flex flex-col gap-3">
            <button
              onClick={() => handleProviderSignIn('google')}
              className="flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>
            <button
              onClick={() => handleProviderSignIn('github')}
              className="flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Continue with GitHub
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-deep-800 px-4 text-gray-500">or sign up with email</span>
            </div>
          </div>

          {/* Email form */}
          <form onSubmit={handleEmailSignUp} className="flex flex-col gap-4">
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-400">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all duration-300 focus:border-cyber-cyan/50 focus:ring-1 focus:ring-cyber-cyan/20"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-gray-400">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                minLength={6}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all duration-300 focus:border-cyber-cyan/50 focus:ring-1 focus:ring-cyber-cyan/20"
              />
            </div>

            <div>
              <label htmlFor="confirmPassword" className="mb-1.5 block text-sm font-medium text-gray-400">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                required
                minLength={6}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all duration-300 focus:border-cyber-cyan/50 focus:ring-1 focus:ring-cyber-cyan/20"
              />
            </div>

            {error && (
              <p className="text-sm text-red-400">{error}</p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="rounded-xl bg-gradient-to-r from-cyber-cyan to-cyber-blue px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyber-cyan/25 transition-all duration-300 hover:shadow-xl hover:shadow-cyber-cyan/30 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? 'Creating account...' : 'Create Account'}
            </button>
          </form>
        </div>

        {/* Login link */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{' '}
          <Link to="/login" className="font-medium text-cyber-cyan transition-colors hover:text-cyber-teal">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
