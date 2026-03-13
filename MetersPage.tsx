import { waterMeters, buildings } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
const statusConfig = {
  normal: { label: "Normal", className: "bg-success/15 text-success border-success/30" },
  high: { label: "High Usage", className: "bg-warning/15 text-warning border-warning/30" },
  "leak-detected": { label: "Leak Detected", className: "bg-destructive/15 text-destructive border-destructive/30" },
  inactive: { label: "Inactive", className: "bg-muted text-muted-foreground border-border" },
};
export default function MetersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold text-foreground">Water Meters</h2>
        <p className="mt-1 text-sm text-muted-foreground">Monitor all smart meters across buildings</p>
      </div>
      <div className="glass-card overflow-hidden rounded-xl border border-border/50">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-muted-foreground">Unit</th>
                <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-muted-foreground">Tenant</th>
                <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-muted-foreground">Building</th>
                <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-muted-foreground">Reading</th>
                <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-muted-foreground">Daily (L)</th>
                <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-muted-foreground">Monthly (L)</th>
                <th className="px-5 py-3 text-center font-mono text-xs uppercase tracking-wider text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {waterMeters.map((m, i) => {
                const building = buildings.find((b) => b.id === m.buildingId);
                const cfg = statusConfig[m.status];
                return (
                  <motion.tr
                    key={m.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-border/30 hover:bg-muted/20 transition-colors"
                  >
                    <td className="px-5 py-3 font-mono font-medium text-foreground">{m.unitNumber}</td>
                    <td className="px-5 py-3 text-foreground">{m.tenantName}</td>
                    <td className="px-5 py-3 text-muted-foreground">{building?.name}</td>
                    <td className="px-5 py-3 text-right font-mono text-foreground">{m.currentReading.toLocaleString()}</td>
                    <td className="px-5 py-3 text-right font-mono text-foreground">{m.dailyUsage}</td>
                    <td className="px-5 py-3 text-right font-mono text-foreground">{m.monthlyUsage.toLocaleString()}</td>
                    <td className="px-5 py-3 text-center">
                      <span className={cn("inline-block rounded-full border px-2.5 py-0.5 text-[11px] font-medium", cfg.className)}>
                        {cfg.label}
                      </span>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
