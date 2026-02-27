import React, { useState } from "react";

const students = [
  {
    id: 1,
    name: "Aarav Patil",
    grade: "8th",
    category: "Subscription",
    urgency: "High",
    required: 1500,
    raised: 6000,
    summary: "GPT Subscription support for Aarav.",
    background:
      "Aarav is a bright student from a low-income family. His parents are daily wage workers and struggle to pay full school fees.",
  },
  {
    id: 2,
    name: "Sneha Gupta",
    grade: "10th",
    category: "Certificate Sponsorship",
    urgency: "Medium",
    required: 5000,
    raised: 2500,
    summary: "Support Sneha with latest project management course",
    background:
      "Sneha is a bright student wanting to pursue a career in project management but lacks resources for certification.",
  },
  {
    id: 3,
    name: "Imran Khan",
    grade: "12th",
    category: "Certificate Sponsorship",
    urgency: "Medium",
    required: 12000,
    raised: 4000,
    summary:
      "Help Imran become a video editing expert, by buying him premium courses.",
    background:
      "Imran wants to pursue professional video editing courses to enhance his skills but cannot afford the fees.",
  },
];

const Sponsor = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [gradeFilter, setGradeFilter] = useState("All");
  const [urgencyFilter, setUrgencyFilter] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [selectedStudent, setSelectedStudent] = useState(null);

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGrade =
      gradeFilter === "All" || student.grade === gradeFilter;
    const matchesUrgency =
      urgencyFilter === "All" || student.urgency === urgencyFilter;
    const matchesCategory =
      categoryFilter === "All" || student.category === categoryFilter;

    return matchesSearch && matchesGrade && matchesUrgency && matchesCategory;
  });

  return (
    <div className="p-6 bg-[#F4D6D6] min-h-screen">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-black">
            SPONSOR STUDENT PROJECT
          </h1>
          <p className="text-black mt-2 text-sm md:text-base">
            Support students by sponsoring their education, courses and necessary technical resources.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 mb-6 shadow-sm border border-[#FFD60A]">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <input
            type="text"
            placeholder="Search student by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-[#016772] rounded-md px-4 py-2 w-full md:w-1/3 text-black"
          />

          <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
            <select
              value={gradeFilter}
              onChange={(e) => setGradeFilter(e.target.value)}
              className="border border-[#016772] rounded-md px-3 py-2 w-full md:w-40 text-sm text-black cursor-pointer"
            >
              <option value="All">All Grades</option>
              <option value="8th">8th</option>
              <option value="10th">10th</option>
              <option value="12th">12th</option>
            </select>

            <select
              value={urgencyFilter}
              onChange={(e) => setUrgencyFilter(e.target.value)}
              className="border border-[#016772] rounded-md px-3 py-2 w-full md:w-40 text-sm text-black cursor-pointer"
            >
              <option value="All">All Urgency</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>

            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="border border-[#016772] rounded-md px-3 py-2 w-full md:w-48 text-sm text-black cursor-pointer"
            >
              <option value="All">All Categories</option>
              <option value="School Fees">School Fees</option>
              <option value="Books & Stationery">Books & Stationery</option>
              <option value="Exam Coaching">Exam Coaching</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredStudents.map((student) => {
          const progress = Math.min(
            100,
            Math.round((student.raised / student.required) * 100)
          );

          return (
            <div
              key={student.id}
              className="bg-white rounded-xl shadow-sm p-4 flex flex-col justify-between border border-[#FFD60A]"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-lg font-semibold text-black">
                    {student.name}
                  </h2>
                  <span className="text-xs px-2 py-1 rounded-full bg-[#F4D6D6] text-black">
                    {student.grade}
                  </span>
                </div>

                <p className="text-xs text-black mb-1">
                  Category: <span className="font-medium">{student.category}</span>
                </p>

                <p className="text-xs text-black mb-2">
                  Urgency: <span className="font-semibold text-[#FFD60A]">{student.urgency}</span>
                </p>

                <p className="text-sm text-black mb-3">
                  {student.summary}
                </p>

                <div className="mb-3">
                  <div className="flex justify-between text-xs text-black mb-1">
                    <span>Raised: ₹{student.raised}</span>
                    <span>Required: ₹{student.required}</span>
                  </div>

                  <div className="w-full h-2 bg-[#F4D6D6] rounded-full overflow-hidden">
                    <div
                      className="h-2 bg-[#FFD60A]"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <div className="text-right text-[11px] text-black mt-1">
                    {progress}% funded
                  </div>
                </div>
              </div>

              <div className="flex justify-between gap-2 mt-3">
                <button
                  className="px-3 py-2 text-xs rounded-md border border-[#016772] text-black hover:bg-[#F4D6D6] cursor-pointer"
                  onClick={() => setSelectedStudent(student)}
                >
                  View Profile
                </button>

                <button className="px-3 py-2 text-xs rounded-md bg-[#FFD60A] text-[#016772] hover:bg-[#E6B800] cursor-pointer">
                  Sponsor Now
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {selectedStudent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 border border-[#FFD60A]">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold text-black">
                {selectedStudent.name} – {selectedStudent.grade}
              </h2>
              <button
                className="text-black text-sm cursor-pointer"
                onClick={() => setSelectedStudent(null)}
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-black mb-3">
              <span className="font-semibold">Category:</span>{" "}
              {selectedStudent.category}
            </p>

            <p className="text-sm text-black mb-4">
              <span className="font-semibold">Background:</span>{" "}
              {selectedStudent.background}
            </p>

            <div className="flex justify-between text-sm mb-4 text-black">
              <span>
                <span className="font-semibold">Required:</span> ₹
                {selectedStudent.required}
              </span>
              <span>
                <span className="font-semibold">Raised:</span> ₹
                {selectedStudent.raised}
              </span>
            </div>

            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 text-sm rounded-md border border-[#016772] text-black hover:bg-[#F4D6D6] cursor-pointer"
                onClick={() => setSelectedStudent(null)}
              >
                Close
              </button>

              <button className="px-4 py-2 text-sm rounded-md bg-[#FFD60A] text-[#016772] hover:bg-[#E6B800] cursor-pointer">
                Sponsor Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sponsor;