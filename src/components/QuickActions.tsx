import { FileText, UserPlus, Download, Plus } from "lucide-react";

export function QuickActions() {
  const actions = [
    { icon: FileText, label: "Generate Report", primary: true },
    { icon: UserPlus, label: "Add User", primary: false },
    { icon: Download, label: "Export Data", primary: false },
    { icon: Plus, label: "New Project", primary: false },
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="mb-4">
        <h3 className="text-foreground mb-1">Quick Actions</h3>
        <p className="text-sm text-muted-foreground">Common tasks</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.label}
              className={`
                flex flex-col items-center justify-center gap-2 p-4 rounded-lg
                transition-all duration-200 hover:scale-105
                ${action.primary 
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20' 
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg shadow-secondary/20'
                }
              `}
            >
              <Icon className="w-6 h-6" />
              <span className="text-sm text-center">{action.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
