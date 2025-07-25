import * as React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartStyle,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { getVpsMetrics } from "@/services/backend.api";

const chartConfig = {
  cpu: {
    label: "CPU Usage (%)",
    color: "var(--chart-1)",
  },
} as const;

export default function CpuUsageChart() {
  const [data, setData] = React.useState<{ day: string; cpu: number }[]>([]);
  const chartId = "cpu-usage";

  React.useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await getVpsMetrics();
      if (data) {
        const cpuData = data.data.cpu.map((item: { label: string; value: number }) => ({
          day: item.label,
          cpu: Number(item.value.toFixed(1)),
        }));
        setData(cpuData);
      }
    };

    fetchData();
  }, []);

  return (
    <Card className="w-full max-w-3xl">
      <ChartStyle id={chartId} config={chartConfig} />
      <CardHeader className="flex-row items-start justify-between space-y-0 pb-0">
        <CardTitle className="text-xl font-semibold tracking-wide uppercase font-orbitron text-blue-300">
          CPU Usage
        </CardTitle>
      </CardHeader>

      <CardContent className="mt-2">
        <ChartContainer id={chartId} config={chartConfig}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="day" tick={{ fill: "var(--foreground)" }} />
              <YAxis
                tick={{ fill: "var(--foreground)" }}
                domain={[0, (dataMax) => Math.ceil(dataMax * 1.01)]}
              />
              <Tooltip content={<ChartTooltipContent />} />
              <Bar dataKey="cpu" radius={[4, 4, 0, 0]}>
                {data.map((_, i) => (
                  <Cell key={i} fill="var(--chart-1)" />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
