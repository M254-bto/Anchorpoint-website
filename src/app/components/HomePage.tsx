import { Link } from 'react-router';
import { ArrowRight, Users, Building2, Target, CheckCircle2 } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1446308386271-523272773b92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNob3IlMjBvY2VhbiUyMGNhbG0lMjBob3Jpem9ufGVufDF8fHx8MTc2OTE1NTk0M3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Calm ocean horizon"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Building Resilient Individuals and Organizations for Every Challenge
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Anchorpoint Resilience Solutions equips people and institutions with the mindset, 
              skills, and frameworks to remain grounded, adaptive, and effective through uncertainty 
              and change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/training">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 w-full sm:w-auto">
                  Explore Our Training Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-800 w-full sm:w-auto">
                  Work With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Evidence-based frameworks grounded in leadership, governance, and human systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Personal Resilience Training */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Personal Resilience Training
              </h3>
              <p className="text-gray-600 mb-6">
                Develop the inner capacity to remain grounded, focused, and effective 
                through life's challenges and changes.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Emotional resilience',
                  'Mental clarity under pressure',
                  'Adaptability to change',
                  'Personal leadership and self-mastery',
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-900 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/training">
                <Button variant="outline" className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Organizational Resilience Training */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Organizational Resilience Training
              </h3>
              <p className="text-gray-600 mb-6">
                Build resilient systems, leaders, and cultures that endure pressure 
                and complexity while maintaining performance.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Corporate governance excellence',
                  'Adaptive leadership development',
                  'Customer experience transformation',
                  'Human resource sustainability',
                ].map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-900 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/training">
                <Button variant="outline" className="w-full">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Who We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We partner with individuals and organizations committed to sustainable excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Individuals',
                description: 'Professionals seeking personal growth, resilience, and leadership development',
              },
              {
                icon: Building2,
                title: 'Corporates & Institutions',
                description: 'Organizations building sustainable systems and resilient operations',
              },
              {
                icon: Target,
                title: 'Leadership Teams & Boards',
                description: 'Executive teams and boards driving strategic resilience and governance excellence',
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Resilience?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Start your journey toward sustainable performance and adaptive excellence today.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}