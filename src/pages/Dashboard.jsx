import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import {
  Bell,
  MessageCircle,
  User,
  FileText,
  ArrowRight,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen px-5 py-10 bg-white dark:bg-slate-900 text-slate-900 dark:text-white">

      {/* Welcome Section */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Hello, Student 👋</h1>
        <p className="text-slate-600 dark:text-slate-300">
          Welcome to your dashboard. Here’s what’s happening today.
        </p>

        {/* Quick Actions */}
        <div className="flex gap-4 mt-6">
          <Button asChild size="lg">
            <Link to="/create-post">Create Post</Link>
          </Button>

          <Button asChild size="lg" variant="outline">
            <Link to="/chat">Open Chat</Link>
          </Button>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {/* Total Students */}
          <Card className="bg-slate-50 dark:bg-slate-800 border dark:border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Total Students</CardTitle>
              <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">320</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Connected</p>
            </CardContent>
          </Card>

          {/* Notices */}
          <Card className="bg-slate-50 dark:bg-slate-800 border dark:border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>New Notices</CardTitle>
              <Bell className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">5</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Last 24 hours</p>
            </CardContent>
          </Card>

          {/* Active Chats */}
          <Card className="bg-slate-50 dark:bg-slate-800 border dark:border-slate-700">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Active Chats</CardTitle>
              <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">12</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">Ongoing</p>
            </CardContent>
          </Card>

        </div>

        {/* Recent Notices Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Recent Notices</h2>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Notice Card */}
            <Card className="bg-slate-50 dark:bg-slate-800 border dark:border-slate-700">
              <CardHeader>
                <CardTitle>Semester Exam Schedule</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 dark:text-slate-300">
                The updated exam timetable has been released. Download the official PDF.
                <Button asChild variant="link" className="mt-3 p-0">
                  <Link to="/notices">View Notice</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Notice Card */}
            <Card className="bg-slate-50 dark:bg-slate-800 border dark:border-slate-700">
              <CardHeader>
                <CardTitle>Workshop on Web Development</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600 dark:text-slate-300">
                A hands-on workshop on MERN full-stack is scheduled this Friday.
                <Button asChild variant="link" className="mt-3 p-0">
                  <Link to="/notices">Read Details</Link>
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>

        {/* Activity Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Your Recent Activity</h2>

          <Card className="bg-slate-50 dark:bg-slate-800 border dark:border-slate-700">
            <CardContent className="py-6">
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li>• You posted a question in the “Database Management” group.</li>
                <li>• You joined the “Full Stack Dev” chat channel.</li>
                <li>• You liked 3 posts today.</li>
              </ul>

              <Button asChild variant="outline" className="mt-4">
                <Link to="/profile/me">
                  View Full Activity <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}
