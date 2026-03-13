import { billingRecords } from "@/data/mockData";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
const statusConfig = {
  paid: { label: "Paid", className: "bg-success/15 text-success border-success/30" },
  pending: { label: "Pending", className: "bg-warning/15 text-warning border-warning/30" },
  overdue: { label: "Overdue", className: "bg-destructive/15 text-destructive border-destructive/30" },
};
export default function BillingPage() {
  const totalRevenue = billingRecords.reduce((s, b) => s + b.amount, 0);
  const collected = billingRecords.filter((b) => b.status === "paid").reduce((s, b) => s + b.amount, 0);
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold text-foreground">Billing & Invoices</h2>
        <p className="mt-1 text-sm text-muted-foreground">Manage water bills and payment tracking</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="glass-card rounded-xl p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Total Billed</p>
          <p className="mt-2 font-display text-2xl font-bold text-foreground">₹{totalRevenue.toFixed(0)}</p>
        </div>
        <div className="glass-card rounded-xl p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Collected</p>
          <p className="mt-2 font-display text-2xl font-bold text-success">₹{collected.toFixed(0)}</p>
        </div>
        <div className="glass-card rounded-xl p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Outstanding</p>
          <p className="mt-2 font-display text-2xl font-bold text-warning">₹{(totalRevenue - collected).toFixed(0)}</p>
        </div>
      </div>
      <div className="glass-card overflow-hidden rounded-xl border border-border/50">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-muted-foreground">Unit</th>
                <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-muted-foreground">Tenant</th>
                <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-muted-foreground">Period</th>
                <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-muted-foreground">Usage (L)</th>
                <th className="px-5 py-3 text-right font-mono text-xs uppercase tracking-wider text-muted-foreground">Amount</th>
                <th className="px-5 py-3 text-left font-mono text-xs uppercase tracking-wider text-muted-foreground">Due Date</th>
                <th className="px-5 py-3 text-center font-mono text-xs uppercase tracking-wider text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {billingRecords.map((b, i) => {
                const cfg = statusConfig[b.status];
                return (
                  <motion.tr
                    key={b.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-border/30 hover:bg-muted/20 transition-colors"
                  >
                    <td className="px-5 py-3 font-mono font-medium text-foreground">{b.unitNumber}</td>
                    <td className="px-5 py-3 text-foreground">{b.tenantName}</td>
                    <td className="px-5 py-3 text-muted-foreground">{b.period}</td>
                    <td className="px-5 py-3 text-right font-mono text-foreground">{b.usage.toLocaleString()}</td>
                    <td className="px-5 py-3 text-right font-mono font-medium text-foreground">₹{b.amount.toFixed(2)}</td>
                    <td className="px-5 py-3 font-mono text-muted-foreground">{b.dueDate}</td>
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
