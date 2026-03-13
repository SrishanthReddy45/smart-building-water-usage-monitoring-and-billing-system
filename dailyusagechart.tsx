import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { dailyUsage } from "@/data/mockData";
export default function DailyUsageChart() {
  return (
    <div className="glass-card rounded-xl border border-border/50 p-5">
      <h3 className="mb-4 font-display text-sm font-semibold text-foreground">Today's Usage Pattern (Liters/hr)</h3>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dailyUsage} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(210, 20%, 18%)" vertical={false} />
            <XAxis dataKey="hour" tick={{ fill: "hsl(210, 15%, 55%)", fontSize: 11 }} axisLine={false} />
            <YAxis tick={{ fill: "hsl(210, 15%, 55%)", fontSize: 11 }} axisLine={false} />
            <Tooltip
              contentStyle={{
                background: "hsl(210, 28%, 10%)",
                border: "1px solid hsl(210, 20%, 18%)",
                borderRadius: "8px",
                fontSize: 12,
                color: "hsl(200, 20%, 92%)",
              }}
            />
            <Bar dataKey="usage" fill="hsl(174, 62%, 47%)" radius={[4, 4, 0, 0]} opacity={0.85} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
