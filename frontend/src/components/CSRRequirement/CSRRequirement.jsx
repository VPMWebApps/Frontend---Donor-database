const CSRRequirement = () => {
  return (
    <div className="min-h-screen bg-[#f5e2e2] p-10">
      <div className="flex flex-col md:flex-row justify-center gap-8">
        
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xs text-center border border-[#FFD60A]">
          <img src="src/images/vpm-logo.png" alt="Institution" className="w-48 mx-auto mb-4" />
          
          <h3 className="font-semibold text-lg mb-2 text-black">
            INSTITUTION WISE REQUIREMENT
          </h3>

          <button className="bg-[#FFD60A] text-[#016772] px-4 py-2 rounded-md hover:bg-[#E6B800] cursor-pointer">
            ADD REQUIREMENT
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xs text-center border border-[#FFD60A]">
          <img src="src/images/sdgl_1.png" alt="SDG" className="w-48 mx-auto mb-4" />
          
          <h3 className="font-semibold text-lg mb-2 text-black">
            SUSTAINABILITY DEVELOPMENT GOAL
          </h3>

          <button className="bg-[#FFD60A] text-[#016772] px-4 py-2 rounded-md hover:bg-[#E6B800] cursor-pointer">
            ADD REQUIREMENT
          </button>
        </div>

      </div>
    </div>
  );
};

export default CSRRequirement;