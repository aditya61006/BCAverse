import { NavigationMenu, NavigationMenuList, NavigationMenuItem } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full border-b bg-white h-16 flex items-center shadow-sm">
      <div className="max-w-7xl mx-auto w-full px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight">
          BCAverse
        </Link>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6 text-sm font-medium">
            <NavigationMenuItem>
              <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/chat" className="hover:text-blue-600 transition">Chat</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/notices" className="hover:text-blue-600 transition">Notices</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/dashboard" className="hover:text-blue-600 transition">Dashboard</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Profile */}
        <div className="flex items-center gap-3">
          <Button asChild variant="outline" className="hidden sm:flex">
            <Link to="/create-post">Create Post</Link>
          </Button>

          <Link to="/profile/me">
            <Avatar className="cursor-pointer">
              <AvatarImage src="/avatar.jpg" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </header>
  );
}
