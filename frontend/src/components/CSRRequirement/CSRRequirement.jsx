const CSRRequirement = () => {
  return (
    <div className="min-h-screen #FCE7F3 p-10">
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xs text-center">
          <img src="src/images/vpm-logo.png" alt="Institution" className="w-48 mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">INSTITUTION WISE REQUIREMENT</h3>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
            ADD REQUIREMENT
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xs text-center">
          <img src="src/images/sdgl_1.png" alt="SDG" className="w-48 mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2">SUSTAINABILITY DEVELOPMENT GOAL</h3>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700">
            ADD REQUIREMENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default CSRRequirement;
