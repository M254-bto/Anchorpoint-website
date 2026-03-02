import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Mountain, Sparkles } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({
      name: '',
      organization: '',
      email: '',
      phone: '',
      interest: '',
      message: '',
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-neutral-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 text-white min-h-[60vh] flex items-center overflow-hidden">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
            backgroundSize: '48px 48px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9]">
              Let's Start<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
                The Climb
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100 leading-relaxed max-w-3xl">
              Whether you're seeking <span className="text-amber-300 font-bold">personal transformation</span>, organizational resilience training, or have questions about our workshops and books—let's connect.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-4">
                Get In Touch
              </h2>
              <p className="text-xl text-neutral-600 mb-8">
                Fill out the form and we'll respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    required
                    placeholder="Your full name"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="organization">Organization (Optional)</Label>
                  <Input
                    id="organization"
                    value={formData.organization}
                    onChange={(e) => handleChange('organization', e.target.value)}
                    placeholder="Your organization name"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                    placeholder="your@email.com"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    required
                    placeholder="+254 XXX XXX XXX"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="interest" className="text-neutral-700">Area of Interest *</Label>
                  <Select
                    value={formData.interest}
                    onValueChange={(value) => handleChange('interest', value)}
                  >
                    <SelectTrigger className="mt-1 border-neutral-300">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="personal-workshops">Personal Resilience Workshops</SelectItem>
                      <SelectItem value="mens-development">Men's Development Programs</SelectItem>
                      <SelectItem value="mountain-climb">Mountain Climb Experience</SelectItem>
                      <SelectItem value="corporate-training">Corporate Training & Governance</SelectItem>
                      <SelectItem value="books">Books & Publications</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-neutral-700">Your Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    required
                    placeholder="Tell us about your needs, goals, or questions..."
                    rows={6}
                    className="mt-1 border-neutral-300"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black border-0 py-6">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 text-white rounded-2xl p-10">
              <Mountain className="h-12 w-12 text-amber-400 mb-6" />
              
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Let's Build<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                  Resilience Together
                </span>
              </h2>
              <p className="text-emerald-100 mb-10 text-lg leading-relaxed">
                We're committed to supporting your resilience journey. Reach out through any of these channels.
              </p>

              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-amber-400/10 border-2 border-amber-400/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-amber-400/20 transition-colors">
                    <Mail className="h-6 w-6 text-amber-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-black text-white mb-2">Email</h3>
                    <a
                      href="mailto:info@anchorpointresilience.com"
                      className="text-emerald-100 hover:text-amber-400 transition-colors text-lg"
                    >
                      info@anchorpointresilience.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-amber-400/10 border-2 border-amber-400/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-amber-400/20 transition-colors">
                    <Phone className="h-6 w-6 text-amber-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-black text-white mb-2">Phone</h3>
                    <a
                      href="tel:+254721864581"
                      className="text-emerald-100 hover:text-amber-400 transition-colors text-lg"
                    >
                      +254 721 864 581
                    </a>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="w-14 h-14 bg-amber-400/10 border-2 border-amber-400/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-amber-400/20 transition-colors">
                    <MapPin className="h-6 w-6 text-amber-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-black text-white mb-2">Location</h3>
                    <p className="text-emerald-100 text-lg">
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time Notice */}
              <div className="bg-amber-400/10 border-2 border-amber-400/30 rounded-xl p-8 mt-10">
                <div className="flex items-start">
                  <Sparkles className="h-6 w-6 text-amber-400 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="font-black text-white mb-3 text-lg">
                      What to Expect
                    </h3>
                    <ul className="space-y-2 text-emerald-100">
                      <li>• Response within 24 hours on business days</li>
                      <li>• Complimentary initial consultations</li>
                      <li>• Customized solutions for your needs</li>
                      <li>• Complete confidentiality guaranteed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
