import { Link } from 'react-router';
import { ArrowRight, Users, Building2, BookOpen, Mountain, Sparkles, TrendingUp, Zap, Star, Quote, ShoppingCart } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Input } from '@/app/components/ui/input';

export function HomePage() {
  return (
    <div className="bg-neutral-50">
      {/* Hero Section - Asymmetric Layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(255 255 255 / 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Video Background */}
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/90 via-emerald-900/70 to-emerald-950/60 z-10"></div>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover opacity-60"
            >
              <source src="/WhatsApp Video 2026-01-29 at 11.12.56.mp4#t=18" type="video/mp4" />
            </video>
          </div>
        </div>
        
        <div className="relative w-full pl-10 sm:pl-16 lg:pl-24 pr-4 sm:pr-6 lg:pr-8 py-20 md:py-32 z-20">
          <div className="max-w-6xl">
            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-[0.95] text-white">
              Where Strength <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">Meets Clarity</span><span className="text-amber-300">— Leadership Finds</span> 
              <span className="block text-emerald-300">Its True North</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-emerald-100 mb-12 leading-relaxed font-light max-w-3xl">
              At Anchorpoint Resilience Solutions (ARS), we empower individuals, leaders and organizations 
              to navigate uncertainty, strengthen resilience and lead with integrity. Our approach integrates 
              practical experience, governance insight and proven resilience frameworks to help clients withstand 
              disruption, make courageous decisions and thrive in complex environments.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/training">
                <Button size="lg" className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-emerald-950 font-bold px-8 py-6 text-lg shadow-xl shadow-amber-500/30 border-0">
                  Join a Workshop
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/books">
                <Button size="lg" variant="outline" className="border-2 border-white bg-white text-emerald-950 hover:bg-transparent hover:text-white backdrop-blur-sm px-8 py-6 text-lg font-semibold">
                  Explore Books
                  <BookOpen className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Diagonal Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-50 to-transparent"></div>
      </section>

      {/* Featured Workshops - Bento Grid Layout */}
      <section className="py-24 md:py-32 bg-neutral-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-700 rounded-full px-4 py-2 mb-6">
              <Mountain className="h-4 w-4" />
              <span className="text-sm font-bold uppercase tracking-wider">Transformational Experiences</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-neutral-900 mb-6 leading-tight">
              Workshops That<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Build Resilience
              </span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl">
              From mountain summits to boardrooms—experiential programs designed to create 
              lasting transformation through lived practice.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Personal Resilience - Large Card */}
            <div className="md:row-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-800 p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-emerald-900/40 backdrop-blur-sm rounded-3xl h-full overflow-hidden">
                {/* Image */}
                <div className="h-80 overflow-hidden">
                  <ImageWithFallback
                    src="/WhatsApp Image 2026-01-29 at 11.12.58.jpeg"
                    alt="Mountain climb experience"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Content */}
                <div className="p-8 md:p-10">
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
                    Personal Resilience &<br />Men's Development
                  </h3>
                  
                  <p className="text-emerald-100 mb-8 text-lg leading-relaxed">
                    Mountain climbs meet proven frameworks. Build authentic strength, emotional resilience, 
                    and discover your True North through <span className="font-bold text-amber-300">lived experiences</span>.
                  </p>

                  <div className="space-y-3 mb-8">
                    {[
                      "Experiential mountain expedition learning",
                      "Cracking the Code + Beyond the Peak frameworks",
                      "Purpose, endurance, True North discovery"
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-amber-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Mountain className="h-3.5 w-3.5 text-amber-300" />
                        </div>
                        <span className="text-emerald-50">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/training">
                    <Button className="w-full bg-amber-500 hover:bg-amber-600 text-emerald-950 font-bold py-6 text-lg group border-0 shadow-xl">
                      Register Now
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Corporate Training */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-800 to-neutral-900 p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-neutral-900/60 backdrop-blur-sm rounded-3xl h-full overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <ImageWithFallback
                    src="/conference_1.jpeg"
                    alt="Corporate training"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                    Corporate & SME Training
                  </h3>
                  
                  <p className="text-neutral-300 mb-6 leading-relaxed">
                    Governance frameworks forged in the trenches. Build organizational resilience 
                    that endures pressure and recovers from failure.
                  </p>

                  <Link to="/training">
                    <Button className="w-full bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold border-0">
                      Corporate Inquiry
                      <Building2 className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Events Calendar CTA */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-400 to-amber-600 p-8 md:p-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              
              <div className="relative">
                <TrendingUp className="h-12 w-12 text-emerald-950 mb-6" />
                <h3 className="text-3xl font-black text-emerald-950 mb-4">
                  View Full<br />Workshop Calendar
                </h3>
                <p className="text-emerald-900 mb-6 text-lg">
                  Upcoming mountain climbs, retreats, and corporate programs
                </p>
                <Link to="/events">
                  <Button variant="outline" className="border-2 border-emerald-950 text-emerald-950 hover:bg-emerald-950 hover:text-amber-400 font-bold">
                    Browse Events
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books - Modern Grid */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-neutral-900 via-emerald-950 to-neutral-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              Books That Build<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
                Unshakeable Character
              </span>
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Frameworks tested on mountains, proven in life—guides for navigating pressure, 
              finding purpose, and building lasting resilience.
            </p>
          </div>

          {/* Book Grid */}
          <div className="grid md:grid-cols-4 gap-6">
            {/* Unshaken */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 p-1">
              <div className="relative bg-emerald-900/30 backdrop-blur-sm rounded-3xl overflow-hidden h-full">
                <div className="relative h-80 overflow-hidden">
                  <ImageWithFallback
                    src="/Unshaken_1.jpeg"
                    alt="Unshaken Book Cover"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-amber-400 text-emerald-950 px-3 py-1 rounded-full text-xs font-bold">
                    PUBLISHED
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-white mb-2">
                    Unshaken
                  </h3>
                  <p className="text-sm text-amber-300 font-semibold mb-3">
                    Finding Your True North Through Life's Trials
                  </p>
                  <p className="text-emerald-100 text-sm mb-4 line-clamp-3">
                    A powerful guide to discovering unwavering strength and direction amidst life's 
                    greatest challenges.
                  </p>
                  <Link to="/books">
                    <Button className="w-full bg-amber-500 hover:bg-amber-600 text-emerald-950 font-bold border-0">
                      Purchase Book
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Cracking the Code */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-800 to-neutral-900 p-1">
              <div className="relative bg-neutral-900/60 backdrop-blur-sm rounded-3xl overflow-hidden h-full">
                <div className="relative h-80 overflow-hidden">
                  <ImageWithFallback
                    src="/Cracking the code_1.jpeg"
                    alt="Cracking the Code Book Cover"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-amber-400 text-neutral-950 px-3 py-1 rounded-full text-xs font-bold">
                    PUBLISHED
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-white mb-2">
                    Cracking the Code
                  </h3>
                  <p className="text-sm text-amber-300 font-semibold mb-3">
                    Unlocking True Masculine Strength
                  </p>
                  <p className="text-neutral-300 text-sm mb-4 line-clamp-3">
                    Redefining masculinity beyond cultural myths with authentic strength rooted 
                    in purpose.
                  </p>
                  <Link to="/books">
                    <Button className="w-full bg-amber-500 hover:bg-amber-600 text-neutral-950 font-bold border-0">
                      Purchase Book
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Beyond the Peak */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-700 to-teal-800 p-1">
              <div className="relative bg-emerald-900/40 backdrop-blur-sm rounded-3xl overflow-hidden h-full">
                <div className="relative h-80 overflow-hidden">
                  <ImageWithFallback
                    src="/Beyond the peaks cover-front.jpeg"
                    alt="Beyond the Peak book cover"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-amber-500 text-emerald-950 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                    MANUSCRIPT
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-white mb-2">
                    Beyond the Peak
                  </h3>
                  <p className="text-sm text-amber-300 font-semibold mb-3">
                    Lessons on Life and Resilience from Kenya's Mountains
                  </p>
                  <p className="text-emerald-100 text-sm mb-4 line-clamp-3">
                    Real stories from mountain expeditions that reveal profound truths about endurance, 
                    purpose, and the resilience required to summit—and descend—wisely.
                  </p>
                  <Link to="/books">
                    <Button variant="outline" className="w-full border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-emerald-950 font-bold">
                      Pre-order Soon
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Governance in the Trenches */}
            <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-800 to-neutral-900 p-1">
              <div className="relative bg-neutral-900/70 backdrop-blur-sm rounded-3xl overflow-hidden h-full">
                <div className="relative h-80 overflow-hidden">
                  <ImageWithFallback
                    src="/Governance in the Trenche - Book cover-front.png"
                    alt="Governance in the Trenches book cover"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-amber-500 text-neutral-950 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                    MANUSCRIPT
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-black text-white mb-2">
                    Governance in the Trenches
                  </h3>
                  <p className="text-sm text-amber-300 font-semibold mb-3">
                    Building Resilient leadership and stronger institutions
                  </p>
                  <p className="text-neutral-300 text-sm mb-4 line-clamp-3">
                    Hard-won lessons from SME failures and recoveries. A practical field guide for 
                    governance, crisis management, and organizational resilience.
                  </p>
                  <Link to="/books">
                    <Button variant="outline" className="w-full border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-neutral-950 font-bold">
                      Pre-order Soon
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* All Books CTA */}
          <div className="text-center mt-12">
            <Link to="/books">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-emerald-950 font-bold border-0 shadow-2xl px-8 py-6 text-lg"
              >
                Explore All Books & Manuscripts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials - Premium Cards */}
      <section className="py-24 md:py-32 bg-neutral-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-700 rounded-full px-4 py-2 mb-6">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm font-bold uppercase tracking-wider">Success Stories</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-neutral-900 mb-6 leading-tight">
              Transformations<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                That Last
              </span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Hear from individuals and organizations who've discovered resilience, clarity, 
              and sustainable performance through our frameworks.
            </p>
          </div>

          {/* Testimonial Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "The mountain climb workshop was unlike anything I'd experienced. It wasn't just physical—it challenged everything I thought I knew about my own resilience and purpose. I came down with clarity I'd been searching for years.",
                author: "David M.",
                role: "Business Executive",
                color: "emerald"
              },
              {
                quote: "Cracking the Code completely shifted how I view masculine strength. It's not about performance or pretense—it's about authentic character built through trials. This book and the workshop changed my life.",
                author: "John K.",
                role: "Workshop Participant",
                color: "amber"
              },
              {
                quote: "Our leadership team went through the corporate governance training, and it fundamentally transformed how we approach risk, failure, and recovery. These aren't theories—they're battle-tested frameworks that work.",
                author: "Sarah W.",
                role: "CEO, SME",
                color: "teal"
              }
            ].map((testimonial, index) => (
              <div key={index} className="group relative overflow-hidden rounded-3xl bg-white p-1 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  testimonial.color === 'emerald' ? 'from-emerald-500/20 to-transparent' :
                  testimonial.color === 'amber' ? 'from-amber-500/20 to-transparent' :
                  'from-teal-500/20 to-transparent'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative bg-white rounded-3xl p-8">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-6 ${
                    testimonial.color === 'emerald' ? 'bg-emerald-100' :
                    testimonial.color === 'amber' ? 'bg-amber-100' :
                    'bg-teal-100'
                  }`}>
                    <Quote className={`h-6 w-6 ${
                      testimonial.color === 'emerald' ? 'text-emerald-600' :
                      testimonial.color === 'amber' ? 'text-amber-600' :
                      'text-teal-600'
                    }`} />
                  </div>
                  
                  <p className="text-neutral-700 mb-8 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center border-t border-neutral-200 pt-6">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mr-4 ${
                      testimonial.color === 'emerald' ? 'bg-gradient-to-br from-emerald-600 to-emerald-700' :
                      testimonial.color === 'amber' ? 'bg-gradient-to-br from-amber-500 to-amber-600' :
                      'bg-gradient-to-br from-teal-600 to-teal-700'
                    }`}>
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-neutral-900">{testimonial.author}</p>
                      <p className="text-sm text-neutral-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup - Premium Design */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-950 text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-400/10 backdrop-blur-sm border border-amber-400/20 mb-8">
            <Mountain className="h-10 w-10 text-amber-400" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            Stay Connected<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
              On The Journey
            </span>
          </h2>
          
          <p className="text-xl text-emerald-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Get exclusive insights on resilience, leadership, mountain wisdom, and updates on 
            workshops, books, and events. Join our community committed to building True North.
          </p>
          
          <form action="https://formsubmit.co/afribraintechnologies@gmail.com" method="POST" className="max-w-xl mx-auto">
            <input type="hidden" name="_subject" value="New Newsletter Subscription - Anchorpoint Resilience" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="subscription_type" value="Homepage Newsletter" />
            
            <div className="flex flex-col sm:flex-row gap-4 bg-white/5 backdrop-blur-md p-2 rounded-2xl border border-white/10">
              <Input 
                type="email"
                name="email"
                required
                placeholder="Enter your email address" 
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-emerald-200 focus:bg-white/20 h-14 text-lg rounded-xl"
              />
              <Button 
                type="submit" 
                size="lg" 
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-emerald-950 font-bold border-0 shadow-xl h-14 px-8"
              >
                Subscribe
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <p className="text-sm text-emerald-200 mt-4 flex items-center justify-center gap-2">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              We respect your privacy. Unsubscribe anytime.
            </p>
          </form>
        </div>
      </section>

      {/* Final CTA - Bold & Compelling */}
      <section className="py-24 md:py-32 bg-neutral-950 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="/WhatsApp Image 2026-01-27 at 12.46.17.jpeg"
            alt="Mountain background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/80 via-neutral-950/90 to-neutral-950/95"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-400/10 backdrop-blur-md text-amber-300 rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-bold uppercase tracking-wider">Begin Your Transformation</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Ready to Build Your<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
              True North?
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-neutral-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Whether you're seeking personal transformation or organizational resilience, 
            the journey starts with a single step. Let's take it together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-emerald-950 font-bold border-0 shadow-2xl w-full sm:w-auto px-10 py-7 text-lg"
              >
                Work With Us
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
            <Link to="/about">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-emerald-950 font-bold w-full sm:w-auto px-10 py-7 text-lg"
              >
                Learn Our Story
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}