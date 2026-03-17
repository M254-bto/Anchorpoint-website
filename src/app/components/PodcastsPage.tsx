import { Play, Headphones, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Link } from 'react-router';
import { Button } from '@/app/components/ui/button';

export function PodcastsPage() {
  return (
    <div className="bg-neutral-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 text-white min-h-[50vh] flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="/WhatsApp Image 2026-01-29 at 11.12.45.jpeg"
            alt="Podcast studio"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-900/80 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 rounded-full px-4 py-2 mb-6">
              <Headphones className="h-4 w-4" />
              <span className="text-sm font-bold uppercase tracking-wider">Podcasts</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Listen &<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
                Learn
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 leading-relaxed max-w-3xl">
              Video podcasts and conversations on resilience, leadership, and finding your True North.
            </p>
          </div>
        </div>
      </section>

      {/* Podcasts Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
              Featured <span className="text-emerald-700">Episodes</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Dive into conversations about resilience, governance, and personal growth.
            </p>
          </div>

          {/* Featured Video Podcast */}
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-amber-500 rounded-full p-2">
                  <Play className="h-4 w-4 text-white" />
                </div>
                <span className="text-amber-400 font-bold uppercase text-sm tracking-wider">Video Podcast</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                Resilience Conversations
              </h3>
              <p className="text-neutral-300 mb-6 text-lg">
                Join Zachary Kabera as he shares insights on building resilience, navigating life's challenges, 
                and discovering your true purpose.
              </p>
            </div>
            
            {/* Video Player */}
            <div className="relative bg-black">
              <video 
                controls 
                className="w-full aspect-video"
                poster="/WhatsApp Image 2026-01-29 at 11.12.58.jpeg"
              >
                <source src="/Video_2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            
            <div className="p-6 md:p-8 bg-neutral-800/50">
              <div className="flex flex-wrap items-center gap-4 text-neutral-400 text-sm">
                <span className="bg-emerald-900/50 text-emerald-300 px-3 py-1 rounded-full">
                  Resilience
                </span>
                <span className="bg-emerald-900/50 text-emerald-300 px-3 py-1 rounded-full">
                  Leadership
                </span>
                <span className="bg-emerald-900/50 text-emerald-300 px-3 py-1 rounded-full">
                  Personal Growth
                </span>
              </div>
            </div>
          </div>

          {/* Coming Soon Section */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-200">
              <div className="bg-emerald-100 rounded-full p-3 w-fit mb-4">
                <Headphones className="h-6 w-6 text-emerald-700" />
              </div>
              <h3 className="text-2xl font-black text-neutral-900 mb-4">More Episodes Coming Soon</h3>
              <p className="text-neutral-700 mb-6">
                Subscribe to stay updated on new podcast episodes covering topics like corporate governance, 
                mountain wisdom, and leadership in times of crisis.
              </p>
              <Link to="/contact">
                <Button className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-6 py-2 rounded-full">
                  Stay Updated
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl p-8 border border-amber-200">
              <div className="bg-amber-100 rounded-full p-3 w-fit mb-4">
                <Play className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="text-2xl font-black text-neutral-900 mb-4">Be a Guest</h3>
              <p className="text-neutral-700 mb-6">
                Have a story of resilience to share? We're looking for guests with compelling stories of 
                overcoming adversity and finding their True North.
              </p>
              <Link to="/contact">
                <Button className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-6 py-2 rounded-full">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
