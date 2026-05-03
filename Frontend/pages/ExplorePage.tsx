'use client'

import Sidebar from '@/components/Sidebar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { TrendingUp, Search } from 'lucide-react'

const TRENDING_POSTS = [
  {
    id: 1,
    author: 'Tech Daily',
    handle: '@techdaily',
    avatar: 'TD',
    content: 'The future of AI: What 2024 has in store for developers',
    engagement: '45.2K',
    trend: 1,
  },
  {
    id: 2,
    author: 'Design Hub',
    handle: '@designhub',
    avatar: 'DH',
    content: 'Best UI/UX design trends for 2024',
    engagement: '38.9K',
    trend: 2,
  },
  {
    id: 3,
    author: 'Web Dev Weekly',
    handle: '@webdevweekly',
    avatar: 'WD',
    content: 'React 19 released! Here&apos;s what changed',
    engagement: '52.3K',
    trend: 3,
  },
]

const TRENDING_TOPICS = [
  { topic: '#ReactJS', posts: '125K', change: '+12%' },
  { topic: '#WebDesign', posts: '98K', change: '+8%' },
  { topic: '#AI', posts: '456K', change: '+45%' },
  { topic: '#StartupLife', posts: '78K', change: '+5%' },
  { topic: '#JavaScript', posts: '234K', change: '+18%' },
  { topic: '#DesignSystem', posts: '45K', change: '+22%' },
]

const SUGGESTED_USERS = [
  {
    name: 'Emily Rodriguez',
    handle: '@emilyrodriguez',
    avatar: 'ER',
    bio: 'Product designer at TechCorp',
    followers: '12.5K',
  },
  {
    name: 'James Wilson',
    handle: '@jameswilson',
    avatar: 'JW',
    bio: 'Full-stack developer & open source enthusiast',
    followers: '8.3K',
  },
  {
    name: 'Nina Patel',
    handle: '@ninapatel',
    avatar: 'NP',
    bio: 'AI researcher & writer',
    followers: '15.2K',
  },
  {
    name: 'Alex Zhang',
    handle: '@alexzhang',
    avatar: 'AZ',
    bio: 'Entrepreneur & investor',
    followers: '22.1K',
  },
]

export default function ExplorePage() {
  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Sidebar />

      <div className="flex-1 ml-64 flex max-w-7xl">
        {/* Left Column - Trending Posts */}
        <div className="flex-1 border-r border-white/20 overflow-y-auto">
          {/* Search Bar */}
          <div className="sticky top-0 z-40 glass-card border-b border-white/20 rounded-none p-6">
            <div className="flex items-center gap-2 glass-input rounded-xl px-4 h-12">
              <Search className="w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search posts, users, and topics"
                className="border-0 bg-transparent outline-none flex-1 placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Trending Section */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-red-600" />
              What&apos;s Trending
            </h2>

            <div className="space-y-4">
              {TRENDING_POSTS.map((post) => (
                <div
                  key={post.id}
                  className="glass-card p-6 rounded-2xl hover:bg-white/80 transition-colors cursor-pointer group"
                >
                  <div className="flex gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                        {post.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <p className="font-bold text-gray-900">{post.author}</p>
                          <p className="text-sm text-gray-500">{post.handle}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-red-600">#{post.trend} Trending</p>
                        </div>
                      </div>
                      <p className="text-gray-900 mb-3">{post.content}</p>
                      <p className="text-sm text-gray-500">{post.engagement} engagements</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Topics & Users */}
        <div className="w-80 overflow-y-auto p-6 space-y-6">
          {/* Trending Topics */}
          <div className="glass-card p-6 rounded-2xl">
            <h3 className="font-bold text-gray-900 mb-4">Trending Topics</h3>
            <div className="space-y-3">
              {TRENDING_TOPICS.map((item, idx) => (
                <button
                  key={idx}
                  className="w-full text-left p-3 rounded-lg hover:bg-white/60 transition-colors group"
                >
                  <div className="flex justify-between items-start mb-1">
                    <p className="font-bold text-blue-600 group-hover:text-blue-700">{item.topic}</p>
                    <span className={`text-xs font-semibold ${item.change.startsWith('+') ? 'text-green-600' : 'text-gray-600'}`}>
                      {item.change}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">{item.posts} posts</p>
                </button>
              ))}
            </div>
          </div>

          {/* Suggested Users */}
          <div className="glass-card p-6 rounded-2xl">
            <h3 className="font-bold text-gray-900 mb-4">Suggested Users</h3>
            <div className="space-y-4">
              {SUGGESTED_USERS.map((suggestedUser) => (
                <div key={suggestedUser.handle} className="pb-4 border-b border-white/20 last:border-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-xs">
                          {suggestedUser.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{suggestedUser.name}</p>
                        <p className="text-xs text-gray-500">{suggestedUser.handle}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 mb-3">{suggestedUser.bio}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-500">{suggestedUser.followers} followers</p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-300 text-gray-700 hover:bg-white/50 rounded-lg h-7 text-xs"
                    >
                      Follow
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Info Box */}
          <div className="glass-card p-4 rounded-2xl text-center">
            <p className="text-xs text-gray-600">
              Updated <span className="font-semibold">Just now</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
