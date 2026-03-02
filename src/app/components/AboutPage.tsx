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
              About Anchorpoint<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
                Resilience Solutions
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-amber-200 font-bold leading-relaxed max-w-3xl mb-6">
              Where Strength Meets Clarity — and Leadership Finds Its True North
            </p>
            <p className="text-xl md:text-2xl text-emerald-100 leading-relaxed max-w-3xl">
              At Anchorpoint Resilience Solutions (ARS), we empower individuals, leaders and organizations 
              to navigate uncertainty, strengthen resilience and lead with integrity. Our approach integrates 
              practical experience, governance insight and proven resilience frameworks to help clients withstand 
              disruption, make courageous decisions and thrive in complex environments.
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
              <span className="text-sm font-bold uppercase tracking-wider">Our Founder</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-neutral-900 mb-6 leading-tight">
              Zachary Kabera<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Founder & Lead Consultant
              </span>
            </h2>
          </div>

          {/* Early Years */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-black text-neutral-900 mb-6">
                Blending Academic Rigor with Practical Experience
              </h3>
              
              <div className="space-y-4 text-neutral-700 leading-relaxed text-lg">
                <p>
                  Zachary Kabera is a PhD Candidate in Business Administration, specializing in Leadership 
                  and Corporate Governance, blending rigorous academic research with practical, high-pressure 
                  leadership experience.
                </p>
                <p>
                  Throughout his career, he has held leadership roles in audit firms, international organizations, 
                  and private business ventures, navigating organizational disruptions, ethical dilemmas, and 
                  governance breakdowns. These experiences inform his work in executive training, board 
                  development and organizational resilience consulting.
                </p>
                <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-xl">
                  <p className="font-bold text-emerald-900">
                    Beyond professional practice, he is an accomplished author. He has published 
                    <span className="italic"> Unshaken: Finding Your True North Through Life's Trials</span> and 
                    <span className="italic"> Cracking the Code: Unlocking True Masculine Strength</span>, and is completing 
                    two additional manuscripts: <span className="italic">Beyond the Peak: Lessons on Life and Resilience 
                    from Kenya's Mountains</span> and <span className="italic">Governance in the Trenches: Overcoming 
                    Business Failures with Resilience</span>.
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
                Lessons from Kenya's Mountains
              </h3>
              
              <div className="space-y-4 text-neutral-700 leading-relaxed text-lg">
                <p>
                  An avid mountain climber, Zachary draws lessons from Kenya's peaks to illustrate discipline, 
                  preparation, ethical decision-making and perseverance—key principles that underpin his training programs.
                </p>
                <p className="font-semibold text-emerald-900">
                  His writing bridges personal resilience, leadership, and governance—providing frameworks that 
                  leaders can apply in high-pressure, resource-constrained environments.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-xl">
                  <p className="font-bold text-amber-900 italic">
                    "Mountain hiking has become both a spiritual discipline and a resilience classroom. 
                    What the body learns on the trail, the mind and soul remember in leadership."
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
                  Our Philosophy
                </h3>
                <p className="text-xl text-emerald-100 italic">
                  Resilience is both personal and organizational.
                </p>
              </div>

              <div className="space-y-6 text-emerald-100 leading-relaxed text-lg">
                <p>
                  At ARS, we believe that resilience is both personal and organizational. Just as climbers rely on 
                  preparation, clarity and endurance to reach the summit, leaders and institutions must cultivate 
                  systems and mindsets that withstand stress, disruption and uncertainty.
                </p>
                <p className="font-semibold text-amber-200">
                  Our programs integrate:
                </p>
                <ul className="space-y-3 ml-6">
                  <li className="flex items-start">
                    <span className="text-amber-400 font-black mr-3 mt-1">•</span>
                    <span><strong>Leadership resilience</strong> – cultivating mental fortitude and decision-making under pressure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 font-black mr-3 mt-1">•</span>
                    <span><strong>Corporate governance</strong> – building ethical, accountable and durable organizational systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 font-black mr-3 mt-1">•</span>
                    <span><strong>Applied life lessons</strong> – drawing from lived experience and real-world challenges</span>
                  </li>
                </ul>
                <div className="bg-amber-400/10 backdrop-blur-md border border-amber-400/20 rounded-2xl p-8 mt-8">
                  <p className="font-bold text-amber-300 text-xl text-center">
                    "We do not teach theory in isolation; we equip leaders to act decisively when it matters most."
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
              <span className="text-sm font-bold uppercase tracking-wider">Our Foundation</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-neutral-900 mb-6 leading-tight">
              Mission, Vision &<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                What Drives Us
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description: "To empower individuals, leaders and organizations to navigate adversity, strengthen governance and achieve sustainable resilience, anchored in real-life experience, ethical clarity and tested insight."
              },
              {
                icon: Shield,
                title: "Our Vision",
                description: "A world where resilience is not accidental but intentional—where leaders and organizations build systems capable of thriving through complexity, change, and crisis."
              },
              {
                icon: Compass,
                title: "Our Approach",
                description: "We integrate leadership resilience, corporate governance, and applied life lessons—equipping leaders to act decisively when it matters most."
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
                Why Anchorpoint Resilience Solutions
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-emerald-600 font-black mr-3 mt-1">•</span>
                  <div>
                    <strong className="text-neutral-900">Experience-backed insights</strong> – decades of professional 
                    practice in governance, audit, and leadership roles
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 font-black mr-3 mt-1">•</span>
                  <div>
                    <strong className="text-neutral-900">Academic grounding</strong> – PhD-level research in leadership 
                    and corporate governance
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 font-black mr-3 mt-1">•</span>
                  <div>
                    <strong className="text-neutral-900">Proven frameworks</strong> – resilience and governance models 
                    derived from real-world crises
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 font-black mr-3 mt-1">•</span>
                  <div>
                    <strong className="text-neutral-900">Human-centered approach</strong> – addressing people, culture, 
                    and organizational impact alongside structures
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-600 font-black mr-3 mt-1">•</span>
                  <div>
                    <strong className="text-neutral-900">Cross-sector applicability</strong> – serving individuals, 
                    SMEs, family businesses, NGOs, and corporate boards
                  </div>
                </li>
              </ul>
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
                To empower individuals, leaders and organizations to navigate adversity, strengthen 
                governance and achieve sustainable resilience, anchored in real-life experience, 
                ethical clarity and tested insight.
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
                At ARS, we believe that resilience is both personal and organizational. Just as 
                climbers rely on preparation, clarity and endurance to reach the summit, leaders 
                and institutions must cultivate systems and mindsets that withstand stress, 
                disruption and uncertainty.
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
                title: 'Experience-backed insights',
                description: 'Decades of professional practice in governance, audit, and leadership roles across audit firms, international organizations, and private business ventures.',
              },
              {
                title: 'Academic grounding',
                description: 'PhD-level research in leadership and corporate governance, blending rigorous academic research with practical experience.',
              },
              {
                title: 'Proven frameworks',
                description: 'Resilience and governance models derived from real-world crises, organizational disruptions, and ethical dilemmas.',
              },
              {
                title: 'Human-centered approach',
                description: 'Addressing people, culture, and organizational impact alongside structures—recognizing that governance affects lives, not just policies.',
              },
              {
                title: 'Cross-sector applicability',
                description: 'Serving individuals, SMEs, family businesses, NGOs, and corporate boards with context-aware, adaptable frameworks.',
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
                    Corporate governance
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
