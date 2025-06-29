
import { Card } from "@/components/ui/card"
import { CheckCircle, Circle, AlertTriangle, Activity } from "lucide-react"

const activities = [
  {
    label: "Storage",
    icon: <Circle className="text-green-500 h-2.5 w-2.5" />,
    time: "1.8 TB",
  },
  {
    label: "RAM",
    icon: <AlertTriangle className="text-yellow-500 h-2.5 w-2.5" />,
    time: "8 GB",
  },
  {
    label: "CPU",
    icon: <CheckCircle className="text-green-500 h-2.5 w-2.5" />,
    time: "6 vCore",
  },
  {
    label: "Bandwidth",
    icon: <Activity className="text-cyan-400 h-2.5 w-2.5" />,
    time: "32 TB /month",
  },
]

export default function NetworkActivity() {
  return (
    <Card className="w-full mt-4 p-4 bg-background border border-border rounded-xl">
      <div className="mb-3 text-sm font-semibold text-blue-300 uppercase tracking-widest">
        Plan Details
      </div>
      <ul className="space-y-3">
        {activities.map((activity, index) => (
          <li
            key={index}
            className="flex items-center justify-between text-sm text-gray-200"
          >
            <div className="flex text-md items-center space-x-2 ">
              {activity.icon}
              <span>{activity.time}</span>
            </div>
            <span className="text-xs text-gray-200">{activity.label}</span>
          </li>
        ))}
      </ul>
    </Card>
  )
}
