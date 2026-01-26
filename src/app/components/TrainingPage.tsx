import { Link } from 'react-router';
import { Users, Building2, Scale, Lightbulb, Heart, UserCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function TrainingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1630487656049-6db93a53a7e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjB0ZWFtd29ya3xlbnwxfHx8fDE3NjkwODIxNjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Training Programs
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Comprehensive resilience training for individuals and organizations
          </p>
        </div>
      </section>

      {/* Training Overview */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="individual" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="individual">Individual Training</TabsTrigger>
              <TabsTrigger value="organizational">Organizational Training</TabsTrigger>
            </TabsList>

            {/* Individual Resilience Training */}
            <TabsContent value="individual">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-blue-900" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Individual Resilience Training
                  </h2>
                  <p className="text-lg text-gray-600">
                    Personal development and inner capacity building for sustainable performance
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      icon: Heart,
                      title: 'Emotional Resilience',
                      description: 'Develop the capacity to recognize, understand, and regulate emotions effectively under pressure.',
                    },
                    {
                      icon: Lightbulb,
                      title: 'Mental Clarity Under Pressure',
                      description: 'Maintain focus, make sound decisions, and think clearly even in challenging situations.',
                    },
                    {
                      icon: UserCheck,
                      title: 'Adaptability to Change',
                      description: 'Build flexibility and openness to navigate transitions and uncertainty with confidence.',
                    },
                    {
                      icon: Users,
                      title: 'Personal Leadership & Self-Mastery',
                      description: 'Cultivate self-awareness, accountability, and the ability to lead yourself effectively.',
                    },
                  ].map((item) => (
                    <div key={item.title} className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
                      <item.icon className="h-8 w-8 text-blue-900 mb-4" />
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-blue-900 hover:bg-blue-800">
                      Request Individual Training
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>

            {/* Organizational Resilience Training */}
            <TabsContent value="organizational">
              <div>
                <div className="text-center mb-12 max-w-4xl mx-auto">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="h-8 w-8 text-blue-900" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Organizational Resilience Training
                  </h2>
                  <p className="text-lg text-gray-600">
                    We support organizations in building resilient systems, leaders, and cultures 
                    that endure pressure and complexity.
                  </p>
                </div>

                {/* Training Domains */}
                <div className="space-y-12">
                  {/* Corporate Governance */}
                  <div className="border-l-4 border-blue-900 pl-6">
                    <div className="flex items-start mb-4">
                      <Scale className="h-8 w-8 text-blue-900 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          1. Corporate Governance
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Strengthen governance structures and decision-making processes for long-term 
                          organizational resilience.
                        </p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 ml-12">
                      {[
                        'Resilient decision-making at board level',
                        'Ethical leadership and accountability',
                        'Governance structures for long-term stability',
                      ].map((item) => (
                        <div key={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                          <p className="text-sm text-gray-700">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Leadership & Organizational Management */}
                  <div className="border-l-4 border-blue-900 pl-6">
                    <div className="flex items-start mb-4">
                      <Users className="h-8 w-8 text-blue-900 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          2. Leadership & Organizational Management
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Develop adaptive leaders who can guide organizations through complexity 
                          and drive sustainable performance.
                        </p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 ml-12">
                      {[
                        'Adaptive leadership development',
                        'Change management excellence',
                        'Organizational alignment and performance under pressure',
                      ].map((item) => (
                        <div key={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                          <p className="text-sm text-gray-700">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Customer Experience */}
                  <div className="border-l-4 border-blue-900 pl-6">
                    <div className="flex items-start mb-4">
                      <Heart className="h-8 w-8 text-blue-900 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          3. Customer Experience
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Build trust and consistency in your customer relationships, even in 
                          uncertain environments.
                        </p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 ml-12">
                      {[
                        'Building trust and consistency in uncertain environments',
                        'Resilient service culture development',
                        'Customer-centric systems and processes',
                      ].map((item) => (
                        <div key={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                          <p className="text-sm text-gray-700">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Human Resource Management */}
                  <div className="border-l-4 border-blue-900 pl-6">
                    <div className="flex items-start mb-4">
                      <UserCheck className="h-8 w-8 text-blue-900 mr-4 flex-shrink-0" />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          4. Human Resource Management
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Create sustainable people strategies that support wellbeing, engagement, 
                          and performance.
                        </p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4 ml-12">
                      {[
                        'People resilience and wellbeing programs',
                        'Talent sustainability strategies',
                        'Culture, engagement, and performance integration',
                      ].map((item) => (
                        <div key={item} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                          <p className="text-sm text-gray-700">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-center mt-12">
                  <Link to="/contact">
                    <Button size="lg" className="bg-blue-900 hover:bg-blue-800">
                      Discuss Organizational Training
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us to discuss how our training programs can support your resilience journey.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-blue-900 hover:bg-blue-800">
              Start the Resilience Conversation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}