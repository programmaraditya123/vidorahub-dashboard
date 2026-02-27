import clsx from "clsx";
import { TrendingUp, TrendingDown } from "lucide-react";

type StatCardProps = {
  title: string;
  value: string | number;
  change: number;  
  changeLabel?: string;
};

export default function StatCard({
  title,
  value,
  change,
  changeLabel = "vs last month",
}: StatCardProps) {
  const isPositive = change >= 0;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-[#160022] to-[#0d0016] p-6 w-[320px]">
      
      {/* Background Decorative Shape */}
      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl" />

      <div className="relative z-10">
        <p className="text-gray-400 text-sm mb-2">{title}</p>

        <h2 className="text-4xl font-bold text-white tracking-wide mb-4">
          {value}
        </h2>

        <div
          className={clsx(
            "flex items-center gap-2 text-sm font-medium",
            isPositive ? "text-green-400" : "text-red-400"
          )}
        >
          {isPositive ? (
            <TrendingUp size={16} />
          ) : (
            <TrendingDown size={16} />
          )}

          <span>
            {isPositive ? "+" : ""}
            {change}% {changeLabel}
          </span>
        </div>
      </div>
    </div>
  );
}