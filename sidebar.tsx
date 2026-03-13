import { Link, useLocation } from "react-router-dom";
import { Droplets, LayoutDashboard, Gauge, Receipt, Bell, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
const navItems = [
  { to: "/", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/meters", icon: Gauge, label: "Meters" },
  { to: "/billing", icon: Receipt, label: "Billing" },
  { to: "/alerts", icon: Bell, label: "Alerts" },
];
export default function Sidebar() {
  const { pathname } = useLocation();
  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col border-r border-border bg-sidebar">
      <div className="flex items-center gap-3 border-b border-border px-6 py-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary glow-primary">
          <Droplets className="h-5 w-5 text-primary-foreground" />
        </div>
        <div>
          <h1 className="font-display text-lg font-bold text-foreground">AquaFlow</h1>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Smart Water</p>
        </div>
      </div>
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navItems.map(({ to, icon: Icon, label }) => {
          const active = pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={cn(
                "flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-all",
                active
                  ? "bg-primary/10 text-primary glow-primary"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              )}
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          );
        })}
      </nav>
      <div className="border-t border-border px-3 py-3">
        <Link
          to="/settings"
          className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground transition-all"
        >
          <Settings className="h-4 w-4" />
          Settings
        </Link>
      </div>
    </aside>
  );
}
