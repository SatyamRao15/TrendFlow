'use client'

import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Sparkles, Network } from 'lucide-react'

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="border-b border-white/20 backdrop-blur-md bg-white/40 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Network className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">TrendFlow</span>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-gray-700 hover:text-gray-900 transition">Home</button>
            <button className="text-gray-700 hover:text-gray-900 transition">About</button>
            <Button
              variant="ghost"
              onClick={() => navigate('/login')}
              className="text-gray-700"
            >
              Login
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Floating Badge */}
          <div className="flex justify-center mb-8">
            <div className="glass-card px-4 py-2 rounded-full inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-medium text-gray-700">Premium social experience</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Connect, Explore,{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Discover Smarter
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            TrendFlow brings you a modern social experience designed for discovery. Connect with people who share your interests and explore trending topics in real time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl px-8 text-lg"
              onClick={() => navigate('/signup')}
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 text-gray-700 hover:bg-white/50 rounded-xl px-8 text-lg"
              onClick={() => navigate('/login')}
            >
              Sign In
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Smart Discovery',
                description: 'AI-powered recommendations tailored to your interests',
                gradient: 'from-blue-400 to-blue-600'
              },
              {
                title: 'Trending Now',
                description: 'Stay updated with what&apos;s happening in real time',
                gradient: 'from-purple-400 to-purple-600'
              },
              {
                title: 'Connect & Share',
                description: 'Engage with a vibrant community of like-minded people',
                gradient: 'from-pink-400 to-pink-600'
              }
            ].map((feature, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl text-left hover:shadow-xl transition-shadow">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.gradient} mb-4`} />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/20 backdrop-blur-md bg-white/40 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600 text-sm">
          <p>&copy; 2024 TrendFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
