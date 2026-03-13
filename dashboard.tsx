import { motion } from "framer-motion";
import { Droplets, Building2, Gauge, AlertTriangle, TrendingUp, IndianRupee } from "lucide-react";
import StatCard from "@/components/StatCard";
import UsageChart from "@/components/UsageChart";
import DailyUsageChart from "@/components/DailyUsageChart";
import AlertsList from "@/components/AlertsList";
import { buildings, waterMeters, billingRecords, alerts } from "@/data/mockData";
export default function Dashboard() {
  const totalUsageToday = buildings.reduce((s, b) => s + b.totalUsageToday, 0);
  const activeMeters = waterMeters.filter((m) => m.status !== "inactive").length;
  const pendingBills = billingRecords.filter((b) => b.status !== "paid").reduce((s, b) => s + b.amount, 0);
  const activeAlerts = alerts.filter((a) => !a.resolved).length;
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h2 className="font-display text-2xl font-bold text-foreground">Dashboard</h2>
        <p className="mt-1 text-sm text-muted-foreground">Real-time water monitoring across all buildings</p>
      </motion.div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Today's Usage" value={`${(totalUsageToday / 1000).toFixed(1)}k L`} subtitle="All buildings" icon={Droplets} variant="primary" trend={{ value: "3.2% vs yesterday", positive: false }} />
        <StatCard title="Active Meters" value={`${activeMeters}`} subtitle={`of ${waterMeters.length} total`} icon={Gauge} variant="success" />
        <StatCard title="Pending Bills" value={`₹${pendingBills.toFixed(0)}`} subtitle={`${billingRecords.filter(b => b.status !== "paid").length} invoices`} icon={IndianRupee} variant="warning" />
        <StatCard title="Active Alerts" value={`${activeAlerts}`} subtitle="Requires attention" icon={AlertTriangle} variant={activeAlerts > 2 ? "destructive" : "default"} />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <UsageChart />
        <DailyUsageChart />
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h3 className="mb-3 font-display text-sm font-semibold text-foreground">Building Overview</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {buildings.map((b) => (
              <div key={b.id} className="glass-card flex items-center gap-4 rounded-xl p-4">
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${b.status === "alert" ? "bg-destructive/15 text-destructive" : b.status === "warning" ? "bg-warning/15 text-warning" : "bg-primary/15 text-primary"}`}>
                  <Building2 className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{b.name}</p>
                  <p className="font-mono text-xs text-muted-foreground">{b.units} units · {(b.totalUsageToday / 1000).toFixed(1)}k L today</p>
                </div>
                <div className={`h-2 w-2 rounded-full ${b.status === "alert" ? "bg-destructive animate-pulse-glow" : b.status === "warning" ? "bg-warning" : "bg-success"}`} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-3 font-display text-sm font-semibold text-foreground">Recent Alerts</h3>
          <AlertsList limit={3} />
        </div>
      </div>
    </div>
  );
}
