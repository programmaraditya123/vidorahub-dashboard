import PendingVerifications from "../components/ui/PendingVerifications";
import StatCard from "../components/ui/StatCard";
import TrafficAnalyticsCard from "../components/ui/TrafficAnalyticsCard";

const Overview = () => {
  const trafficData = [
    { name: "Mon", value: 400 },
    { name: "Tue", value: 250 },
    { name: "Wed", value: 450 },
    { name: "Thu", value: 350 },
    { name: "Fri", value: 600 },
    { name: "Sat", value: 500 },
    { name: "Sun", value: 300 },
  ];

  const creators = [
    {
      id: 1,
      name: "MidnightGamer",
      category: "Gaming",
      subscribers: "45.2K Subs",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 2,
      name: "TechVibes",
      category: "Tech",
      subscribers: "12K Subs",
      avatar: "https://i.pravatar.cc/150?img=32",
    },
    {
      id: 3,
      name: "LunaChef",
      category: "Lifestyle",
      subscribers: "89K Subs",
      avatar: "https://i.pravatar.cc/150?img=45",
    },
    {
      id: 4,
      name: "LunaChef",
      category: "Lifestyle",
      subscribers: "89K Subs",
      avatar: "https://i.pravatar.cc/150?img=45",
    },
    {
      id: 5,
      name: "LunaChef",
      category: "Lifestyle",
      subscribers: "89K Subs",
      avatar: "https://i.pravatar.cc/150?img=45",
    },
  ];
  return (
    <>
      <div className="flex justify-between">
        <StatCard title="Total Active Users" value="2,482,104" change={12.5} />
        <StatCard title="Daily Uploads" value="1000" change={-3.2} />

        <StatCard title="Active Reports" value="1000" change={11} />

        <StatCard title="Monthly Revenue" value="₹8,24,000" change={-3.2} />
      </div>

      <div className="flex mt-8 gap-8 ">
        <TrafficAnalyticsCard
          title="Platform Traffic Analytics"
          subtitle="Real-time global request metrics"
          data={trafficData}
        />
        <div className="h-40">
          <PendingVerifications creators={creators} />
        </div>
      </div>
    </>
  );
};

export default Overview;
