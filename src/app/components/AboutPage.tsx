import { Mountain, Target, Compass, Shield, Heart, TrendingUp, Users2, Building2, BookOpen, ArrowRight, Award, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Button } from '@/app/components/ui/button';
import { Link } from 'react-router';

export function AboutPage() {
  return (
    <div className="bg-neutral-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 text-white min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="/WhatsApp Image 2026-01-29 at 11.12.58.jpeg"
            alt="Mountain climb representing resilience journey"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-900/80 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              About the Founder:<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
                A Resilience Journey
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 leading-relaxed max-w-3xl">
              Anchorpoint Resilience Solutions was born not from theory alone, but from the lived 
              experience of navigating failure, rediscovering purpose, and finding strength through 
              Kenya's mountains and life's most demanding trials.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Resilience Journey - The Story */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-700 rounded-full px-4 py-2 mb-6">
              <Heart className="h-4 w-4" />
              <span className="text-sm font-bold uppercase tracking-wider">The Story Behind ARS</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-neutral-900 mb-6 leading-tight">
              Beyond the Valleys,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Toward the Peak
              </span>
            </h2>
          </div>

          {/* Early Years */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-black text-neutral-900 mb-6">
                Where It Began: The Early Climbs
              </h3>
              
              <div className="space-y-4 text-neutral-700 leading-relaxed text-lg">
                <p className="font-semibold text-emerald-900">
                  Resilience did not begin for me in boardrooms, books, or training halls. 
                  It began on long, lonely paths—often muddy, dangerous and uncertain.
                </p>
                <p>
                  At just ten years old, I learned what endurance meant. My only brother, living with epilepsy 
                  and speech challenges, suffered severe burns and spent ten months in a hospital twelve 
                  kilometres from our rural home. With impassable roads, no transport and little money, 
                  someone had to walk. That someone was me.
                </p>
                <p>
                  Every afternoon after school, I changed out of my uniform and walked—crossing swollen rivers, 
                  skirting wild animals and pressing on through relentless rain. I walked not because it was easy, 
                  but because love demanded it.
                </p>
                <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-xl">
                  <p className="font-bold text-emerald-900 italic">
                    "Those journeys, repeated almost daily for ten months, quietly shaped something deep within me: 
                    discipline, responsibility, courage and faith. Those were my first climbs—long before I ever 
                    touched a mountain."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <ImageWithFallback
                  src="/WhatsApp Image 2026-01-27 at 12.46.17.jpeg"
                  alt="Mountain journey"
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Valleys of Loss */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group">
                <ImageWithFallback
                  src="/WhatsApp Image 2026-01-29 at 11.12.59.jpeg"
                  alt="Mountain climb perseverance"
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 to-transparent"></div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-black text-neutral-900 mb-6">
                The Valleys: When Everything Shifted
              </h3>
              
              <div className="space-y-4 text-neutral-700 leading-relaxed text-lg">
                <p>
                  Life did not get easier with age. While still at university, my father passed away suddenly. 
                  The ground beneath me shifted. I had no hand to guide me into manhood, marriage, or leadership. 
                  Yet the responsibility to steady the family remained.
                </p>
                <p>
                  Marriage brought love, but also unexpected trials. Employment came with doors opening and 
                  abruptly closing. Businesses failed. Careers ended without warning.
                </p>
                <p className="font-semibold text-neutral-900">
                  Then came losses no parent or spouse is ever prepared for—the passing of our daughter Carol 
                  in 2010 after a battle with kidney failure, and later, the loss of my beloved wife Esther 
                  in 2015 after years of illness.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-xl">
                  <p className="font-bold text-amber-900 italic">
                    "Those seasons brought me to rock bottom. I was broken, grieving and suddenly both father 
                    and mother to three young people who still needed hope. I had every reason to stop. But 
                    resilience is not the absence of pain—it is choosing to rise, even when your heart is shattered."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Mountains Matter */}
          <div className="bg-gradient-to-br from-emerald-900 to-teal-900 rounded-3xl p-12 md:p-16 text-white">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <Mountain className="h-16 w-16 text-amber-400 mx-auto mb-6" />
                <h3 className="text-4xl font-black mb-4">
                  Why Mountains Matter to Me
                </h3>
                <p className="text-xl text-emerald-100 italic">
                  Not as an escape—but as a mirror.
                </p>
              </div>

              <div className="space-y-6 text-emerald-100 leading-relaxed text-lg">
                <p>
                  Mountains do not flatter you. They expose your limits, demand preparation, punish shortcuts 
                  and reward perseverance. Every hike reminds me that progress is step by step, that storms pass, 
                  that rest matters and that the summit is never reached accidentally.
                </p>
                <p>
                  On Kenya's mountains, I process grief, recalibrate purpose and rediscover my True North. 
                  Each climb reflects life itself: valleys of doubt, steep ascents of effort, moments when 
                  quitting feels reasonable—and the quiet triumph of pressing on anyway.
                </p>
                <div className="bg-amber-400/10 backdrop-blur-md border border-amber-400/20 rounded-2xl p-8 mt-8">
                  <p className="font-bold text-amber-300 text-xl text-center">
                    "Mountain hiking has become both my spiritual discipline and my resilience classroom. 
                    What the body learns on the trail, the mind and soul remember in life."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From Experience to Purpose */}
      <section className="py-24 md:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-700 rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-bold uppercase tracking-wider">The Mission</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-neutral-900 mb-6 leading-tight">
              From Lived Experience<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                To Purpose
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Target,
                title: "Purpose Under Pressure",
                description: "Every summit requires clarity of purpose when fatigue and doubt threaten to turn you back."
              },
              {
                icon: TrendingUp,
                title: "Endurance Beyond Comfort",
                description: "Mountains teach that resilience is built in the discomfort zone—where growth actually happens."
              },
              {
                icon: Compass,
                title: "Finding True North",
                description: "In the mountains, navigation is literal. In life, True North is your unwavering direction when everything else shifts."
              }
            ].map((principle) => (
              <div key={principle.title} className="group relative overflow-hidden rounded-3xl bg-white p-1 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative bg-white rounded-3xl p-8">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center mb-6">
                    <principle.icon className="h-7 w-7 text-white" />
                  </div>
                  <h4 className="text-xl font-black text-neutral-900 mb-3">{principle.title}</h4>
                  <p className="text-neutral-600 leading-relaxed">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-white to-neutral-50 rounded-3xl p-12 border border-neutral-200">
            <div className="max-w-3xl mx-auto space-y-6 text-neutral-700 leading-relaxed text-lg">
              <p className="text-2xl font-black text-neutral-900">
                Anchorpoint Resilience Solutions was born from these lived realities—not theory, 
                not slogans, but scars that healed into strength.
              </p>
              <p>
                Whether I am mentoring men, guiding leaders, training organizations, or walking 
                alongside others through adversity, I draw from a journey shaped by loss, faith, 
                endurance and hope.
              </p>
              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="text-center p-6 bg-emerald-50 rounded-2xl">
                  <p className="text-3xl font-black text-emerald-900 mb-2">Resilience</p>
                  <p className="text-sm text-emerald-700">Can be built</p>
                </div>
                <div className="text-center p-6 bg-amber-50 rounded-2xl">
                  <p className="text-3xl font-black text-amber-900 mb-2">Purpose</p>
                  <p className="text-sm text-amber-700">Can be rediscovered</p>
                </div>
                <div className="text-center p-6 bg-teal-50 rounded-2xl">
                  <p className="text-3xl font-black text-teal-900 mb-2">No Valley</p>
                  <p className="text-sm text-teal-700">Is final</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white p-8 rounded-2xl text-center">
                <p className="text-2xl font-black mb-4">My story is not about perfection. It is about perseverance.</p>
                <p className="text-xl text-emerald-100 italic">
                  You can lose much and still rise. You can grieve deeply and still lead. 
                  You can be shaken—and yet remain unshaken.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & ARS Philosophy */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-emerald-950 via-emerald-900 to-neutral-950 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Compass className="h-16 w-16 text-amber-400 mx-auto mb-6" />
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Mission, Vision &<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
                Philosophy
              </span>
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Our foundation—what drives us, where we're headed, and how we work.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Mission */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-emerald-950" />
              </div>
              <h3 className="text-2xl font-black mb-4">Our Mission</h3>
              <p className="text-emerald-100 leading-relaxed">
                To equip individuals and organizations with practical frameworks, experiential 
                learning, and resilience methodologies that enable them to remain grounded, 
                adaptive, and effective through every challenge.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-emerald-950" />
              </div>
              <h3 className="text-2xl font-black mb-4">Our Vision</h3>
              <p className="text-emerald-100 leading-relaxed">
                A world where resilience is not accidental but intentional—where individuals 
                discover their True North, and organizations build cultures and systems capable 
                of thriving through complexity, change, and crisis.
              </p>
            </div>

            {/* Philosophy */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center mb-6">
                <Mountain className="h-8 w-8 text-emerald-950" />
              </div>
              <h3 className="text-2xl font-black mb-4">Our Philosophy</h3>
              <p className="text-emerald-100 leading-relaxed">
                Resilience is not theory—it's lived practice. Like summiting a mountain, it 
                requires preparation, endurance, clarity of purpose, and the courage to keep 
                moving when the path becomes steep.
              </p>
            </div>
          </div>

          {/* Core Integration Logic */}
          <div className="bg-amber-500/10 backdrop-blur-md border border-amber-400/20 rounded-3xl p-10 md:p-12">
            <h3 className="text-3xl md:text-4xl font-black mb-8 text-center">The ARS Integration Model</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Mountain,
                  title: "Mountains",
                  subtitle: "Metaphor + Method",
                  description: "Real climbs that teach resilience principles in action"
                },
                {
                  icon: BookOpen,
                  title: "Books",
                  subtitle: "Thought Leadership",
                  description: "Frameworks grounded in research and lived experience"
                },
                {
                  icon: Users2,
                  title: "Workshops",
                  subtitle: "Applied Transformation",
                  description: "Experiential learning for lasting behavioral change"
                },
                {
                  icon: Building2,
                  title: "Corporate Governance",
                  subtitle: "Organizational Resilience",
                  description: "Systems-level frameworks for sustainable performance"
                }
              ].map((element) => (
                <div key={element.title} className="text-center group">
                  <div className="w-16 h-16 rounded-full bg-amber-400/20 group-hover:bg-amber-400/30 mx-auto mb-4 flex items-center justify-center transition-all duration-300">
                    <element.icon className="h-8 w-8 text-amber-400" />
                  </div>
                  <h4 className="font-black text-lg mb-1">{element.title}</h4>
                  <p className="text-amber-300 text-sm font-semibold mb-2">{element.subtitle}</p>
                  <p className="text-emerald-100 text-sm leading-relaxed">{element.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Anchorpoint - Final Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Award className="h-16 w-16 text-amber-600 mx-auto mb-6" />
            <h2 className="text-5xl md:text-6xl font-black text-neutral-900 mb-6">
              Why Choose<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Anchorpoint
              </span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Resilience as a core leadership and organizational capability—not a buzzword, 
              but a battle-tested practice.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {[
              {
                title: 'Evidence-Based + Experience-Tested',
                description: 'Our frameworks combine academic rigor with real-world resilience practice forged through personal trials, business failures, and mountain expeditions.',
              },
              {
                title: 'Experiential Learning Model',
                description: 'We don\'t just teach resilience—we create experiences that embed it. From mountain climbs to corporate simulations, transformation happens through practice.',
              },
              {
                title: 'Holistic Integration',
                description: 'Mountains as metaphor and method. Books as thought leadership. Workshops as applied transformation. Governance as organizational resilience. All integrated.',
              },
              {
                title: 'Sustainable Transformation',
                description: 'Quick fixes don\'t build True North. Our approach creates lasting behavioral change through deep integration of principles, not surface-level motivation.',
              },
            ].map((item, index) => (
              <div key={item.title} className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 p-1">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative bg-emerald-900/30 backdrop-blur-sm rounded-3xl p-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center font-black text-emerald-950 text-xl">
                        {index + 1}
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-black text-white mb-3">{item.title}</h3>
                      <p className="text-emerald-100 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-950 rounded-3xl p-12 md:p-16 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
                backgroundSize: '48px 48px'
              }}></div>
            </div>
            
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-amber-400/10 backdrop-blur-md text-amber-300 rounded-full px-4 py-2 mb-6">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-bold uppercase tracking-wider">Welcome to the Climb</span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-black mb-6">
                Ready to Discover Your<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
                  True North?
                </span>
              </h3>
              
              <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                Whether you're seeking personal transformation or organizational resilience, 
                let's start the conversation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-emerald-950 font-bold border-0 shadow-2xl px-10 py-7 text-lg">
                    Work With Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/training">
                  <Button size="lg" variant="outline" className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-emerald-950 font-bold px-10 py-7 text-lg">
                    Explore Workshops
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
