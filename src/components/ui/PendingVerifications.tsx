import VerificationCard from "./VerificationCard";

type Creator = {
  id: number;
  name: string;
  category: string;
  subscribers: string;
  avatar: string;
};

type PendingVerificationsProps = {
  creators: Creator[];
};

export default function PendingVerifications({
  creators,
}: PendingVerificationsProps) {
  return (
    <div className="flex flex-col h-[430px] rounded-3xl border border-purple-500/20 bg-gradient-to-br from-[#160022] to-[#0d0016] p-8 w-full">
      
      {/* Header */}
      <h2 className="text-2xl font-semibold text-white mb-6 shrink-0">
        Pending Verifications
      </h2>

      {/* Scrollable List */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-6">
        {creators.map((creator) => (
          <VerificationCard
            key={creator.id}
            {...creator}
            onAccept={() => console.log("Accepted:", creator.name)}
            onReview={() => console.log("Review:", creator.name)}
          />
        ))}
      </div>
    </div>
  );
}