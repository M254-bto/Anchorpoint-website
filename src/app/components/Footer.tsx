import { Link } from 'react-router';
import { Anchor, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Anchor className="h-6 w-6" />
              <span className="text-lg font-semibold">
                Anchorpoint Resilience Solutions
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Building resilient individuals and organizations for sustainable performance
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white text-sm transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/training" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Training Programs
                </Link>
              </li>
              <li>
                <Link to="/books" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Books & Publications
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@anchorpointresilience.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Your City, State</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Anchorpoint Resilience Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}