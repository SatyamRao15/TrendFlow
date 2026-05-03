'use client'

import Sidebar from '@/components/Sidebar'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { MapPin, Link as LinkIcon, Calendar } from 'lucide-react'

const USER_POSTS = [
  {
    id: 1,
    content: 'Building amazing products with TrendFlow!',
    likes: 234,
    comments: 45,
  },
  {
    id: 2,
    content: 'Just hit 1K followers! Thanks for the support everyone 🙏',
    likes: 567,
    comments: 89,
  },
  {
    id: 3,
    content: 'Excited to announce new features coming next week',
    likes: 345,
    comments: 67,
  },
]

export default function ProfilePage() {
  const user = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user') || '{"name":"User","email":"user@example.com"}') : { name: 'User', email: 'user@example.com' }

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Sidebar />

      <div className="flex-1 ml-64 overflow-y-auto">
        {/* Cover Image */}
        <div className="h-48 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 relative">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute top-5 left-5 w-64 h-64 bg-white rounded-full blur-3xl" />
          </div>
        </div>

        {/* Profile Content */}
        <div className="max-w-2xl mx-auto px-6">
          {/* Profile Header */}
          <div className="flex gap-6 -mt-24 mb-8 relative z-10">
            <Avatar className="w-32 h-32 border-4 border-white shadow-lg">
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-4xl">
                {user.name.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="pt-8">
              <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-gray-600 mb-4">@{user.name.toLowerCase().replace(' ', '')}</p>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl px-8 font-semibold">
                Edit Profile
              </Button>
            </div>
          </div>

          {/* Bio Section */}
          <div className="glass-card p-6 rounded-2xl mb-6">
            <p className="text-gray-700 text-lg mb-6">
              Passionate about design, technology, and connecting with amazing people. Always learning, always growing. 🚀
            </p>

            <div className="grid grid-cols-3 gap-4 text-center py-4 border-t border-white/20 border-b border-white/20">
              <div>
                <p className="text-2xl font-bold text-gray-900">1.2K</p>
                <p className="text-sm text-gray-600">Posts</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">5.4K</p>
                <p className="text-sm text-gray-600">Followers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">892</p>
                <p className="text-sm text-gray-600">Following</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <LinkIcon className="w-4 h-4" />
                <span>yourwebsite.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Joined March 2024</span>
              </div>
            </div>
          </div>

          {/* User Posts */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Posts</h2>
            {USER_POSTS.map((post) => (
              <div key={post.id} className="glass-card p-6 rounded-2xl mb-4 hover:bg-white/80 transition-colors cursor-pointer">
                <p className="text-gray-900 mb-4">{post.content}</p>
                <div className="flex gap-6 text-gray-600 text-sm">
                  <span>💬 {post.comments} comments</span>
                  <span>❤️ {post.likes} likes</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
