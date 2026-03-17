import { Mountain, Calendar, User, ArrowRight, Heart, Quote } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Link } from 'react-router';
import { Button } from '@/app/components/ui/button';

export function BlogsPage() {
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
            alt="Mountain journey"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-900/80 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 rounded-full px-4 py-2 mb-6">
              <Mountain className="h-4 w-4" />
              <span className="text-sm font-bold uppercase tracking-wider">Blog</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Stories of<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
                Resilience
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 leading-relaxed max-w-3xl">
              Insights, reflections, and lessons learned on the journey toward resilience and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Blog Post */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Blog Header */}
          <article className="prose prose-lg max-w-none">
            <div className="mb-12">
              <div className="flex items-center gap-4 text-neutral-500 mb-6">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span className="text-sm font-medium">Zachary Kabera</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">March 2026</span>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6 leading-tight">
                My Resilience Journey: Beyond the Valleys, Toward the Peak
              </h1>
              
              <div className="relative overflow-hidden rounded-3xl shadow-xl mb-12">
                <ImageWithFallback
                  src="/WhatsApp Image 2026-01-29 at 11.12.58.jpeg"
                  alt="Mountain climbing representing resilience journey"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

            {/* Blog Content */}
            <div className="space-y-8 text-neutral-700">
              <p className="text-xl leading-relaxed font-medium text-neutral-800">
                Resilience did not begin for me in boardrooms, books, or training halls. It began on long, 
                lonely paths—often muddy, dangerous and uncertain.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
                <Quote className="h-8 w-8 text-amber-400 mb-4" />
                <p className="text-lg italic text-amber-900 font-medium">
                  "Those journeys, repeated almost daily for ten months, quietly shaped something deep within me: 
                  discipline, responsibility, courage and faith."
                </p>
              </div>

              <h2 className="text-3xl font-black text-neutral-900 pt-8">The Early Years</h2>
              
              <p className="text-lg leading-relaxed">
                At just ten years old, I learned what endurance meant. My only brother, living with epilepsy and 
                speech challenges, suffered severe burns and spent ten months in a hospital twelve kilometres from 
                our rural home. With impassable roads, no transport and little money, someone had to walk. That 
                someone was me.
              </p>

              <p className="text-lg leading-relaxed">
                Every afternoon after school, I changed out of my uniform and walked—crossing swollen rivers, 
                skirting wild animals and pressing on through relentless rain. I walked not because it was easy, 
                but because love demanded it. Looking back, those were my first climbs—long before I ever touched 
                a mountain.
              </p>

              <h2 className="text-3xl font-black text-neutral-900 pt-8">Life's Trials</h2>

              <p className="text-lg leading-relaxed">
                Life did not get easier with age. While still at university, my father passed away suddenly. The 
                ground beneath me shifted. I had no hand to guide me into manhood, marriage, or leadership. Yet 
                the responsibility to steady the family remained. I learned to walk forward carrying both grief 
                and duty—trusting God to become the Father I needed most.
              </p>

              <p className="text-lg leading-relaxed">
                Marriage brought love, but also unexpected trials. Employment came with doors opening and abruptly 
                closing. Businesses failed. Careers ended without warning. Then came losses no parent or spouse is 
                ever prepared for—the passing of our daughter Carol in 2010 after a battle with kidney failure, 
                and later, the loss of my beloved wife Esther in 2015 after years of illness.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-xl my-8">
                <p className="text-lg font-bold text-emerald-900">
                  Those seasons brought me to rock bottom. I was broken, grieving and suddenly both father and 
                  mother to three young people who still needed hope. I had every reason to stop. But resilience 
                  is not the absence of pain—it is choosing to rise, even when your heart is shattered.
                </p>
              </div>

              <h2 className="text-3xl font-black text-neutral-900 pt-8">Why Mountains Matter to Me</h2>

              <p className="text-lg leading-relaxed">
                Somewhere along this journey, I found myself drawn to mountains. Not as an escape—but as a mirror.
              </p>

              <p className="text-lg leading-relaxed">
                Mountains do not flatter you. They expose your limits, demand preparation, punish shortcuts and 
                reward perseverance. Every hike reminds me that progress is step by step, that storms pass, that 
                rest matters and that the summit is never reached accidentally.
              </p>

              <p className="text-lg leading-relaxed">
                On Kenya's mountains, I process grief, recalibrate purpose and rediscover my True North. Each 
                climb reflects life itself: valleys of doubt, steep ascents of effort, moments when quitting feels 
                reasonable—and the quiet triumph of pressing on anyway.
              </p>

              <p className="text-lg leading-relaxed">
                Mountain hiking has become both my spiritual discipline and my resilience classroom. What the body 
                learns on the trail, the mind and soul remember in life.
              </p>

              <h2 className="text-3xl font-black text-neutral-900 pt-8">From Lived Experiences to Purpose</h2>

              <p className="text-lg leading-relaxed">
                Anchorpoint Resilience Solutions was born from these lived realities—not theory, not slogans, but 
                scars that healed into strength. Whether I am mentoring men, guiding leaders, training organizations, 
                or walking alongside others through adversity, I draw from a journey shaped by loss, faith, endurance 
                and hope.
              </p>

              <div className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white p-8 rounded-3xl my-12">
                <Heart className="h-10 w-10 text-amber-400 mb-4" />
                <h3 className="text-2xl font-black mb-4">What I Believe</h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 font-black">•</span>
                    <span>Resilience can be built.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 font-black">•</span>
                    <span>Purpose can be rediscovered.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 font-black">•</span>
                    <span>No valley is final—and no mountain climbed is wasted.</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed">
                My story is not about perfection. It is about perseverance.
              </p>

              <p className="text-xl leading-relaxed font-bold text-neutral-900">
                And if my journey teaches anything, it is this: You can lose much and still rise. You can grieve 
                deeply and still lead. You can be shaken—and yet remain unshaken.
              </p>

              <p className="text-2xl font-black text-emerald-800 mt-8">
                Welcome to the climb.
              </p>
            </div>
          </article>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 md:p-12 border border-emerald-200">
            <h3 className="text-2xl font-black text-neutral-900 mb-4">
              Join the Journey
            </h3>
            <p className="text-lg text-neutral-700 mb-6">
              Join me—on the trail, in the classroom, or through lived stories—as we build resilience and 
              rediscover our True North.
            </p>
            <Link to="/contact">
              <Button className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold px-8 py-3 rounded-full">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
