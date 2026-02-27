type VerificationCardProps = {
  name: string;
  category: string;
  subscribers: string;
  avatar: string;
  onAccept?: () => void;
  onReview?: () => void;
};

export default function VerificationCard({
  name,
  category,
  subscribers,
  avatar,
  onAccept,
  onReview,
}: VerificationCardProps) {
  return (
    <div className="bg-[#1a0826] border border-purple-500/20 rounded-2xl p-5 flex-cols items-center justify-between transition hover:border-purple-500/40">
      
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="w-14 h-14 rounded-xl object-cover"
        />

        <div>
          <h3 className="text-white font-semibold text-lg">{name}</h3>
          <p className="text-gray-400 text-sm">
            {category} • {subscribers}
          </p>
        </div>
      </div>

      {/* Right Buttons */}
      <div className="flex items-center gap-3">
        <button
          onClick={onAccept}
          className="px-6 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white font-medium hover:brightness-110 transition"
        >
          Accept
        </button>

        <button
          onClick={onReview}
          className="px-6 py-2 rounded-xl bg-gray-700 text-gray-200 font-medium hover:bg-gray-600 transition"
        >
          Review
        </button>
      </div>
    </div>
  );
}