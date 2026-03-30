import { Link } from 'react-router';
import { BookOpen, ArrowRight, Mountain, Building2, CheckCircle2, ShoppingCart, Eye, Sparkles } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function BooksPage() {
  return (
    <div className="bg-neutral-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 text-white min-h-[70vh] flex items-center overflow-hidden">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        {/* Image Overlay */}
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="/Unshaken_Launch.jpeg"
            alt="Book launch event"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9]">
              Books &<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
                Manuscripts
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 leading-relaxed mb-10 max-w-3xl">
              Deep insights on resilience, masculinity, governance, and mountain wisdom—<span className="text-amber-300 font-bold">written from lived experiences</span>, anchored in research, designed to challenge and transform.
            </p>
          </div>
        </div>
      </section>

      {/* Published Books */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
              Published Books
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Available now—books that have already transformed lives and organizations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Unshaken */}
            <Card className="overflow-hidden border-2 border-emerald-200 hover:border-amber-400 hover:shadow-2xl transition-all duration-300 bg-white">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-full min-h-[350px]">
                  <ImageWithFallback
                    src="/Unshaken_1.jpeg"
                    alt="Unshaken Book Cover"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1.5 rounded-full text-xs font-black shadow-lg">
                    PUBLISHED
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-neutral-900 mb-2">
                      Unshaken
                    </h3>
                    <p className="text-base text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 font-black mb-4">
                      Finding Your True North Through Life's Trials
                    </p>
                    
                    <p className="text-neutral-700 mb-4 leading-relaxed text-sm">
                      A powerful guide to discovering unwavering strength and direction amidst 
                      life's greatest challenges. Learn to remain grounded when everything around 
                      you shifts.
                    </p>

                    <h4 className="font-black text-neutral-900 mb-2 text-sm">What You'll Learn:</h4>
                    <ul className="space-y-2 mb-6">
                      {[
                        "How to find your True North in trials",
                        "Building unshakable inner strength",
                        "Navigating life's uncertainties with clarity",
                        "Resilience as a practiced discipline"
                      ].map((item) => (
                        <li key={item} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-neutral-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <Link to="/contact">
                      <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black border-0 py-6">
                        <ShoppingCart className="mr-2 h-5 w-5" />
                        Purchase Book
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Cracking the Code */}
            <Card className="overflow-hidden border-2 border-emerald-200 hover:border-amber-400 hover:shadow-2xl transition-all duration-300 bg-white">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-full min-h-[350px]">
                  <ImageWithFallback
                    src="/Cracking the code_2.jpeg"
                    alt="Cracking the Code Book Cover"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1.5 rounded-full text-xs font-black shadow-lg">
                    PUBLISHED
                  </div>
                </div>
                <CardContent className="p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black text-neutral-900 mb-2">
                      Cracking the Code
                    </h3>
                    <p className="text-base text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 font-black mb-4">
                      Unlocking True Masculine Strength
                    </p>
                    
                    <p className="text-neutral-700 mb-4 leading-relaxed text-sm">
                      Redefining masculinity beyond cultural myths and stereotypes. Discover 
                      authentic strength rooted in purpose, emotional intelligence, and 
                      resilient character—not performance or pretense.
                    </p>

                    <h4 className="font-black text-neutral-900 mb-2 text-sm">What You'll Learn:</h4>
                    <ul className="space-y-2 mb-6">
                      {[
                        "True masculine strength beyond culture",
                        "Emotional resilience for men",
                        "Purpose-driven identity formation",
                        "Building authentic character"
                      ].map((item) => (
                        <li key={item} className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-neutral-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <Link to="/contact">
                      <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black border-0 py-4 text-sm">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Purchase Book
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Manuscripts */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-neutral-900 via-emerald-950 to-teal-950 text-white relative overflow-hidden">
        {/* Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Upcoming<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Manuscripts
              </span>
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              New works in progress—be the first to know when they launch
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Beyond the Peak */}
            <Card className="overflow-hidden border-2 border-amber-400/30 hover:shadow-2xl transition-all duration-300 bg-white/10 backdrop-blur-md">
              <div className="relative h-60">
                <ImageWithFallback
                  src="/Beyond the peaks cover-front.jpeg"
                  alt="Beyond the Peak book cover"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-amber-500 text-emerald-950 px-3 py-1.5 rounded-full text-xs font-black animate-pulse shadow-lg">
                  MANUSCRIPT
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Mountain className="h-8 w-8 text-amber-400 mb-2" />
                  <h3 className="text-2xl md:text-3xl font-black mb-1 text-white">
                    Beyond the Peak
                  </h3>
                  <p className="text-base text-amber-200 font-black">
                    Lessons on Life and Resilience from Kenya's Mountains
                  </p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-emerald-100 mb-4 leading-relaxed text-sm">
                  Real stories from mountain expeditions that reveal profound truths about 
                  endurance, purpose, and the resilience required to summit—and descend—wisely. 
                  This isn't a climbing manual; it's a field guide to living with purpose 
                  and navigating life's peaks and valleys.
                </p>

                <h4 className="font-black mb-2 text-sm">Core Themes:</h4>
                <ul className="space-y-2 mb-6">
                  {[
                    "Mountain lessons applied to life",
                    "Purpose and endurance under pressure",
                    "Finding True North through lived practice",
                    "Resilience as experiential learning"
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <Mountain className="h-4 w-4 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-emerald-100 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <div>
                  <Link to="/contact">
                    <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-emerald-950 font-black border-0 py-4 text-sm">
                      Pre-order Interest (Coming Soon)
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Governance in the Trenches */}
            <Card className="overflow-hidden border-2 border-amber-400/30 hover:shadow-2xl transition-all duration-300 bg-white/10 backdrop-blur-md">
              <div className="relative h-60">
                <ImageWithFallback
                  src="/Governance in the Trenche - Book cover-front.png"
                  alt="Governance in the Trenches book cover"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-amber-500 text-emerald-950 px-3 py-1.5 rounded-full text-xs font-black animate-pulse shadow-lg">
                  MANUSCRIPT
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Building2 className="h-8 w-8 text-amber-400 mb-2" />
                  <h3 className="text-2xl md:text-3xl font-black mb-1 text-white">
                    Governance in the Trenches
                  </h3>
                  <p className="text-base text-amber-200 font-black">
                    Building Resilient leadership and stronger institutions
                  </p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-emerald-100 mb-4 leading-relaxed text-sm">
                  Hard-won lessons from real SME failures and recoveries. This is not theory—it's 
                  a practical field guide for governance, crisis management, and organizational 
                  resilience written from the trenches of business failure and recovery.
                </p>

                <h4 className="font-black mb-2 text-sm">Core Themes:</h4>
                <ul className="space-y-2 mb-6">
                  {[
                    "Corporate governance for MSMEs under pressure",
                    "Leadership during business failure",
                    "Failure recovery frameworks and systems",
                    "Building resilient organizational structures"
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <Building2 className="h-4 w-4 text-amber-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-emerald-100 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <div>
                  <Link to="/contact">
                    <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-emerald-950 font-black border-0 py-4 text-sm">
                      Pre-order Interest (Coming Soon)
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
            Want to<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              Stay Updated?
            </span>
          </h2>
          <p className="text-xl text-neutral-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Be the first to know when new books launch, get exclusive sample chapters, and 
            receive insights on resilience, leadership, and mountain wisdom.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black border-0 px-10 py-7 text-lg">
                Subscribe to Updates
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/training">
              <Button size="lg" variant="outline" className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white font-black px-10 py-7 text-lg">
                Explore Workshops
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}