import { Calendar, Mountain, Zap, Users, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Link } from 'react-router';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';

export function EventsPage() {
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
            src="/WhatsApp Image 2026-01-29 at 11.12.59.jpeg"
            alt="Mountain climb event"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-900/80 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 rounded-full px-4 py-2 mb-6">
              <Calendar className="h-4 w-4" />
              <span className="text-sm font-bold uppercase tracking-wider">Events & Workshops</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Workshops That<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
                Build Resilience
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 leading-relaxed max-w-3xl">
              Mountain climbs, retreats, and corporate programs designed to strengthen resilience, leadership, and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
              Events Coming <span className="text-emerald-700">Soon</span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-8">
              We're designing transformative experiences that combine mountain wisdom, corporate training, and personal growth.
            </p>
          </div>

          {/* Empty State with Featured Services */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Mountain Climbs */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center mb-6">
                <Mountain className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-black text-emerald-950 mb-3">
                Mountain Climb Experiences
              </h3>
              <p className="text-emerald-700 leading-relaxed mb-4">
                Summit Kenya's mountains while learning practical lessons in resilience, leadership, and endurance. Groups and corporate teams welcome.
              </p>
              <div className="pt-4 border-t border-emerald-200">
                <p className="text-sm font-bold text-emerald-600 uppercase tracking-wider">Coming Soon</p>
              </div>
            </div>

            {/* Retreats */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-black text-amber-950 mb-3">
                Resilience Retreats
              </h3>
              <p className="text-amber-700 leading-relaxed mb-4">
                Immersive multi-day programs combining training, reflection, and lived experiences for individuals and teams seeking transformation.
              </p>
              <div className="pt-4 border-t border-amber-200">
                <p className="text-sm font-bold text-amber-600 uppercase tracking-wider">Coming Soon</p>
              </div>
            </div>

            {/* Corporate Programs */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 border border-teal-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-black text-teal-950 mb-3">
                Corporate Training
              </h3>
              <p className="text-teal-700 leading-relaxed mb-4">
                Custom governance, leadership development, and organizational resilience programs tailored to your company's needs.
              </p>
              <div className="pt-4 border-t border-teal-200">
                <p className="text-sm font-bold text-teal-600 uppercase tracking-wider">Coming Soon</p>
              </div>
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="bg-gradient-to-br from-emerald-900 to-teal-900 rounded-3xl p-8 md:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-black mb-4">
                Be First to Know
              </h3>
              <p className="text-lg text-emerald-100 mb-8">
                Subscribe to catch event announcements, early registration, and exclusive previews of upcoming workshops and retreats.
              </p>
              
              <form action="https://formsubmit.co/afribraintechnologies@gmail.com" method="POST" className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input type="hidden" name="_subject" value="Events Calendar Sign-up - Anchorpoint Resilience" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="subscription_type" value="Events Calendar" />
                
                <Input 
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email" 
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-emerald-200 focus:bg-white/20 h-12 rounded-xl"
                />
                <Button type="submit" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-emerald-950 font-bold border-0 shadow-xl h-12 px-6">
                  Notify Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-24 md:py-32 bg-neutral-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              What Our Events <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">Deliver</span>
            </h2>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Every experience is carefully designed with intentional outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Lived Learning",
                description: "Move beyond theory. Our mountain climbs and retreats create real experiences that embed resilience into your practice."
              },
              {
                title: "Community & Connection",
                description: "Build relationships with like-minded leaders and professionals who are committed to growth and resilience."
              },
              {
                title: "Practical Tools",
                description: "Leave with frameworks, strategies, and practices you can apply immediately in your work and leadership."
              },
              {
                title: "Personal Transformation",
                description: "Challenge yourself in new environments. Growth happens when we push beyond our comfort zones."
              }
            ].map((item) => (
              <div key={item.title} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-amber-400/50 transition-colors">
                <h3 className="text-2xl font-black text-white mb-3">{item.title}</h3>
                <p className="text-emerald-100 text-lg leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Questions About Upcoming Events?
          </h2>
          <p className="text-xl text-emerald-50 mb-10">
            Reach out to discuss your training needs, mountain climb aspirations, or corporate program requirements.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50 font-black border-0 px-10 py-7 text-lg shadow-xl">
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
