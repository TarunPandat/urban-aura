// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/">Careers</Link></li>
            <li><Link href="/">Press</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><Link href="/">Help Center</Link></li>
            <li><Link href="/">Returns</Link></li>
            <li><Link href="/">Order Status</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2">
            <li><Link href="/">Instagram</Link></li>
            <li><Link href="/">Facebook</Link></li>
            <li><Link href="/">Twitter</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="text-sm mb-2">Sign up for updates and promotions.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-2 rounded-md text-black placeholder:text-white"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Urban Aura. All rights reserved.
      </div>
    </footer>
  );
}
