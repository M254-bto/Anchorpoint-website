import { Link } from 'react-router';
import { BookOpen, ArrowRight, Users, Building2, Target } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';

export function BooksPage() {
  const books = [
    {
      title: 'The Resilient Leader',
      description: 'A comprehensive guide to building personal resilience and leading with strength through uncertainty and change.',
      audience: 'Individual leaders, managers, and professionals',
      icon: Target,
    },
    {
      title: 'Organizational Resilience: A Strategic Framework',
      description: 'Evidence-based approaches to building resilient organizations that can adapt and thrive in complex environments.',
      audience: 'Executives, board members, and organizational leaders',
      icon: Building2,
    },
    {
      title: 'Building Resilient Teams',
      description: 'Practical strategies for developing high-performing teams that maintain effectiveness under pressure.',
      audience: 'Team leaders, HR professionals, and coaches',
      icon: Users,
    },
    {
      title: 'Governance for Resilience',
      description: 'A guide to integrating resilience thinking into corporate governance structures and board-level decision-making.',
      audience: 'Board members, directors, and governance professionals',
      icon: Building2,
    },
    {
      title: 'The Adaptive Mindset',
      description: 'Developing the mental flexibility and emotional intelligence needed to navigate change with confidence.',
      audience: 'Individuals seeking personal growth and development',
      icon: Target,
    },
    {
      title: 'Sustainable Performance',
      description: 'Creating organizational systems and cultures that enable long-term success without burnout.',
      audience: 'HR leaders, executives, and organizational development professionals',
      icon: Building2,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <BookOpen className="h-16 w-16 mx-auto mb-6 text-blue-100" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Books & Publications
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Thought leadership and practical resources for building resilience
            </p>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Publications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our collection of resilience-focused books and resources
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <Card key={book.title} className="flex flex-col h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <book.icon className="h-6 w-6 text-blue-900" />
                  </div>
                  <CardTitle className="text-xl">{book.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-600 mt-2">
                    {book.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="flex-1">
                    <div className="text-sm text-gray-700 mb-4">
                      <span className="font-semibold">Intended for:</span>
                      <p className="mt-1">{book.audience}</p>
                    </div>
                  </div>
                  <Link to="/contact" className="w-full">
                    <Button variant="outline" className="w-full">
                      Order / Request Book
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Note on Book Orders
            </h3>
            <p className="text-gray-700">
              All book orders are handled through our contact form or direct email. 
              We do not process online payments through this website. After submitting 
              your request, our team will contact you with ordering details and payment options.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Interested in Ordering?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us to inquire about book orders, bulk purchases, or speaking engagements.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-blue-900 hover:bg-blue-800">
              Contact Us About Books
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}