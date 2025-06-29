
import * as React from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
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
  memory: {
    label: "Memory Usage (MB)",
    color: "var(--chart-4)",
  },
} as const

const totalMemory = 128



export default function MemoryUsageChart() {

 const [data, setData] = React.useState<{ day: string; memory: number }[]>([]);
  const chartId = "memory-usage";
  React.useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await getVpsMetrics();
      if (data) {
        const ramData = data.data.ram.map((item: { label: string; value: number }) => ({
          day: item.label,
          memory: Number((item.value).toFixed(1)), // Convert MB to GB
        }));
        setData(ramData);
      }
    };

    fetchData();
  }, []);

  return (
    <Card data-chart={chartId} className="w-full max-w-3xl shadow-[0_0_30px_#00ffaa80]">
      <ChartStyle id={chartId} config={chartConfig} />
      <CardHeader className="flex-row items-start justify-between space-y-0 pb-0">
        <CardTitle className="text-xl font-semibold tracking-wide uppercase font-orbitron text-green-300">
          Memory Usage
        </CardTitle>
      
      </CardHeader>

      <CardContent className="mt-2">
        <ChartContainer id={chartId} config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="day" tick={{ fill: "var(--foreground)" }} />
              <YAxis tick={{ fill: "var(--foreground)" }} domain={[0, totalMemory]} />
              <Tooltip content={<ChartTooltipContent />} />
              <Bar dataKey="memory" radius={[4, 4, 0, 0]}>
                {data.map((_, i) => (
                  <Cell key={i} fill="var(--chart-4)" />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="mt-4 flex justify-between text-xs text-muted-foreground">
          <span></span>
          <span>Total RAM: 8 GB</span>
        </div>
      </CardContent>
    </Card>
  )
}
