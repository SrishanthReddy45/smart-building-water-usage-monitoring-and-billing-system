import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import AppLayout from "@/components/AppLayout";
import Dashboard from "@/pages/Dashboard";
import MetersPage from "@/pages/MetersPage";
import BillingPage from "@/pages/BillingPage";
import AlertsPage from "@/pages/AlertsPage";
import NotFound from "./pages/NotFound.tsx";
const queryClient = new QueryClient();
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/meters" element={<MetersPage />} />
            <Route path="/billing" element={<BillingPage />} />
            <Route path="/alerts" element={<AlertsPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>