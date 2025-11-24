import { useState } from "react";
import { Search, Calendar, Bookmark } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Notices() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Exam", "Event", "Holiday", "Important", "General"];

  const notices = [
    {
      title: "Mid-sem Exam Date Announced",
      desc: "BCA 1st, 2nd and 3rd year mid-sem examinations will begin from March 18.",
      date: "2025-03-02",
      type: "Exam",
    },
    {
      title: "Coding Hackathon",
      desc: "A 24-hour hackathon will be held on campus. Registration closes soon!",
      date: "2025-02-25",
      type: "Event",
    },
    {
      title: "College Closed on Holi",
      desc: "The college will remain closed for Holi celebrations.",
      date: "2025-03-10",
      type: "Holiday",
    },
    {
      title: "Submission Deadline Extended",
      desc: "The submission date for the DBMS project has been extended.",
      date: "2025-02-28",
      type: "Important",
    },
  ];

  const filteredNotices = notices.filter((notice) => {
    return (
      (filter === "All" || notice.type === filter) &&
      (notice.title.toLowerCase().includes(search.toLowerCase()) ||
        notice.desc.toLowerCase().includes(search.toLowerCase()))
    );
  });

  return (
    <div className="max-w-6xl mx-auto p-6 mt-8 space-y-8">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Notice Board
        </h1>

        {/* Search Bar */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-5 w-5 text-gray-500" />
            <Input
              placeholder="Search notices..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 bg-white dark:bg-neutral-900 dark:text-white"
            />
          </div>
        </div>
      </div>

      {/* FILTER TABS */}
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <Badge
            key={cat}
            onClick={() => setFilter(cat)}
            className={`cursor-pointer px-4 py-1 text-sm ${
              filter === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-neutral-800 text-black dark:text-white"
            }`}
          >
            {cat}
          </Badge>
        ))}
      </div>

      {/* NOTICE LIST */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredNotices.map((notice, idx) => (
          <Card
            key={idx}
            className="border shadow-sm dark:bg-neutral-900 dark:border-neutral-700"
          >
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{notice.title}</span>
                <Bookmark className="h-5 w-5 text-blue-600" />
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-3 text-gray-700 dark:text-gray-300">
              <p>{notice.desc}</p>

              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4" />
                <span>{notice.date}</span>
              </div>

              <Badge className="bg-blue-600 text-white">{notice.type}</Badge>
            </CardContent>
          </Card>
        ))}

        {filteredNotices.length === 0 && (
          <p className="text-center col-span-2 text-gray-600 dark:text-gray-300 text-lg">
            No notices found.
          </p>
        )}
      </div>
    </div>
  );
}
