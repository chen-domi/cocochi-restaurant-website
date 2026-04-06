export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h4
              className="text-white text-xl font-bold mb-3"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Cocochi Asian Cuisine
            </h4>
            <p className="text-sm leading-relaxed text-gray-400">
              A family-owned restaurant serving authentic sushi, hibachi, and Chinese takeout in Feeding Hills, MA.
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-cocochi font-semibold mb-3 uppercase tracking-wider text-sm">Hours</h4>
            <ul className="text-sm space-y-1 text-gray-400">
              <li>Mon: Closed</li>
              <li>Tue – Thu: 11 AM – 9 PM</li>
              <li>Fri – Sat: 11 AM – 10 PM</li>
              <li>Sun: 11 AM – 9 PM</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-cocochi font-semibold mb-3 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="text-sm space-y-2 text-gray-400">
              <li>
                <a href="tel:4137862777" className="hover:text-white transition-colors">
                  (413) 786-2777
                </a>
              </li>
              <li>760 Springfield St<br />Feeding Hills, MA 01030</li>
            </ul>
            <div className="flex gap-4 mt-5">
              <a
                href="https://www.facebook.com/cocochi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Facebook
              </a>
              <a
                href="https://www.yelp.com/biz/cocochi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cocochi transition-colors text-sm"
              >
                Yelp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Cocochi Asian Cuisine. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
