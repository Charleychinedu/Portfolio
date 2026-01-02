import { LayoutDashboard, BarChart3, Users, FolderKanban, Settings, ChevronLeft, Menu } from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function DashboardSidebar({ isOpen, onToggle }: SidebarProps) {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Analytics", icon: BarChart3 },
    { name: "Users", icon: Users },
    { name: "Projects", icon: FolderKanban },
    { name: "Settings", icon: Settings },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:sticky top-0 left-0 h-screen bg-card border-r border-border z-50
          transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          ${isOpen ? 'w-64' : 'w-64 lg:w-20'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              {isOpen && (
                <div>
                  <h1 className="text-foreground">Apex</h1>
                  <p className="text-xs text-muted-foreground">Dashboard</p>
                </div>
              )}
            </div>
            <button
              onClick={onToggle}
              className="lg:block hidden p-1 hover:bg-accent rounded-md transition-colors"
            >
              <ChevronLeft className={`w-5 h-5 transition-transform ${!isOpen && 'rotate-180'}`} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeItem === item.name;
              
              return (
                <button
                  key={item.name}
                  onClick={() => setActiveItem(item.name)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg
                    transition-all duration-200
                    ${isActive 
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20' 
                      : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                    }
                    ${!isOpen && 'lg:justify-center'}
                  `}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {isOpen && <span>{item.name}</span>}
                </button>
              );
            })}
          </nav>

          {/* User Section */}
          <div className="p-4 border-t border-border">
            <div className={`flex items-center gap-3 ${!isOpen && 'lg:justify-center'}`}>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center flex-shrink-0">
                <span className="text-white">JD</span>
              </div>
              {isOpen && (
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground truncate">John Doe</p>
                  <p className="text-xs text-muted-foreground truncate">john@apex.io</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
