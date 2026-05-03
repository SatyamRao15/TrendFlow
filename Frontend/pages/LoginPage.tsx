'use client'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Network, Sparkles } from 'lucide-react'

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Frontend-only auth: store token and redirect
    if (email && password) {
      localStorage.setItem('token', 'demo-token-' + Date.now())
      localStorage.setItem('user', JSON.stringify({ email, name: email.split('@')[0] }))
      navigate('/home')
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding & Gradient */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 p-12 flex-col justify-between relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        {/* Logo */}
        <div className="relative z-10">
          <div className="w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center mb-4">
            <Network className="w-6 h-6 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">TrendFlow</h1>
          <p className="text-white/80 text-lg">Connect, Explore, Discover Smarter</p>
        </div>

        {/* Bottom text */}
        <div className="relative z-10">
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-start gap-4">
              <Sparkles className="w-6 h-6 text-white flex-shrink-0 mt-1" />
              <div>
                <p className="text-white font-semibold mb-2">Join our community</p>
                <p className="text-white/80 text-sm">Discover trending topics and connect with people who share your interests.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 py-12">
        {/* Mobile Logo */}
        <div className="lg:hidden mb-8 flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Network className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">TrendFlow</span>
        </div>

        <div className="max-w-md w-full mx-auto">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h2>
          <p className="text-gray-600 mb-8">Sign in to your account to continue</p>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="glass-input rounded-xl h-12 px-4 placeholder:text-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="glass-input rounded-xl h-12 px-4 placeholder:text-gray-400"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl h-12 font-semibold text-base"
            >
              Sign In
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gradient-to-b from-white to-white text-gray-500">Or continue with</span>
            </div>
          </div>

          {/* Demo Account */}
          <div className="glass-card p-4 rounded-xl text-center">
            <p className="text-sm text-gray-600 mb-3">Demo account credentials:</p>
            <p className="text-sm font-mono text-gray-700 mb-2">Email: demo@example.com</p>
            <p className="text-sm font-mono text-gray-700">Password: demo123</p>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-gray-600 text-sm mt-8">
            Don&apos;t have an account?{' '}
            <button
              onClick={() => navigate('/signup')}
              className="font-semibold text-blue-600 hover:text-blue-700 transition"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
