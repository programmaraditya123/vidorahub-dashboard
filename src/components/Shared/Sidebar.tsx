import {
  LayoutDashboard,
  Users,
  ShieldCheck,
  Flag,
  DollarSign,
  FileText,
  LogOut,
  Rocket,
} from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Overview", path: "/", icon: LayoutDashboard },
  { name: "Users", path: "/users", icon: Users },
  { name: "Creators", path: "/creators", icon: Flag },
  { name: "Videos", path: "/videos", icon: ShieldCheck },
  { name: "Complaints", path: "/complaints", icon: DollarSign },
  { name: "System Logs", path: "/systemstatus", icon: FileText },
];

export default function Sidebar() {
  const [active, setActive] = useState("Overview");

  return (
    <aside className="w-72 h-screen bg-[#0b0014] text-white flex flex-col justify-between px-6 py-8 border-r border-purple-900/20">
      {/* Top Section */}
      <div>
        {/* Logo */}
        <div className="flex items-center gap-3 mb-12">
          <div className="bg-purple-600/20 backdrop-blur-md p-3 rounded-2xl border border-purple-500/20">
            <Rocket className="text-purple-400" size={20} />
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-wide text-purple-400">
              VidoraHub
            </h1>
            <p className="text-xs text-gray-500">Version v1.0</p>
          </div>
        </div>

        {/* Menu */}
        <nav className="space-y-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.name;

            return (
              <NavLink
                to={item.path}
                key={item.name}
                className={({ isActive }) =>
                  clsx(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 group border",
                    isActive
                      ? "bg-purple-600/30 border-purple-500/40 text-white"
                      : "border-transparent text-gray-400 hover:bg-purple-600/10 hover:text-white",
                  )
                }
              >
                <Icon size={18} />
                <span className="text-sm font-medium">{item.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Bottom User Card */}
      <div className="pt-6 border-t border-purple-900/20">
        <div className="bg-gradient-to-r from-purple-600/10 to-purple-500/5 backdrop-blur-lg border border-purple-500/20 p-4 rounded-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-600/30 flex items-center justify-center text-sm font-bold text-purple-300">
              A
            </div>
            <div>
              <p className="text-sm font-semibold">Aditya Saini</p>
              <p className="text-xs text-purple-400 tracking-wide">
                ADMIN
              </p>
            </div>
          </div>
          {/* <LogOut
            size={16}
            className="text-gray-400 hover:text-purple-400 cursor-pointer transition"
          /> */}
        </div>
      </div>
    </aside>
  );
}
