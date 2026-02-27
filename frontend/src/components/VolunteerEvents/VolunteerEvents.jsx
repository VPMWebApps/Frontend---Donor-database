function VolunteerEvents() {
  return (
    <div className="p-6 bg-[#f5e2e2] min-h-screen">
      <img
        src="src/images/vpm_pic1.jpg"
        alt="Event Group"
        className="w-full max-h-[500px] object-contain xl mb-6"
      />

      <h2 className="text-xl font-bold mb-4 text-black">
        VOLUNTEERING EVENT
      </h2>

      <div className="bg-white p-4 rounded-xl shadow mb-4 flex items-start gap-4 border border-[#FFD60A]">
        <div className="bg-[#016772] text-[#FFD60A] rounded-full px-4 py-2 text-center">
          <div className="font-bold text-lg">22</div>
          <div>
            NOV
            <br />
            2024
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-black">
            Cultural Fest: Celebrating Diversity
          </h3>
          <p className="text-sm text-black">
            A multi-day fest showcasing talents, cultures, and diversity among
            students including dance, music, and competitions.
          </p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow flex items-start gap-4 border border-[#FFD60A]">
        <div className="bg-[#016772] text-[#FFD60A] rounded-full px-4 py-2 text-center">
          <div className="font-bold text-lg">25</div>
          <div>
            NOV
            <br />
            2024
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-black">
            Guest Lecture Series: Insights from Industry Leaders
          </h3>
          <p className="text-sm text-black">
            Speakers from tech and research guide students with career insights
            and innovation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default VolunteerEvents;