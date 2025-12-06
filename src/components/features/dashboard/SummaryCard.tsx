import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  CreditCard,
  DollarSign,
  PiggyBank,
  TrendingDown,
  TrendingUp,
  Wallet,
} from "lucide-react";

const insights = [
  {
    icon: DollarSign,
    label: "Total Revenue",
    value: "Rp 245.8M",
    change: "+12.5%",
    trend: "up" as const,
  },
  {
    icon: Wallet,
    label: "Net Profit",
    value: "Rp 32.4M",
    change: "+8.2%",
    trend: "up" as const,
  },
  {
    icon: PiggyBank,
    label: "Cash Balance",
    value: "Rp 78.2M",
    change: "-3.1%",
    trend: "down" as const,
  },
  {
    icon: CreditCard,
    label: "Total Debt",
    value: "Rp 125.0M",
    change: "-5.4%",
    trend: "up" as const,
  },
];

const SummaryCard = () => {
  return (
    <div className="py-6 flex items-center gap-4">
      {insights.map((insight) => (
        <Card key={insight.label} className="max-w-sm flex-1">
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="bg-accent rounded-xl p-3">
                <insight.icon className="text-accent-foreground size-6" />
              </div>
              <div className="flex gap-2 items-center">
                {insight.trend === "up" ? (
                  <>
                    <TrendingUp size={20} className="text-green-600" />
                    <p className="text-green-600 font-semibold">
                      {insight.change}
                    </p>
                  </>
                ) : (
                  <>
                    <TrendingDown
                      className="text-red-500"
                      size={20}
                      color="red"
                    />
                    <p className="text-red-500 font-semibold">
                      {insight.change}
                    </p>
                  </>
                )}
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">{insight.label}</p>
              <h3 className="text-2xl font-bold">{insight.value}</h3>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SummaryCard;
