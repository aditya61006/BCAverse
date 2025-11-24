import {
  Home,
  MessageCircle,
  Bell,
  User,
  LayoutDashboard,
  LogOut,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

// Sidebar link component
function SidebarLink({ to, icon: Icon, label }) {
  const location = useLocation();
  const active = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-4 py-2 rounded-lg transition
      ${active ? "bg-blue-600 text-white" : "hover:bg-gray-100"}
    `}
    >
      <Icon size={20} />
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}

export default function Sidebar({ mobile = false }) {
  const SidebarContent = () => (
    <nav className="flex flex-col gap-2 p-4 w-60">
      <h2 className="text-xl font-bold mb-4">Menu</h2>

      <SidebarLink to="/" label="Home" icon={Home} />
      <SidebarLink to="/dashboard" label="Dashboard" icon={LayoutDashboard} />
      <SidebarLink to="/chat" label="Chat" icon={MessageCircle} />
      <SidebarLink to="/notices" label="Notices" icon={Bell} />
      <SidebarLink to="/profile/me" label="Profile" icon={User} />

      <div className="mt-6 border-t pt-4">
        <SidebarLink to="/logout" label="Logout" icon={LogOut} />
      </div>
    </nav>
  );

  // Mobile sidebar (Sheet)
  if (mobile) {
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="sm:hidden">
            Menu
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>
    );
  }

  // Desktop sidebar
  return (
    <aside className="hidden sm:flex h-screen border-r bg-white shadow-sm">
      <SidebarContent />
    </aside>
  );
}
