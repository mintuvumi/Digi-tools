import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0b1120] to-[#0f172a] text-gray-300 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-8">

        {/* LOGO */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-3">
            DigiTools
          </h2>
          <p className="text-sm text-gray-400">
            Premium digital tools for creators and businesses.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h4 className="text-white mb-3">Product</h4>
          <ul className="space-y-2 text-sm">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>Docs</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="text-white mb-3">Social Links</h4>
          <div className="flex gap-3">
            <div className="bg-gray-700 p-2 rounded-full"><FaYoutube /></div>
            <div className="bg-gray-700 p-2 rounded-full"><FaFacebookF /></div>
            <div className="bg-gray-700 p-2 rounded-full"><FaTwitter /></div>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
        <p>© 2026 Digitools. All rights reserved.</p>
        <div className="flex gap-6">
          <span>Privacy Policy</span>
          <span>Terms</span>
          <span>Cookies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;