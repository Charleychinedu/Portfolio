import { User, FileText, DollarSign, CheckCircle } from "lucide-react";

const activities = [
  {
    id: 1,
    type: "user",
    icon: User,
    title: "New user registered",
    description: "Sarah Johnson joined the platform",
    time: "5 minutes ago",
    color: "primary"
  },
  {
    id: 2,
    type: "document",
    icon: FileText,
    title: "Report generated",
    description: "Q3 Financial Report has been created",
    time: "1 hour ago",
    color: "secondary"
  },
  {
    id: 3,
    type: "payment",
    icon: DollarSign,
    title: "Payment received",
    description: "$12,500 from Acme Corp",
    time: "2 hours ago",
    color: "primary"
  },
  {
    id: 4,
    type: "task",
    icon: CheckCircle,
    title: "Task completed",
    description: "Website redesign phase 1",
    time: "3 hours ago",
    color: "secondary"
  },
  {
    id: 5,
    type: "user",
    icon: User,
    title: "Team member added",
    description: "Michael Chen added to Marketing team",
    time: "5 hours ago",
    color: "primary"
  },
];

export function ActivityFeed() {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="mb-6">
        <h3 className="text-foreground mb-1">Recent Activity</h3>
        <p className="text-sm text-muted-foreground">Latest updates and events</p>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          const bgColor = activity.color === "primary" ? "bg-primary/10" : "bg-secondary/10";
          const iconColor = activity.color === "primary" ? "text-primary" : "text-secondary";
          
          return (
            <div key={activity.id} className="flex items-start gap-4 group">
              <div className={`p-2 ${bgColor} rounded-lg`}>
                <Icon className={`w-4 h-4 ${iconColor}`} />
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                  {activity.title}
                </p>
                <p className="text-sm text-muted-foreground truncate">
                  {activity.description}
                </p>
              </div>
              
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                {activity.time}
              </span>
            </div>
          );
        })}
      </div>

      <button className="w-full mt-6 py-2 text-sm text-primary hover:text-primary/80 transition-colors">
        View all activity →
      </button>
    </div>
  );
}
