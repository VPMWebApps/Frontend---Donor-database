function ResearchPrograms() {
  const programs = [
    "AI and ML Research program",
    "AI and ML Research program",
    "AI and ML Research program",
  ];

  return (
    <div className="p-6 space-y-6 bg-[#F4D6D6] min-h-screen">
      <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row items-center justify-between border border-[#D4AF37]">
        <div className="max-w-md">
          <h2 className="text-xl font-bold text-[#1E2A38] mb-2">
            “Every donation plants a seed of discovery”
          </h2>
          <p className="text-sm text-[#1E2A38]">
            Donate for our active research program and make a significant impact
            on scientific discovery.
          </p>
        </div>
        <div className="relative mt-4 md:mt-0">
          <img
            src="https://i.imgur.com/xZsYwoJ.jpg"
            alt="Research Suggestion"
            className="rounded-xl w-80 h-40 object-cover"
          />
          <div className="absolute top-2 left-2 bg-[#D4AF37] text-[#1E2A38] px-2 py-1 rounded text-xs">
            Suggestions
          </div>
          <div className="absolute bottom-2 left-2 text-white text-sm font-semibold">
            Research program on chemical
          </div>
          <button className="absolute bottom-2 right-2 bg-[#D4AF37] text-[#1E2A38] px-3 py-1 rounded text-sm hover:bg-[#C49B2F] cursor-pointer">
            Suggest
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-6 border border-[#D4AF37]">
        <h3 className="text-lg font-semibold mb-4 text-[#1E2A38]">
          RESEARCH TOPIC
        </h3>
        <ul className="space-y-4">
          {programs.map((prog, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center bg-[#F4D6D6] p-4 rounded-lg border border-[#D4AF37]"
            >
              <div>
                <h4 className="font-semibold text-[#1E2A38]">{prog}</h4>
                <span className="text-xs bg-[#D4AF37] text-[#1E2A38] px-2 py-1 rounded">
                  DETAILS
                </span>
              </div>
              <div className="space-x-2">
                <button className="border border-[#1E2A38] text-[#1E2A38] text-xs px-3 py-1 rounded hover:bg-[#F4D6D6] cursor-pointer">
                  Download
                </button>
                <button className="bg-[#D4AF37] text-[#1E2A38] text-xs px-3 py-1 rounded hover:bg-[#C49B2F] cursor-pointer">
                  Donate
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ResearchPrograms;