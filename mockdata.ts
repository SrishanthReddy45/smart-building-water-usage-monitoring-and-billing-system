// Mock data for the water monitoring system
export interface Building {
  id: string;
  name: string;
  floors: number;
  units: number;
  totalUsageToday: number; // liters
  totalUsageMonth: number;
  status: "normal" | "warning" | "alert";
}
export interface WaterMeter {
  id: string;
  buildingId: string;
  unitNumber: string;
  tenantName: string;
  currentReading: number;
  previousReading: number;
  dailyUsage: number;
  monthlyUsage: number;
  status: "normal" | "high" | "leak-detected" | "inactive";
}
export interface BillingRecord {
  id: string;
  meterId: string;
  tenantName: string;
  unitNumber: string;
  period: string;
  usage: number;
  ratePerLiter: number;
  amount: number;
  status: "paid" | "pending" | "overdue";
  dueDate: string;
}
export interface Alert {
  id: string;
  buildingId: string;
  type: "leak" | "high-usage" | "meter-fault" | "payment-overdue";
  message: string;
  severity: "low" | "medium" | "high" | "critical";
  timestamp: string;
  resolved: boolean;
}
export const buildings: Building[] = [
  { id: "b1", name: "Tower A - Riverside", floors: 24, units: 96, totalUsageToday: 12450, totalUsageMonth: 374200, status: "normal" },
  { id: "b2", name: "Tower B - Lakeview", floors: 18, units: 72, totalUsageToday: 9800, totalUsageMonth: 298500, status: "warning" },
  { id: "b3", name: "Block C - Gardens", floors: 8, units: 32, totalUsageToday: 4200, totalUsageMonth: 126800, status: "normal" },
  { id: "b4", name: "Block D - Central", floors: 12, units: 48, totalUsageToday: 7650, totalUsageMonth: 231400, status: "alert" },
];
export const waterMeters: WaterMeter[] = [
  { id: "m1", buildingId: "b1", unitNumber: "A-101", tenantName: "Ravi Kumar", currentReading: 45230, previousReading: 44890, dailyUsage: 340, monthlyUsage: 4520, status: "normal" },
  { id: "m2", buildingId: "b1", unitNumber: "A-202", tenantName: "Priya Sharma", currentReading: 38920, previousReading: 38450, dailyUsage: 470, monthlyUsage: 6100, status: "high" },
  { id: "m3", buildingId: "b1", unitNumber: "A-305", tenantName: "Amit Patel", currentReading: 52100, previousReading: 51980, dailyUsage: 120, monthlyUsage: 3200, status: "normal" },
  { id: "m4", buildingId: "b2", unitNumber: "B-104", tenantName: "Sneha Reddy", currentReading: 29340, previousReading: 28100, dailyUsage: 1240, monthlyUsage: 8900, status: "leak-detected" },
  { id: "m5", buildingId: "b2", unitNumber: "B-210", tenantName: "Vijay Singh", currentReading: 41500, previousReading: 41200, dailyUsage: 300, monthlyUsage: 4100, status: "normal" },
  { id: "m6", buildingId: "b3", unitNumber: "C-301", tenantName: "Anjali Desai", currentReading: 18700, previousReading: 18400, dailyUsage: 300, monthlyUsage: 3800, status: "normal" },
  { id: "m7", buildingId: "b4", unitNumber: "D-501", tenantName: "Karthik Nair", currentReading: 62300, previousReading: 61800, dailyUsage: 500, monthlyUsage: 5500, status: "high" },
  { id: "m8", buildingId: "b4", unitNumber: "D-103", tenantName: "Meera Joshi", currentReading: 15200, previousReading: 15200, dailyUsage: 0, monthlyUsage: 0, status: "inactive" },
];
export const billingRecords: BillingRecord[] = [
  { id: "bill1", meterId: "m1", tenantName: "Ravi Kumar", unitNumber: "A-101", period: "Feb 2026", usage: 4520, ratePerLiter: 0.08, amount: 361.60, status: "paid", dueDate: "2026-03-05" },
  { id: "bill2", meterId: "m2", tenantName: "Priya Sharma", unitNumber: "A-202", period: "Feb 2026", usage: 6100, ratePerLiter: 0.08, amount: 488.00, status: "pending", dueDate: "2026-03-15" },
  { id: "bill3", meterId: "m3", tenantName: "Amit Patel", unitNumber: "A-305", period: "Feb 2026", usage: 3200, ratePerLiter: 0.08, amount: 256.00, status: "paid", dueDate: "2026-03-05" },
  { id: "bill4", meterId: "m4", tenantName: "Sneha Reddy", unitNumber: "B-104", period: "Feb 2026", usage: 8900, ratePerLiter: 0.08, amount: 712.00, status: "overdue", dueDate: "2026-02-28" },
  { id: "bill5", meterId: "m5", tenantName: "Vijay Singh", unitNumber: "B-210", period: "Feb 2026", usage: 4100, ratePerLiter: 0.08, amount: 328.00, status: "pending", dueDate: "2026-03-15" },
  { id: "bill6", meterId: "m6", tenantName: "Anjali Desai", unitNumber: "C-301", period: "Feb 2026", usage: 3800, ratePerLiter: 0.08, amount: 304.00, status: "paid", dueDate: "2026-03-05" },
  { id: "bill7", meterId: "m7", tenantName: "Karthik Nair", unitNumber: "D-501", period: "Feb 2026", usage: 5500, ratePerLiter: 0.08, amount: 440.00, status: "pending", dueDate: "2026-03-15" },
  { id: "bill8", meterId: "m8", tenantName: "Meera Joshi", unitNumber: "D-103", period: "Feb 2026", usage: 0, ratePerLiter: 0.08, amount: 0, status: "paid", dueDate: "2026-03-05" },
];
export const alerts: Alert[] = [
  { id: "a1", buildingId: "b2", type: "leak", message: "Possible leak detected in Unit B-104. Usage 4x above normal.", severity: "critical", timestamp: "2026-03-12T08:15:00", resolved: false },
  { id: "a2", buildingId: "b4", type: "high-usage", message: "Unit D-501 exceeding daily usage threshold.", severity: "medium", timestamp: "2026-03-12T06:30:00", resolved: false },
  { id: "a3", buildingId: "b4", type: "meter-fault", message: "Meter in Unit D-103 reporting zero flow for 5 days.", severity: "high", timestamp: "2026-03-11T14:00:00", resolved: false },
  { id: "a4", buildingId: "b2", type: "payment-overdue", message: "Payment overdue for Unit B-104 (₹712.00).", severity: "medium", timestamp: "2026-03-10T09:00:00", resolved: false },
  { id: "a5", buildingId: "b1", type: "high-usage", message: "Tower A total consumption 8% above monthly average.", severity: "low", timestamp: "2026-03-09T12:00:00", resolved: true },
];
export const usageHistory = [
  { month: "Sep", tower_a: 340000, tower_b: 275000, block_c: 118000, block_d: 210000 },
  { month: "Oct", tower_a: 355000, tower_b: 282000, block_c: 122000, block_d: 218000 },
  { month: "Nov", tower_a: 362000, tower_b: 290000, block_c: 125000, block_d: 225000 },
  { month: "Dec", tower_a: 348000, tower_b: 278000, block_c: 119000, block_d: 215000 },
  { month: "Jan", tower_a: 368000, tower_b: 295000, block_c: 124000, block_d: 228000 },
  { month: "Feb", tower_a: 374200, tower_b: 298500, block_c: 126800, block_d: 231400 },
];
export const dailyUsage = [
  { hour: "00:00", usage: 120 },
  { hour: "02:00", usage: 80 },
  { hour: "04:00", usage: 60 },
  { hour: "06:00", usage: 320 },
  { hour: "08:00", usage: 580 },
  { hour: "10:00", usage: 420 },
  { hour: "12:00", usage: 510 },
  { hour: "14:00", usage: 380 },
  { hour: "16:00", usage: 440 },
  { hour: "18:00", usage: 620 },
  { hour: "20:00", usage: 480 },
  { hour: "22:00", usage: 250 },
];
