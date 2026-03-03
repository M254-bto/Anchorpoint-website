import { Link } from 'react-router';
import { Anchor, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Mountain } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-emerald-950 via-emerald-900 to-neutral-950 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Section */}
        <div className="bg-amber-500/10 backdrop-blur-md border border-amber-400/20 rounded-3xl p-8 md:p-10 mb-12">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-black mb-2">Stay Connected</h3>
              <p className="text-emerald-100">
                Get exclusive insights on resilience, leadership, and mountain wisdom directly to your inbox.
              </p>
            </div>
            <form action="https://formsubmit.co/afribraintechnologies@gmail.com" method="POST" className="flex flex-col sm:flex-row gap-3">
              <input type="hidden" name="_subject" value="New Newsletter Subscription - Anchorpoint Resilience" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="subscription_type" value="Footer Newsletter" />
              
              <Input 
                type="email"
                name="email"
                required
                placeholder="Enter your email" 
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-emerald-200 focus:bg-white/20 h-12 rounded-xl"
              />
              <Button type="submit" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-emerald-950 font-bold border-0 shadow-xl h-12 px-6">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                <Mountain className="h-6 w-6 text-emerald-950" />
              </div>
              <span className="text-xl font-black">
                Anchorpoint
              </span>
            </div>
            <p className="text-emerald-200 text-sm mb-6 leading-relaxed">
              Building Strength, Clarity, and True North – One Step at a Time
            </p>
            {/* Social Media */}
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-500 flex items-center justify-center transition-all duration-300 group">
                <Facebook className="h-5 w-5 text-emerald-100 group-hover:text-emerald-950" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-500 flex items-center justify-center transition-all duration-300 group">
                <Twitter className="h-5 w-5 text-emerald-100 group-hover:text-emerald-950" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-500 flex items-center justify-center transition-all duration-300 group">
                <Linkedin className="h-5 w-5 text-emerald-100 group-hover:text-emerald-950" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-500 flex items-center justify-center transition-all duration-300 group">
                <Instagram className="h-5 w-5 text-emerald-100 group-hover:text-emerald-950" />
              </a>
            </div>
          </div>

          {/* Quick Links - Explore */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-amber-400 uppercase tracking-wider">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-emerald-200 hover:text-amber-400 text-sm transition-colors flex items-center group">
                  <span className="w-1 h-1 rounded-full bg-amber-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About the Founder
                </Link>
              </li>
              <li>
                <Link to="/training" className="text-emerald-200 hover:text-amber-400 text-sm transition-colors flex items-center group">
                  <span className="w-1 h-1 rounded-full bg-amber-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Workshops & Training
                </Link>
              </li>
              <li>
                <Link to="/books" className="text-emerald-200 hover:text-amber-400 text-sm transition-colors flex items-center group">
                  <span className="w-1 h-1 rounded-full bg-amber-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Books & Manuscripts
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-emerald-200 hover:text-amber-400 text-sm transition-colors flex items-center group">
                  <span className="w-1 h-1 rounded-full bg-amber-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Events Calendar
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-emerald-200 hover:text-amber-400 text-sm transition-colors flex items-center group">
                  <span className="w-1 h-1 rounded-full bg-amber-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Blog & Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links - Services */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-amber-400 uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/training" className="text-emerald-200 hover:text-amber-400 text-sm transition-colors flex items-center group">
                  <span className="w-1 h-1 rounded-full bg-amber-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Personal Resilience Training
                </Link>
              </li>
              <li>
                <Link to="/training" className="text-emerald-200 hover:text-amber-400 text-sm transition-colors flex items-center group">
                  <span className="w-1 h-1 rounded-full bg-amber-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Men's Development Workshops
                </Link>
              </li>
              <li>
                <Link to="/training" className="text-emerald-200 hover:text-amber-400 text-sm transition-colors flex items-center group">
                  <span className="w-1 h-1 rounded-full bg-amber-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Corporate Training
                </Link>
              </li>
              <li>
                <Link to="/training" className="text-emerald-200 hover:text-amber-400 text-sm transition-colors flex items-center group">
                  <span className="w-1 h-1 rounded-full bg-amber-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Mountain Climb Experiences
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-emerald-200 hover:text-amber-400 text-sm transition-colors flex items-center group">
                  <span className="w-1 h-1 rounded-full bg-amber-400 mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Custom Programs
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-amber-400 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3 text-sm text-emerald-200">
              <li className="flex items-start space-x-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 text-amber-400" />
                <span>info@anchorpointresilience.co.ke</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 text-amber-400" />
                <span>+254 721 864 581</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-amber-400" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
            <Link to="/contact" className="inline-block mt-4">
              <Button size="sm" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-emerald-950 font-bold border-0 shadow-lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>

        <div className="border-t border-emerald-800/30 pt-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <p className="text-sm text-emerald-300 text-center md:text-left">
              &copy; {new Date().getFullYear()} Anchorpoint Resilience Solutions. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-emerald-200 justify-center md:justify-end">
              <Link to="/privacy" className="hover:text-amber-400 transition-colors text-center">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-amber-400 transition-colors text-center">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}