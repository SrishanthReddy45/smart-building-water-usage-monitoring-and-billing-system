import { alerts } from "@/data/mockData";
import { AlertTriangle, Droplets, Wrench, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";
const iconMap = { leak: Droplets, "high-usage": AlertTriangle, "meter-fault": Wrench, "payment-overdue": CreditCard };
const severityColors = {
  critical: "text-destructive bg-destructive/10",
  high: "text-warning bg-warning/10",
  medium: "text-accent bg-accent/10",
  low: "text-muted-foreground bg-muted",
};
export default function AlertsList({ limit }: { limit?: number }) {
  const items = limit ? alerts.filter((a) => !a.resolved).slice(0, limit) : alerts;
  return (
    <div className="space-y-3">
      {items.map((alert) => {
        const Icon = iconMap[alert.type];
        return (
          <div key={alert.id} className={cn("glass-card flex items-start gap-3 rounded-lg p-4", alert.resolved && "opacity-50")}>
            <div className={cn("flex h-8 w-8 shrink-0 items-center justify-center rounded-lg", severityColors[alert.severity])}>
              <Icon className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm text-foreground">{alert.message}</p>
              <div className="mt-1 flex items-center gap-3">
                <span className={cn("rounded-full px-2 py-0.5 font-mono text-[10px] uppercase", severityColors[alert.severity])}>
                  {alert.severity}
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">
                  {new Date(alert.timestamp).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
