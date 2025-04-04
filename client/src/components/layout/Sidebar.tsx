import { useAuth } from "@/hooks/use-auth";
import { cn } from "@/lib/utils";
import { ChartBar, FileText, HelpCircle, LayoutDashboard, LogOut, Settings } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface SidebarProps {
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
  const { logoutMutation } = useAuth();
  const [location] = useLocation();

  const navigationItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard", active: location === "/dashboard" },
    { icon: ChartBar, label: "Analytics", href: "/analytics", active: location === "/analytics" },
    { icon: FileText, label: "Reports", href: "/reports", active: location === "/reports" },
    { icon: Settings, label: "Settings", href: "/settings", active: location === "/settings" },
    { icon: HelpCircle, label: "Help & Support", href: "/help", active: location === "/help" },
  ];

  return (
    <div
      className={cn(
        "w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-200 ease-in-out",
        "absolute inset-y-0 left-0 transform md:relative md:translate-x-0 z-40 h-full md:h-auto",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}
    >
      <div className="h-full flex flex-col">
        <nav className="flex-1 px-2 py-4 space-y-1">
          {navigationItems.map((item) => (
            <Link 
              key={item.label} 
              href={item.href}
              onClick={(e) => {
                if (item.href !== "/dashboard") {
                  e.preventDefault();
                }
              }}
            >
              <a
                className={cn(
                  "flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors",
                  item.active
                    ? "bg-primary text-white"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                )}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.label}
              </a>
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <Button
            variant="ghost"
            className="flex w-full items-center text-sm font-medium text-red-500 hover:text-red-700 hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => logoutMutation.mutate()}
            disabled={logoutMutation.isPending}
          >
            <LogOut className="mr-2 h-4 w-4" />
            {logoutMutation.isPending ? "Signing out..." : "Sign out"}
          </Button>
        </div>
      </div>
    </div>
  );
}
