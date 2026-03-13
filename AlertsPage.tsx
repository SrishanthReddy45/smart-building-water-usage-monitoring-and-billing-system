import AlertsList from "@/components/AlertsList";
export default function AlertsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold text-foreground">Alerts & Notifications</h2>
        <p className="mt-1 text-sm text-muted-foreground">Monitor leaks, faults, and payment issues</p>
      </div>
      <AlertsList />
    </div>
  );
}