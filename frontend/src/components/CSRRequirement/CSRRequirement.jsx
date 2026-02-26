const CSRRequirement = () => {
  return (
    <div className="min-h-screen bg-[#F4D6D6] p-10">
      <div className="flex flex-col md:flex-row justify-center gap-8">
        
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xs text-center border border-[#D4AF37]">
          <img src="src/images/vpm-logo.png" alt="Institution" className="w-48 mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2 text-[#1E2A38]">
            INSTITUTION WISE REQUIREMENT
          </h3>
          <button className="bg-[#D4AF37] text-[#1E2A38] px-4 py-2 rounded-md hover:bg-[#C49B2F] cursor-pointer">
            ADD REQUIREMENT
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xs text-center border border-[#D4AF37]">
          <img src="src/images/sdgl_1.png" alt="SDG" className="w-48 mx-auto mb-4" />
          <h3 className="font-semibold text-lg mb-2 text-[#1E2A38]">
            SUSTAINABILITY DEVELOPMENT GOAL
          </h3>
          <button className="bg-[#D4AF37] text-[#1E2A38] px-4 py-2 rounded-md hover:bg-[#C49B2F] cursor-pointer">
            ADD REQUIREMENT
          </button>
        </div>

      </div>
    </div>
  );
};

export default CSRRequirement;