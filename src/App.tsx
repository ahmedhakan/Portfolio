import React from 'react';
import { Sparkles, Brain, Wand2, ChevronRight, Github } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-purple-500" />
              <span className="text-xl font-bold">Leonardo</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
              <a href="#pricing" className="hover:text-purple-400 transition-colors">Pricing</a>
              <a href="#community" className="hover:text-purple-400 transition-colors">Community</a>
              <button className="px-4 py-2 rounded-lg gradient-border hover:opacity-90 transition-opacity">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Create Amazing Art with
              <span className="gradient-text"> AI</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Generate stunning artwork in seconds using the power of artificial intelligence.
              Transform your ideas into reality with our advanced AI models.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center space-x-2 hover:opacity-90 transition-opacity">
                <span>Start Creating</span>
                <Sparkles className="w-5 h-5" />
              </button>
              <button className="px-8 py-3 gradient-border rounded-lg flex items-center space-x-2">
                <span>View Gallery</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-[#0D0D0E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Powerful Features</span>
            </h2>
            <p className="text-gray-400">Create stunning visuals with our advanced AI tools</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Wand2 className="w-6 h-6 text-purple-500" />,
                title: "AI Generation",
                description: "Generate unique artwork using state-of-the-art AI models"
              },
              {
                icon: <Sparkles className="w-6 h-6 text-purple-500" />,
                title: "Style Transfer",
                description: "Apply artistic styles to your images with one click"
              },
              {
                icon: <Github className="w-6 h-6 text-purple-500" />,
                title: "Community",
                description: "Share your creations and get inspired by others"
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-lg gradient-border">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;