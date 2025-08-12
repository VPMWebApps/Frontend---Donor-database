function ResearchPrograms() {
  const programs = [
    "AI and ML Research program",
    "AI and ML Research program",
    "AI and ML Research program",
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-md">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            “Every donation plants a seed of discovery”
          </h2>
          <p className="text-sm text-gray-600">
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
          <div className="absolute top-2 left-2 bg-pink-600 text-white px-2 py-1 rounded text-xs">
            Suggestions
          </div>
          <div className="absolute bottom-2 left-2 text-white text-sm font-semibold">
            Research program on chemical
          </div>
          <button className="absolute bottom-2 right-2 bg-pink-500 text-white px-3 py-1 rounded text-sm">
            Suggest
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="text-lg font-semibold mb-4">RESEARCH TOPIC</h3>
        <ul className="space-y-4">
          {programs.map((prog, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"
            >
              <div>
                <h4 className="font-semibold">{prog}</h4>
                <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded">
                  DETAILS
                </span>
              </div>
              <div className="space-x-2">
                <button className="bg-gray-300 text-xs px-3 py-1 rounded">
                  Download
                </button>
                <button className="bg-pink-500 text-white text-xs px-3 py-1 rounded">
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
