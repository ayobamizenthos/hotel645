import { Home, Key, User, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BottomNavDock = () => {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Key, label: "Rooms", path: "/rooms" },
    { icon: User, label: "About", path: "/about" },
    { icon: Phone, label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed bottom-4 left-4 right-4 z-50 md:hidden safe-area-bottom">
      <div className="flex items-center justify-around px-2 py-2 rounded-2xl bg-background/80 backdrop-blur-2xl border border-primary/20 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`relative flex flex-col items-center justify-center gap-1 py-2 px-4 rounded-xl transition-all duration-300 ${
                isActive 
                  ? "bg-primary/20 text-primary" 
                  : "text-foreground/50 active:bg-foreground/5"
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
              {isActive && (
                <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-primary" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavDock;
