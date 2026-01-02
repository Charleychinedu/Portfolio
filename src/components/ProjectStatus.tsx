import { Badge } from "./ui/badge";
import { MoreVertical } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Website Redesign",
    client: "Acme Corp",
    status: "active",
    progress: 75,
    deadline: "Oct 20, 2025"
  },
  {
    id: 2,
    name: "Mobile App Development",
    client: "TechStart Inc",
    status: "pending",
    progress: 30,
    deadline: "Nov 15, 2025"
  },
  {
    id: 3,
    name: "Brand Identity",
    client: "Creative Co",
    status: "active",
    progress: 90,
    deadline: "Oct 18, 2025"
  },
  {
    id: 4,
    name: "E-commerce Platform",
    client: "Retail Plus",
    status: "completed",
    progress: 100,
    deadline: "Oct 10, 2025"
  },
  {
    id: 5,
    name: "Marketing Campaign",
    client: "Growth Labs",
    status: "active",
    progress: 45,
    deadline: "Oct 30, 2025"
  },
];

export function ProjectStatus() {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case "active":
        return "default";
      case "pending":
        return "secondary";
      case "completed":
        return "outline";
      default:
        return "default";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-primary";
      case "pending":
        return "bg-secondary";
      case "completed":
        return "bg-muted-foreground";
      default:
        return "bg-muted";
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="mb-6">
        <h3 className="text-foreground mb-1">Project Status</h3>
        <p className="text-sm text-muted-foreground">Track ongoing projects</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left pb-3 text-sm text-muted-foreground">Project</th>
              <th className="text-left pb-3 text-sm text-muted-foreground hidden md:table-cell">Client</th>
              <th className="text-left pb-3 text-sm text-muted-foreground">Status</th>
              <th className="text-left pb-3 text-sm text-muted-foreground hidden sm:table-cell text-[14px]">Progress</th>
              <th className="text-left pb-3 text-sm text-muted-foreground hidden lg:table-cell">Deadline</th>
              <th className="w-10 pb-3"></th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className="border-b border-border last:border-0 hover:bg-accent/50 transition-colors">
                <td className="py-4">
                  <p className="text-sm text-foreground">{project.name}</p>
                </td>
                <td className="py-4 hidden md:table-cell">
                  <p className="text-sm text-muted-foreground">{project.client}</p>
                </td>
                <td className="py-4 text-left">
                  <Badge 
                    variant={getStatusVariant(project.status)}
                    className={`${
                      project.status === 'active' ? 'bg-primary text-primary-foreground hover:bg-primary/90' :
                      project.status === 'pending' ? 'bg-secondary text-secondary-foreground hover:bg-secondary/90' :
                      'bg-muted text-muted-foreground hover:bg-muted/90'
                    }`}
                  >
                    {project.status}
                  </Badge>
                </td>
                <td className="py-4 hidden sm:table-cell">
                  <div className="flex items-center gap-2 mx-[15px] my-[0px]">
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden max-w-[100px]">
                      <div 
                        className={`h-full ${getStatusColor(project.status)}`}
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground mx-[-2px] my-[0px]">{project.progress}%</span>
                  </div>
                </td>
                <td className="py-4 hidden lg:table-cell">
                  <p className="text-sm text-muted-foreground">{project.deadline}</p>
                </td>
                <td className="py-4">
                  <button className="p-1 hover:bg-accent rounded transition-colors">
                    <MoreVertical className="w-4 h-4 text-muted-foreground" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
