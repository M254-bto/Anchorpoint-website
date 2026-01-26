import { Target, Compass, Shield, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 opacity-30">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1715485717725-01a1b81528f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYXNzJTIwbmF2aWdhdGlvbiUyMGxlYWRlcnNoaXB8ZW58MXx8fHwxNzY5MTU1OTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Compass for navigation"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Anchorpoint
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Building resilience through evidence-based frameworks and proven methodologies
          </p>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-blue-900" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Philosophy
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                At Anchorpoint, we believe that resilience is not accidental—it is trained, 
                structured, and sustained through deliberate practice and proven frameworks.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                We recognize that in today's complex and rapidly changing world, the ability 
                to remain grounded while adapting to change is not just valuable—it's essential 
                for sustainable success.
              </p>
              <p className="text-lg text-gray-600">
                Our approach integrates evidence-based methodologies from leadership development, 
                organizational psychology, and systems thinking to create lasting transformation 
                at both individual and organizational levels.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1614703428261-09e1ac47199a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMHJlc2lsaWVuY2UlMjBzdHJlbmd0aHxlbnwxfHx8fDE3NjkxNTU5NDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Mountain landscape representing resilience"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Compass className="h-6 w-6 text-blue-900" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Approach to Resilience
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive framework that addresses resilience at multiple levels
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Individual Level',
                description: 'Developing personal capacity for emotional regulation, mental clarity, and adaptive behavior under pressure.',
                items: [
                  'Self-awareness and emotional intelligence',
                  'Stress management techniques',
                  'Cognitive flexibility training',
                  'Personal leadership development',
                ],
              },
              {
                title: 'Team Level',
                description: 'Building cohesive, high-performing teams that can navigate complexity and maintain effectiveness.',
                items: [
                  'Psychological safety and trust',
                  'Collaborative problem-solving',
                  'Shared mental models',
                  'Adaptive team dynamics',
                ],
              },
              {
                title: 'Organizational Level',
                description: 'Creating systems, structures, and cultures that enable sustainable performance through change.',
                items: [
                  'Strategic governance frameworks',
                  'Resilient operational systems',
                  'Change-ready culture',
                  'Sustainable performance metrics',
                ],
              },
            ].map((approach) => (
              <div key={approach.title} className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {approach.title}
                </h3>
                <p className="text-gray-600 mb-6">{approach.description}</p>
                <ul className="space-y-2">
                  {approach.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-900 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Anchorpoint */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Shield className="h-6 w-6 text-blue-900" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Anchorpoint
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Resilience as a core leadership and organizational capability
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Evidence-Based Frameworks',
                description: 'Our methodologies are grounded in research from organizational psychology, neuroscience, and systems theory.',
              },
              {
                title: 'Practical Application',
                description: 'We focus on actionable strategies that can be immediately implemented in real-world contexts.',
              },
              {
                title: 'Sustainable Transformation',
                description: 'Our approach creates lasting change rather than temporary improvements through deep integration.',
              },
              {
                title: 'Holistic Perspective',
                description: 'We address resilience at individual, team, and organizational levels for comprehensive impact.',
              },
            ].map((item) => (
              <div key={item.title} className="flex">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-blue-100">
                To equip individuals and organizations with the tools, frameworks, and mindsets 
                necessary to build sustainable resilience and thrive through complexity and change.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-blue-100">
                A world where resilience is recognized as a foundational capability, enabling 
                individuals and organizations to navigate uncertainty with confidence, adapt 
                with grace, and perform with excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
