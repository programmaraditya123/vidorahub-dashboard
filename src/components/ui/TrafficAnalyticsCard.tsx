import { useState } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import clsx from "clsx";

type TrafficAnalyticsCardProps = {
  title: string;
  subtitle: string;
  data: { name: string; value: number }[];
};

export default function TrafficAnalyticsCard({
  title,
  subtitle,
  data,
}: TrafficAnalyticsCardProps) {
  const [activeRange, setActiveRange] = useState("Live");

  return (
    <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-[#160022] to-[#0d0016] p-8 w-full">
      
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <p className="text-gray-400 text-sm">{subtitle}</p>
        </div>

        <div className="flex items-center gap-4 text-sm">
          {["Live", "24h", "7d"].map((range) => (
            <button
              key={range}
              onClick={() => setActiveRange(range)}
              className={clsx(
                "px-4 py-1.5 rounded-full transition-all duration-200",
                activeRange === range
                  ? "bg-purple-600/30 text-purple-300   border-purple-500/40"
                  : "text-gray-400 hover:text-white"
              )}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={40}>
            <CartesianGrid stroke="#2a003f" vertical={false} />
            <XAxis
              dataKey="name"
              stroke="#6b21a8"
              tick={{ fill: "#9ca3af", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              stroke="#6b21a8"
              tick={{ fill: "#9ca3af", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              cursor={{ fill: "rgba(168,85,247,0.1)" }}
              contentStyle={{
                background: "#0b0014",
                border: "1px solid rgba(168,85,247,0.3)",
                borderRadius: "12px",
                color: "#fff",
              }}
            />
            <Bar
              dataKey="value"
              fill="url(#purpleGradient)"
              radius={[12, 12, 0, 0]}
            />
            <defs>
              <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#d946ef" />
                <stop offset="100%" stopColor="#6b21a8" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}