import { Link } from 'react-router';
import { Users, Building2, Mountain, BookOpen, Target, Calendar, TrendingUp, Shield, ArrowRight, CheckCircle2, Scale, Heart, AlertTriangle, Compass, Zap, Award } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function TrainingPage() {
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
            src="/WhatsApp Image 2026-01-29 at 11.12.58.jpeg"
            alt="Mountain climb workshop"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9]">
              Governance<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
                In The Trenches
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 leading-relaxed mb-10 max-w-3xl">
              From compliance checklists to the real world. Build governance systems that are 
              <span className="text-amber-300 font-bold"> practical, ethical, and resilient</span>—not merely compliant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-emerald-950 font-black border-0 shadow-2xl px-10 py-7 text-lg">
                  Request Training
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/books">
                <Button size="lg" variant="outline" className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-emerald-950 font-black px-10 py-7 text-lg">
                  Explore the Book
                  <BookOpen className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why "Governance in the Trenches" */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Story */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6 leading-tight">
                Not From<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  Textbooks Alone
                </span>
              </h2>
              <div className="space-y-4 text-lg text-neutral-700 leading-relaxed">
                <p>
                  I learned governance in environments where projects were abruptly terminated, 
                  organizations folded due to resource constraints, partnerships disintegrated under 
                  leadership conflict, and leaders faced ethical dilemmas with no easy answers.
                </p>
                <p className="font-semibold text-emerald-900">
                  Governance is rarely tested in ideal conditions. It is tested in uncertainty—when 
                  margins are thin, information is incomplete, and leaders must decide under pressure.
                </p>
                <p>
                  <span className="font-black text-amber-600">Governance in the Trenches</span> speaks 
                  directly to leaders navigating these realities.
                </p>
              </div>
            </div>

            {/* Right: Reality Boxes */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: AlertTriangle, text: "Projects abruptly terminated" },
                { icon: Building2, text: "Organizations folded under resource constraints" },
                { icon: Users, text: "Partnerships collapsed from internal conflict" },
                { icon: Target, text: "Leaders faced ethical dilemmas" },
                { icon: TrendingUp, text: "Jobs lost through distant decisions" },
                { icon: Shield, text: "Trust eroded by governance failure" }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl p-6 hover:border-amber-400 hover:shadow-xl transition-all duration-300">
                  <item.icon className="h-8 w-8 text-emerald-700 mb-3" />
                  <p className="text-sm font-bold text-neutral-800 leading-snug">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Governance Philosophy */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-emerald-950 via-emerald-900 to-neutral-950 text-white relative overflow-hidden">
        {/* Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Mountain className="h-16 w-16 text-amber-400 mx-auto mb-6" />
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Our Governance<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Philosophy
              </span>
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
              Corporate governance as a <span className="text-amber-300 font-bold">resilience system</span>—designed 
              to help organizations anticipate shocks, withstand disruption, and recover with integrity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: CheckCircle2,
                title: "Clear Roles & Accountability",
                description: "Everyone knows their responsibility and authority"
              },
              {
                icon: Shield,
                title: "Sound Preparation & Risk Awareness",
                description: "Anticipate challenges before they become crises"
              },
              {
                icon: Target,
                title: "Ethical Leadership Under Pressure",
                description: "Values-driven decisions when stakes are highest"
              },
              {
                icon: Compass,
                title: "Disciplined Decision-Making",
                description: "Structured processes that prevent drift"
              },
              {
                icon: Zap,
                title: "Adaptive When Conditions Change",
                description: "Flexibility without compromising core principles"
              },
              {
                icon: Heart,
                title: "Human-Centered Governance",
                description: "Recognizing impact on people, not just structures"
              }
            ].map((principle) => (
              <div key={principle.title} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <principle.icon className="h-10 w-10 text-amber-400 mb-4" />
                <h3 className="text-xl font-black mb-2">{principle.title}</h3>
                <p className="text-emerald-100 text-sm leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Users className="h-16 w-16 text-emerald-700 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
              Who This Is For
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Leaders operating in the real world—where decisions have human consequences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                badge: "01",
                title: "SME Owners & Founders",
                description: "Building governance from the ground up in resource-constrained environments"
              },
              {
                badge: "02",
                title: "Directors & Board Members",
                description: "Providing oversight and strategic direction under uncertainty"
              },
              {
                badge: "03",
                title: "Senior Managers & Executives",
                description: "Implementing governance decisions at operational level"
              },
              {
                badge: "04",
                title: "Family Businesses",
                description: "Navigating transition, succession, and professionalization"
              },
              {
                badge: "05",
                title: "NGO & Social Enterprise Leaders",
                description: "Balancing mission, impact, and institutional sustainability"
              },
              {
                badge: "06",
                title: "Emerging Market Leaders",
                description: "Operating in volatile, resource-constrained environments"
              }
            ].map((audience) => (
              <div key={audience.badge} className="bg-white border-2 border-emerald-200 rounded-2xl p-8 hover:border-amber-400 hover:shadow-2xl transition-all duration-300 group">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 group-hover:from-amber-500 group-hover:to-amber-600 flex items-center justify-center mb-6 transition-all duration-300">
                  <span className="text-white font-black text-lg">{audience.badge}</span>
                </div>
                <h3 className="text-xl font-black text-neutral-900 mb-3">{audience.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Training Themes */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <BookOpen className="h-16 w-16 text-amber-600 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
              Core Training<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Themes
              </span>
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Drawing directly from <span className="font-black text-emerald-900">Governance in the Trenches</span> and 
              tailored to your organizational context
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <ul className="space-y-4 text-lg text-neutral-700">
              <li className="flex items-start">
                <span className="text-amber-500 font-black mr-3 mt-1">•</span>
                <div>
                  <strong className="font-black text-neutral-900">Governance Beyond Compliance:</strong> Decision-making under pressure, not just policy manuals
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 font-black mr-3 mt-1">•</span>
                <div>
                  <strong className="font-black text-neutral-900">Ethical Leadership When Institutions Are Strained:</strong> Making values-driven choices when resources are thin
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 font-black mr-3 mt-1">•</span>
                <div>
                  <strong className="font-black text-neutral-900">Board–Management Dynamics & Accountability:</strong> Clear roles, healthy tension, mutual trust
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 font-black mr-3 mt-1">•</span>
                <div>
                  <strong className="font-black text-neutral-900">Risk Oversight & Early Warning Signs of Failure:</strong> Seeing drift before ground gives way
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 font-black mr-3 mt-1">•</span>
                <div>
                  <strong className="font-black text-neutral-900">Governance Challenges in SMEs & Family Businesses:</strong> Professionalization without losing entrepreneurial spirit
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 font-black mr-3 mt-1">•</span>
                <div>
                  <strong className="font-black text-neutral-900">Leadership Resilience During Crisis & Recovery:</strong> Leading through loss, setback, and organizational trauma
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-amber-500 font-black mr-3 mt-1">•</span>
                <div>
                  <strong className="font-black text-neutral-900">Restoring Trust After Organizational Setbacks:</strong> Rebuilding credibility when reputations are damaged
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Training Formats */}
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
            <Calendar className="h-16 w-16 text-amber-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Training<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Formats
              </span>
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Flexible delivery options to meet your organization where it is
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Building2,
                title: "Executive Workshops",
                description: "Intensive sessions for senior leadership teams focused on strategic governance challenges"
              },
              {
                icon: Users,
                title: "Board & Senior Management Retreats",
                description: "Facilitated deep-dives on governance, risk, and organizational resilience"
              },
              {
                icon: Target,
                title: "SME Governance Clinics",
                description: "Practical, context-aware training for small and medium enterprise leaders"
              },
              {
                icon: Shield,
                title: "Customized In-House Training",
                description: "Tailored programs designed for your specific organizational context and challenges"
              },
              {
                icon: TrendingUp,
                title: "Speaking Engagements",
                description: "Keynotes and executive briefings on governance, resilience, and leadership"
              },
              {
                icon: Award,
                title: "Integrated Development Programs",
                description: "Governance training embedded within broader leadership and resilience initiatives"
              }
            ].map((format) => (
              <div key={format.title} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:border-amber-400/50 transition-all duration-300 group">
                <div className="w-16 h-16 rounded-full bg-amber-400/20 group-hover:bg-amber-400/30 flex items-center justify-center mb-6 transition-all duration-300">
                  <format.icon className="h-8 w-8 text-amber-400" />
                </div>
                <h3 className="text-2xl font-black mb-3">{format.title}</h3>
                <p className="text-emerald-100 leading-relaxed">{format.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl text-amber-200 font-bold mb-2">Standalone or Integrated</p>
            <p className="text-emerald-100 max-w-3xl mx-auto">
              Programs may be delivered as stand-alone governance interventions or integrated into broader 
              leadership and resilience development initiatives.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Compass className="h-16 w-16 text-emerald-700 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6">
              What Makes Our<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Approach Different
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Mountain,
                title: "Grounded in Lived Experience",
                description: "Not abstract theory—frameworks forged in the trenches of real organizational challenges, failures, and recoveries"
              },
              {
                icon: Target,
                title: "Context-Aware & Emerging-Market Ready",
                description: "Suited to African and emerging-market realities where resources are constrained and volatility is constant"
              },
              {
                icon: Heart,
                title: "Human Lens on Governance",
                description: "Recognizing governance impact on people, not just structures—jobs, trust, livelihoods, and futures"
              },
              {
                icon: Shield,
                title: "Integration of Resilience Thinking",
                description: "Governance as a resilience system—preparing for shocks, withstanding disruption, recovering with integrity"
              }
            ].map((difference) => (
              <div key={difference.title} className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-3xl p-10 hover:border-amber-400 hover:shadow-2xl transition-all duration-300 group">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 group-hover:from-amber-500 group-hover:to-amber-600 flex items-center justify-center mb-6 transition-all duration-300">
                  <difference.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-black text-neutral-900 mb-4">{difference.title}</h3>
                <p className="text-lg text-neutral-700 leading-relaxed">{difference.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}