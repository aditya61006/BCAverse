// src/pages/Home.jsx
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle, Bell, LayoutDashboard } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-white">
      
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Welcome to{" "}
          <span className="text-blue-600 dark:text-blue-400">
            BCAverse
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-700 dark:text-slate-300">
          Your all-in-one college hub for chatting, notices, dashboards, posts, and staying updated.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <Button asChild size="lg">
            <Link to="/chat">Start Chatting</Link>
          </Button>

          <Button asChild size="lg" variant="outline">
            <Link to="/notices">View Notices</Link>
          </Button>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-10">

        {/* Feature 1 */}
        <div className="border rounded-2xl p-6 bg-slate-50 shadow-md 
          dark:bg-slate-800 dark:border-slate-700">
          
          <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full w-fit">
            <MessageCircle className="w-6 h-6 text-blue-600 dark:text-blue-300" />
          </div>

          <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-900 dark:text-white">
            Real-time Chat
          </h3>

          <p className="text-slate-700 dark:text-slate-300">
            Connect with classmates and stay updated instantly.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="border rounded-2xl p-6 bg-slate-50 shadow-md
          dark:bg-slate-800 dark:border-slate-700">
          
          <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-full w-fit">
            <Bell className="w-6 h-6 text-yellow-600 dark:text-yellow-300" />
          </div>

          <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-900 dark:text-white">
            Latest Notices
          </h3>

          <p className="text-slate-700 dark:text-slate-300">
            Get official announcements and updates.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="border rounded-2xl p-6 bg-slate-50 shadow-md 
          dark:bg-slate-800 dark:border-slate-700">
          
          <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full w-fit">
            <LayoutDashboard className="w-6 h-6 text-green-600 dark:text-green-300" />
          </div>

          <h3 className="text-xl font-semibold mt-4 mb-2 text-slate-900 dark:text-white">
            Personal Dashboard
          </h3>

          <p className="text-slate-700 dark:text-slate-300">
            Manage your posts, activities, and profile easily.
          </p>
        </div>

      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 dark:bg-blue-800 py-16 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to explore BCAverse?
        </h2>

        <p className="text-lg opacity-90 mb-6">
          Join now and stay connected with your BCA community.
        </p>

        <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-slate-200">
          <Link to="/dashboard">Go to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
}
