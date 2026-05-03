'use client'

import { useNavigate } from 'react-router-dom'
import { Network, Home, Compass, User, MessageCircle, Bell, Settings, LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Sidebar() {
  const navigate = useNavigate()
  const user = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user') || '{"name":"User"}') : { name: 'User' }

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/login')
  }

  const navItems = [
    { icon: Home, label: 'Home', path: '/home' },
    { icon: Compass, label: 'Explore', path: '/explore' },
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: MessageCircle, label: 'Messages', path: '#' },
    { icon: Bell, label: 'Notifications', path: '#' },
    { icon: Settings, label: 'Settings', path: '#' },
  ]

  return (
    <aside className="w-64 border-r border-white/20 glass-card rounded-none h-screen fixed left-0 top-0 flex flex-col p-6 overflow-y-auto">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <Network className="w-6 h-6 text-white" />
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">TrendFlow</span>
      </div>

      {/* Nav Items */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => navigate(item.path)}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-white/60 transition-colors"
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Logout Button */}
      <Button
        onClick={handleLogout}
        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl h-11 font-semibold"
      >
        <LogOut className="w-5 h-5" />
        Logout
      </Button>
    </aside>
  )
}
