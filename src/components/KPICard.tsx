import { TrendingUp, TrendingDown, LucideIcon } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

interface KPICardProps {
  title: string;
  value: string;
  change: number;
  icon: LucideIcon;
  sparklineData?: number[];
}

export function KPICard({ title, value, change, icon: Icon, sparklineData }: KPICardProps) {
  const isPositive = change >= 0;
  
  const chartData = sparklineData?.map((value, index) => ({ value, index })) || [];

  return (
    <div className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-0.5 transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <p className="text-3xl text-foreground">{value}</p>
        </div>
        <div className="p-3 bg-primary/10 rounded-lg">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          {isPositive ? (
            <TrendingUp className="w-4 h-4 text-secondary" />
          ) : (
            <TrendingDown className="w-4 h-4 text-destructive" />
          )}
          <span className={`text-sm ${isPositive ? 'text-secondary' : 'text-destructive'}`}>
            {isPositive ? '+' : ''}{change}%
          </span>
          <span className="text-sm text-muted-foreground ml-1">vs last month</span>
        </div>
      </div>

      {sparklineData && sparklineData.length > 0 && (
        <div className="mt-4 h-12">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke={isPositive ? "#F97316" : "#EF4444"}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
