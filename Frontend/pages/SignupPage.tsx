'use client'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Network, Sparkles } from 'lucide-react'

export default function SignupPage() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    // Frontend-only auth: store token and redirect
    if (name && email && password && password === confirmPassword) {
      localStorage.setItem('token', 'demo-token-' + Date.now())
      localStorage.setItem('user', JSON.stringify({ email, name }))
      navigate('/home')
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding & Gradient */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 p-12 flex-col justify-between relative overflow-hidden">
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
                <p className="text-white font-semibold mb-2">Start your journey</p>
                <p className="text-white/80 text-sm">Join thousands of people discovering trending content and making meaningful connections.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Signup Form */}
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
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Create your account</h2>
          <p className="text-gray-600 mb-8">Join TrendFlow and start discovering today</p>

          {/* Form */}
          <form onSubmit={handleSignup} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full name</label>
              <Input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="glass-input rounded-xl h-12 px-4 placeholder:text-gray-400"
              />
            </div>

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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm password</label>
              <Input
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="glass-input rounded-xl h-12 px-4 placeholder:text-gray-400"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl h-12 font-semibold text-base"
            >
              Create Account
            </Button>
          </form>

          {/* Terms */}
          <p className="text-center text-gray-600 text-xs mt-6">
            By signing up, you agree to our Terms of Service and Privacy Policy
          </p>

          {/* Sign In Link */}
          <p className="text-center text-gray-600 text-sm mt-8">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="font-semibold text-blue-600 hover:text-blue-700 transition"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
