import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { month: "Jan", revenue: 45000, expenses: 32000 },
  { month: "Feb", revenue: 52000, expenses: 35000 },
  { month: "Mar", revenue: 48000, expenses: 33000 },
  { month: "Apr", revenue: 61000, expenses: 38000 },
  { month: "May", revenue: 55000, expenses: 36000 },
  { month: "Jun", revenue: 67000, expenses: 40000 },
  { month: "Jul", revenue: 72000, expenses: 42000 },
  { month: "Aug", revenue: 68000, expenses: 41000 },
  { month: "Sep", revenue: 78000, expenses: 44000 },
  { month: "Oct", revenue: 85000, expenses: 46000 },
];

export function RevenueChart() {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-foreground mb-1">Revenue Overview</h3>
          <p className="text-sm text-muted-foreground">Monthly revenue and expenses</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span className="text-sm text-muted-foreground">Revenue</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-secondary"></div>
            <span className="text-sm text-muted-foreground">Expenses</span>
          </div>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#F97316" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#F97316" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey="month" 
              stroke="#D1D5DB"
              tick={{ fill: '#D1D5DB' }}
            />
            <YAxis 
              stroke="#D1D5DB"
              tick={{ fill: '#D1D5DB' }}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937', 
                border: '1px solid #374151',
                borderRadius: '0.5rem',
                color: '#F9FAFB'
              }}
              formatter={(value: number) => `$${value.toLocaleString()}`}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#3B82F6"
              strokeWidth={2}
              fill="url(#colorRevenue)"
            />
            <Area
              type="monotone"
              dataKey="expenses"
              stroke="#F97316"
              strokeWidth={2}
              fill="url(#colorExpenses)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
