

import * as React from "react"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ChartContainer,
  ChartStyle,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { getVpsMetrics } from "@/services/backend.api"

const chartConfig = {
  plan: {
    label: "Plan Usage (MB)",
    color: "var(--chart-3)",
  },
} as const


const data = [
    { day: "Mon", plan: 40 },
    { day: "Tue", plan: 45 },
    { day: "Wed", plan: 42 },
    { day: "Thu", plan: 48 },
    { day: "Fri", plan: 50 },
    { day: "Sat", plan: 55 },
    { day: "Sun", plan: 53 },
  ]
 

export default function PlanUsageChart() {
  const chartId = "plan-usage"
 const [data, setData] = React.useState<{ day: string; memory: number }[]>([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await getVpsMetrics();
      if (data) {
        const ramData = data.data.bandwidth.map((item: { label: string; value: number }) => ({
          day: item.label,
          plan: Number((item.value).toFixed(1)), // Convert MB to GB
        }));
        setData(ramData);
      }
    };

    fetchData();
  }, []);
  return (
    <Card data-chart={chartId} className="w-full max-w-3xl shadow-[0_0_30px_#ff00c880]">
      <ChartStyle id={chartId} config={chartConfig} />
      <CardHeader className="flex-row items-start justify-between space-y-0 pb-0">
        <CardTitle className="text-xl font-semibold tracking-wide uppercase font-orbitron text-pink-300">
          Bandwidth USAGE
        </CardTitle>
     
      </CardHeader>

      <CardContent className="mt-2">
        <ChartContainer id={chartId} config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorPlan" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--chart-3)" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="var(--chart-3)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="day" tick={{ fill: "var(--foreground)" }} />
              <YAxis tick={{ fill: "var(--foreground)" }}                 domain={[0, (dataMax) => Math.ceil(dataMax * 1.1)]}
 />
              <Tooltip content={<ChartTooltipContent />} />
              <Area type="monotone" dataKey="plan" stroke="var(--chart-3)" fillOpacity={1} fill="url(#colorPlan)" />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="mt-4 flex justify-between text-xs text-muted-foreground">
                    <span></span>
          <span>Total Bandwidth: 32 TB</span>
        </div>
      </CardContent>
    </Card>
  )
}
