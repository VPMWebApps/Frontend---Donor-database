function ResearchPrograms() {
  const programs = [
    "AI and ML Research program",
    "AI and ML Research program",
    "AI and ML Research program",
  ];

  return (
    <div className="p-6 space-y-6 bg-[#f5e2e2] min-h-screen">
      
      <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row items-center justify-between border border-[#FFD60A]">
        
        <div className="max-w-md">
          <h2 className="text-xl font-bold text-black mb-2">
            “Every donation plants a seed of discovery”
          </h2>
          <p className="text-sm text-black">
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

          <div className="absolute top-2 left-2 bg-[#FFD60A] text-[#016772] px-2 py-1 rounded text-xs">
            Suggestions
          </div>

          <div className="absolute bottom-2 left-2 text-white text-sm font-semibold">
            Research program on chemical
          </div>

          <button className="absolute bottom-2 right-2 bg-[#FFD60A] text-[#016772] px-3 py-1 rounded text-sm hover:bg-[#E6B800] cursor-pointer">
            Suggest
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-6 border border-[#FFD60A]">
        
        <h3 className="text-lg font-semibold mb-4 text-black">
          RESEARCH TOPIC
        </h3>

        <ul className="space-y-4">
          {programs.map((prog, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center bg-[#f5e2e2] p-4 rounded-lg border border-[#FFD60A]"
            >
              <div>
                <h4 className="font-semibold text-black">
                  {prog}
                </h4>

                <span className="text-xs bg-[#FFD60A] text-[#016772] px-2 py-1 rounded">
                  DETAILS
                </span>
              </div>

              <div className="space-x-2">
                <button className="border border-[#016772] text-black text-xs px-3 py-1 rounded hover:bg-[#f5e2e2] cursor-pointer">
                  Download
                </button>

                <button className="bg-[#FFD60A] text-[#016772] text-xs px-3 py-1 rounded hover:bg-[#E6B800] cursor-pointer">
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