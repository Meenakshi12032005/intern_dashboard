
import React from "react";

const rewards = [
  { title: "Referral Champ", desc: "Referred 10 people", unlocked: true },
  { title: "Donation Master", desc: "Raised ₹1000+", unlocked: true },
  { title: "Social Star", desc: "Shared on social media", unlocked: false },
];

const leaderboard = [
  { name: "Meenakshi R", code: "Meenakshi2025", donations: 1500 },
  { name: "Priya Sharma", code: "priya2025", donations: 1200 },
  { name: "Arjun Verma", code: "arjun2025", donations: 1000 },
  { name: "Meera K", code: "meera2025", donations: 900 },
  { name: "Ravi Kumar", code: "ravi2025", donations: 700 },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4 text-yellow-400">Intern Dashboard</h1>

      {/* Intern Info */}
      <div className="bg-gray-800 p-4 rounded-lg mb-6 shadow">
        <h2 className="text-xl font-semibold">👋 Welcome, Meenakshi R</h2>
        <p>Referral Code: <span className="text-blue-400">Meenakshi2025</span></p>
        <p>Total Donations: ₹1500</p>
      </div>

      {/* Rewards Section */}
      <h2 className="text-2xl font-semibold mb-2">🎁 Rewards</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {rewards.map((r, i) => (
          <div key={i} className={`p-4 rounded-lg ${r.unlocked ? "bg-green-700" : "bg-gray-700"}`}>
            <h3 className="text-xl font-bold">{r.title}</h3>
            <p>{r.desc}</p>
            <p className="text-sm">{r.unlocked ? "✅ Unlocked" : "🔒 Locked"}</p>
          </div>
        ))}
      </div>

      {/* Leaderboard */}
      <h2 className="text-2xl font-semibold mb-2">🏆 Leaderboard</h2>
      <table className="w-full bg-gray-800 rounded-md overflow-hidden">
        <thead className="bg-gray-700">
          <tr>
            <th className="text-left p-2">Name</th>
            <th className="text-left p-2">Referral Code</th>
            <th className="text-left p-2">Donations</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((entry, idx) => (
            <tr key={idx} className="border-t border-gray-600">
              <td className="p-2">{entry.name}</td>
              <td className="p-2">{entry.code}</td>
              <td className="p-2">₹{entry.donations}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
