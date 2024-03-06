import React from "react";

// Reusable Component for Stats Display
const StatItem = ({ label, value }) => (
  <div className="flex gap-5 justify-between py-4 border-b border-solid border-b-[color:var(--day-gray-04,#D3E0E6)]">
    <div className="flex-auto text-sm leading-5 text-slate-500">{label}</div>
    <div className="flex-auto text-sm leading-5 text-right text-gray-900">
      {value}
    </div>
  </div>
);

// Main Component
const CryptoStats = () => {
  // Data for stats, to be replaced with dynamic data in real use cases
  const statsData = [
    { label: "Bitcoin Price", value: "$16,815.46" },
    { label: "24h Low / 24h High", value: "$16,382.07 / $16,874.12" },
    { label: "7d Low / 7d High", value: "$16,382.07 / $16,874.12" },
    { label: "Trading Volume", value: "$23,249,202,782" },
    { label: "Market Cap Rank", value: "#1" },
    { label: "Market Cap", value: "$323,507,290,047" },
    { label: "Market Cap Dominance", value: "38.343%" },
    { label: "Volume / Market Cap", value: "0.0718" },
    { label: "All-Time High", value: "$69,044.77 -75.6%" },
    { label: "All-Time Low", value: "$67.81 24729.1%" },
  ];

  return (
    <section className="flex flex-col max-w-[820px]">
      <header className="flex gap-1.5 self-start pr-20 text-xl font-semibold leading-5 text-gray-700 whitespace-nowrap max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <h1 className="grow">Fundamentals</h1>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a43ad8ea5bf1c379eb189c199abdc04ce743e51cc1aa243ed118a507856be2a9?apiKey=2b10f3d4f07b463b82ae2fcf31a50eea&"
          alt="Fundamentals Icon"
          className="w-5 aspect-square"
        />
      </header>
      <div className="mt-4 w-full max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pr-10 font-medium max-md:mt-10">
              {statsData.slice(0, 5).map((stat) => (
                <StatItem
                  key={stat.label}
                  label={stat.label}
                  value={stat.value}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10">
              {statsData.slice(5).map((stat) => (
                <StatItem
                  key={stat.label}
                  label={stat.label}
                  value={stat.value}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CryptoStats;