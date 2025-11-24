import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">BCAverse</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Your digital academic companion.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            {[Facebook, Instagram, Twitter, Github].map((Icon, i) => (
              <Link
                key={i}
                to="#"
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-800 transition"
              >
                <Icon size={20} className="text-gray-700 dark:text-gray-300" />
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {[
              { name: "Home", link: "/" },
              { name: "Chat", link: "/chat" },
              { name: "Notices", link: "/notices" },
              { name: "Dashboard", link: "/dashboard" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.link}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li>Email: support@bcaverse.com</li>
            <li>Phone: +91 23445xxxxx</li>
            <li>Location: India</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-200 dark:border-neutral-800 py-4 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} BCAverse — All Rights Reserved.
      </div>
    </footer>
  );
}
