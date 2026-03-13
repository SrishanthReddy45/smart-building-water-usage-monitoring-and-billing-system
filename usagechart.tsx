import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { usageHistory } from "@/data/mockData";
export default function UsageChart() {
  return (
    <div className="glass-card rounded-xl border border-border/50 p-5">
      <h3 className="mb-4 font-display text-sm font-semibold text-foreground">Monthly Water Consumption (Liters)</h3>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={usageHistory} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="gradA" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(199, 80%, 55%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(199, 80%, 55%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="gradB" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(174, 62%, 47%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(174, 62%, 47%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(210, 20%, 18%)" />
            <XAxis dataKey="month" tick={{ fill: "hsl(210, 15%, 55%)", fontSize: 12 }} axisLine={false} />
            <YAxis tick={{ fill: "hsl(210, 15%, 55%)", fontSize: 11 }} axisLine={false} tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`} />
            <Tooltip
              contentStyle={{
                background: "hsl(210, 28%, 10%)",
                border: "1px solid hsl(210, 20%, 18%)",
                borderRadius: "8px",
                fontSize: 12,
                color: "hsl(200, 20%, 92%)",
              }}
              formatter={(value: number) => [`${value.toLocaleString()} L`, ""]}
            />
            <Area type="monotone" dataKey="tower_a" stroke="hsl(199, 80%, 55%)" fill="url(#gradA)" strokeWidth={2} name="Tower A" />
            <Area type="monotone" dataKey="tower_b" stroke="hsl(174, 62%, 47%)" fill="url(#gradB)" strokeWidth={2} name="Tower B" />
            <Area type="monotone" dataKey="block_c" stroke="hsl(38, 92%, 55%)" fill="none" strokeWidth={1.5} strokeDasharray="4 4" name="Block C" />
            <Area type="monotone" dataKey="block_d" stroke="hsl(0, 72%, 55%)" fill="none" strokeWidth={1.5} strokeDasharray="4 4" name="Block D" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
