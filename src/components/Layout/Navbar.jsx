import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Sun, Moon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// --- Dark mode hook ---
function useTheme() {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
}

export default function Navbar() {
  const [isNarrow, setIsNarrow] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  // Auto-collapse logic
  useEffect(() => {
    const checkWidth = () => setIsNarrow(window.innerWidth < 1150);
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const mainLinks = [
    { name: "Home", to: "/" },
    { name: "Chat", to: "/chat" },
    { name: "Notices", to: "/notices" },
    { name: "Dashboard", to: "/dashboard" },
  ];

  const extraLinks = [
    { name: "Community", to: "/community" },
    { name: "Events", to: "/events" },
    { name: "Materials", to: "/materials" },
    { name: "About", to: "/about" },
  ];

  return (
    <header className="w-full border-b backdrop-blur bg-white/80 dark:bg-black/40 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto w-full px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold dark:text-white">
          BCAverse
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">

          <NavigationMenu>
            <NavigationMenuList className="flex gap-6">

              {/* Main links */}
              {mainLinks.map((item) => (
                <NavigationMenuItem key={item.name}>
                  <Link
                    to={item.to}
                    className={`px-1 transition hover:text-blue-600 ${
                      location.pathname === item.to
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {item.name}
                  </Link>
                </NavigationMenuItem>
              ))}

              {/* More menu (when screen is narrow) */}
            {isNarrow && (
  <DropdownMenu>
    <DropdownMenuTrigger className="px-2 font-medium hover:text-blue-600 focus:outline-none">
      More
    </DropdownMenuTrigger>

    <DropdownMenuContent
      align="center"
      sideOffset={6}
      className="w-44"
    >
      {extraLinks.map((item) => (
        <DropdownMenuItem key={item.name} asChild>
          <Link to={item.to}>{item.name}</Link>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
)}


              {/* Show all links if wide */}
              {!isNarrow &&
                extraLinks.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <Link
                      to={item.to}
                      className="px-1 transition hover:text-blue-600 text-gray-700 dark:text-gray-300"
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuItem>
                ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Create Post Button */}
          <Button asChild variant="outline">
            <Link to="/create-post">Create Post</Link>
          </Button>

          {/* DARK MODE TOGGLE */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full border hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-300" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          {/* USER AVATAR */}
          <Link to="/profile/me">
            <Avatar className="cursor-pointer">
              <AvatarImage src="/avatar.jpg" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </Link>
        </nav>

        {/* MOBILE NAVBAR */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu className="h-6 w-6" />
          </SheetTrigger>

          <SheetContent side="left" className="w-72">
            <h2 className="text-xl font-semibold mb-4">Navigation</h2>

            <div className="flex flex-col gap-4">
              {mainLinks.concat(extraLinks).map((item) => (
                <Link key={item.name} to={item.to} className="text-lg">
                  {item.name}
                </Link>
              ))}

              <Button asChild className="mt-4">
                <Link to="/create-post">Create Post</Link>
              </Button>

              {/* Dark mode for mobile */}
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                variant="outline"
              >
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
