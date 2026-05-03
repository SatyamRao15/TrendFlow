'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Heart, MessageCircle, Share2, Sparkles, TrendingUp } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

const SAMPLE_POSTS = [
  {
    id: 1,
    author: 'Sarah Chen',
    handle: '@sarahchen',
    avatar: 'SC',
    content: 'Just launched my new design system! Super excited to see how the community reacts to it.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
    likes: 342,
    comments: 45,
    shares: 23,
    liked: false,
    badge: 'Trending'
  },
  {
    id: 2,
    author: 'Alex Rivera',
    handle: '@alexrivera',
    avatar: 'AR',
    content: 'Working on some exciting AI features. The possibilities are endless! 🚀',
    image: null,
    likes: 521,
    comments: 87,
    shares: 156,
    liked: false,
    badge: null
  },
  {
    id: 3,
    author: 'Jordan Kim',
    handle: '@jordankim',
    avatar: 'JK',
    content: 'Beautiful sunset over the mountains. Nature never ceases to amaze me. 🌅',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop',
    likes: 1203,
    comments: 234,
    shares: 445,
    liked: false,
    badge: 'Trending'
  }
]

const SUGGESTED_USERS = [
  { name: 'Emma Wilson', handle: '@emmaw', avatar: 'EW' },
  { name: 'Marcus Johnson', handle: '@marcusj', avatar: 'MJ' },
  { name: 'Lisa Zhang', handle: '@lisaz', avatar: 'LZ' },
  { name: 'David Brown', handle: '@davidb', avatar: 'DB' },
]

export default function HomePage() {
  const [posts, setPosts] = useState(SAMPLE_POSTS)
  const [postContent, setPostContent] = useState('')
  const user = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('user') || '{"name":"User"}') : { name: 'User' }

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
        : post
    ))
  }

  const handlePost = () => {
    if (postContent.trim()) {
      const newPost = {
        id: posts.length + 1,
        author: user.name,
        handle: '@' + user.name.toLowerCase(),
        avatar: user.name.substring(0, 2).toUpperCase(),
        content: postContent,
        image: null,
        likes: 0,
        comments: 0,
        shares: 0,
        liked: false,
        badge: null
      }
      setPosts([newPost, ...posts])
      setPostContent('')
    }
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Feed */}
      <div className="flex-1 ml-64 flex">
        {/* Center Feed */}
        <div className="flex-1 max-w-2xl border-r border-white/20 overflow-y-auto">
          {/* Post Creation Box */}
          <div className="sticky top-0 z-40 glass-card border-b border-white/20 rounded-none p-6">
            <div className="flex gap-4">
              <Avatar className="w-12 h-12">
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                  {user.name.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <textarea
                  placeholder="What's on your mind?"
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  className="w-full text-xl text-gray-900 placeholder:text-gray-500 bg-transparent resize-none outline-none mb-4"
                  rows={3}
                />
                <div className="flex justify-end">
                  <Button
                    onClick={handlePost}
                    disabled={!postContent.trim()}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl px-6 font-semibold disabled:opacity-50"
                  >
                    Post
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Posts */}
          {posts.map((post) => (
            <div key={post.id} className="glass-card border-b border-white/20 rounded-none p-6 hover:bg-white/60 transition-colors cursor-pointer">
              {/* Post Header */}
              <div className="flex gap-4 mb-4">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                    {post.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-900">{post.author}</span>
                    <span className="text-gray-500">{post.handle}</span>
                    {post.badge && (
                      <div className="ml-auto flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-orange-100 to-red-100">
                        <TrendingUp className="w-3 h-3 text-red-600" />
                        <span className="text-xs font-semibold text-red-600">{post.badge}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <p className="text-gray-900 mb-4 leading-normal">{post.content}</p>

              {/* Post Image */}
              {post.image && (
                <img
                  src={post.image}
                  alt="post"
                  className="w-full rounded-xl mb-4 object-cover max-h-80"
                />
              )}

              {/* Post Actions */}
              <div className="flex justify-between text-gray-500 pt-4 border-t border-white/20">
                <button className="flex items-center gap-2 hover:text-blue-600 transition group">
                  <div className="p-2 group-hover:bg-blue-100 rounded-full transition">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <span className="text-sm">{post.comments}</span>
                </button>
                <button className="flex items-center gap-2 hover:text-green-600 transition group">
                  <div className="p-2 group-hover:bg-green-100 rounded-full transition">
                    <Share2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm">{post.shares}</span>
                </button>
                <button
                  onClick={() => handleLike(post.id)}
                  className={`flex items-center gap-2 transition group ${post.liked ? 'text-red-600' : 'hover:text-red-600 text-gray-500'}`}
                >
                  <div className={`p-2 rounded-full transition ${post.liked ? 'bg-red-100' : 'group-hover:bg-red-100'}`}>
                    <Heart className={`w-4 h-4 ${post.liked ? 'fill-current' : ''}`} />
                  </div>
                  <span className="text-sm">{post.likes}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Panel */}
        <div className="w-80 p-6 overflow-y-auto">
          {/* Search */}
          <div className="mb-6">
            <Input
              placeholder="Search TrendFlow"
              className="glass-input rounded-xl h-10 px-4 placeholder:text-gray-400"
            />
          </div>

          {/* Activity Stats */}
          <div className="glass-card p-6 rounded-2xl mb-6">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-600" />
              Your Activity
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">Profile Views</p>
                <p className="text-2xl font-bold text-gray-900">234</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Engagement</p>
                <p className="text-2xl font-bold text-gray-900">1.2K</p>
              </div>
            </div>
          </div>

          {/* Suggested Users */}
          <div className="glass-card p-6 rounded-2xl mb-6">
            <h3 className="font-bold text-gray-900 mb-4">Suggested Users</h3>
            <div className="space-y-4">
              {SUGGESTED_USERS.map((suggestedUser) => (
                <div key={suggestedUser.handle} className="flex items-center justify-between">
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
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-white/50 rounded-lg h-8"
                  >
                    Follow
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Trending Topics */}
          <div className="glass-card p-6 rounded-2xl">
            <h3 className="font-bold text-gray-900 mb-4">Trending Topics</h3>
            <div className="space-y-3">
              {['#ReactJS', '#WebDesign', '#AI', '#StartupLife'].map((topic, idx) => (
                <button key={idx} className="w-full text-left p-3 rounded-lg hover:bg-white/60 transition">
                  <p className="text-sm font-semibold text-blue-600">{topic}</p>
                  <p className="text-xs text-gray-500">45.2K posts</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
