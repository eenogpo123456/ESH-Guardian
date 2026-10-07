import { useState } from "react";
 
type Screen =
| "dashboard"
| "map"
| "area"
| "report"
| "rewards"
| "leaderboard"
| "profile";
 
type PlantArea = {
name: string;
status: "green" | "yellow" | "red";
concerns: number;
};
 
export default function App() {
const [screen, setScreen] = useState<Screen>("dashboard");
const [selectedArea, setSelectedArea] = useState("");
 
const plantAreas: PlantArea[] = [
{ name: "Intake", status: "green", concerns: 0 },
{ name: "Forebay", status: "yellow", concerns: 2 },
{ name: "Raw Water Pump House", status: "red", concerns: 5 },
{ name: "DAF", status: "green", concerns: 1 },
{ name: "BAF", status: "yellow", concerns: 2 },
{ name: "UF", status: "green", concerns: 0 },
{ name: "RO System", status: "red", concerns: 4 },
{ name: "Chemical Storage", status: "yellow", concerns: 3 },
{ name: "Chlorine System", status: "red", concerns: 4 },
];
 
const getStatusIcon = (status: string) => {
if (status === "red") return "🔴";
if (status === "yellow") return "🟡";
return "🟢";
};
 
return (
<div className="min-h-screen bg-slate-100">
 
{/* HEADER */}
<div className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white p-6 shadow-lg">
<h1 className="text-3xl font-bold">
🛡️ ESH Guardian
</h1>
 
<p className="opacity-90">
See It • Report It • Improve It
</p>
</div>
 
{/* DASHBOARD */}
{screen === "dashboard" && (
<div className="p-4">
 
<div className="bg-white rounded-3xl shadow p-4 mb-4">
 
<div className="flex justify-between">
 
<div>
<div className="text-gray-500">
Current Title
</div>
 
<div className="font-bold text-xl">
ESH Guardian
</div>
</div>
 
<div className="text-right">
<div className="font-bold">
2450 XP
</div>
 
<div className="text-gray-500">
Level 5
</div>
</div>
 
</div>
 
<div className="bg-gray-200 rounded-full h-3 mt-4">
<div
className="bg-green-500 h-3 rounded-full"
style={{ width: "75%" }}
/>
</div>
 
</div>
 
<div className="grid grid-cols-2 gap-3">
 
<button
onClick={() => setScreen("map")}
className="bg-blue-600 text-white rounded-2xl p-6"
>
📍
<br />
Plant Map
</button>
 
<button
onClick={() => setScreen("report")}
className="bg-red-600 text-white rounded-2xl p-6"
>
⚠️
<br />
Report Concern
</button>
 
<button
onClick={() => setScreen("rewards")}
className="bg-green-600 text-white rounded-2xl p-6"
>
🎁
<br />
Rewards
</button>
 
<button
onClick={() => setScreen("leaderboard")}
className="bg-yellow-500 text-white rounded-2xl p-6"
>
🏆
<br />
Leaderboard
</button>
 
<button
onClick={() => setScreen("profile")}
className="col-span-2 bg-slate-700 text-white rounded-2xl p-6"
>
👤 Profile
</button>
 
</div>
 
<div className="bg-white rounded-3xl shadow p-4 mt-4">
 
<h2 className="font-bold mb-3">
Plant Risk Summary
</h2>
 
<div>🔴 High Risk Areas: 3</div>
<div>🟡 Medium Risk Areas: 3</div>
<div>🟢 Normal Areas: 3</div>
 
</div>
</div>
)}
 
{/* MAP */}
{screen === "map" && (
<div className="p-4">
 
<h2 className="text-2xl font-bold mb-4">
Water Treatment Plant
</h2>
 
<div className="space-y-3">
 
{plantAreas.map((area) => (
<button
key={area.name}
onClick={() => {
setSelectedArea(area.name);
setScreen("area");
}}
className="w-full bg-white rounded-2xl shadow p-4 flex justify-between"
>
<span>{area.name}</span>
 
<span>
{getStatusIcon(area.status)}
</span>
</button>
))}
 
</div>
 
<button
onClick={() => setScreen("dashboard")}
className="w-full mt-4 bg-gray-500 text-white p-3 rounded-xl"
>
Back
</button>
 
</div>
)}
 
{/* AREA DETAILS */}
{screen === "area" && (
<div className="p-4">
 
<h2 className="text-2xl font-bold">
{selectedArea}
</h2>
 
<div className="bg-white rounded-2xl shadow p-4 mt-4">
 
<div className="border-b py-2">
⚠ Oil Leak Near Equipment
</div>
 
<div className="border-b py-2">
⚠ Corroded Handrail
</div>
 
<div className="py-2">
⚠ Poor Housekeeping
</div>
 
</div>
 
<button
onClick={() => setScreen("report")}
className="w-full bg-red-600 text-white p-3 rounded-xl mt-4"
>
Report Concern
</button>
 
</div>
)}
 
{/* REPORT */}
{screen === "report" && (
<div className="p-4">
 
<h2 className="text-2xl font-bold mb-4">
Submit Concern
</h2>
 
<select className="w-full border rounded-xl p-3 mb-3">
<option>Select Plant Area</option>
 
{plantAreas.map((area) => (
<option key={area.name}>
{area.name}
</option>
))}
</select>
 
<select className="w-full border rounded-xl p-3 mb-3">
<option>Safety</option>
<option>Health</option>
<option>Environment</option>
</select>
 
<select className="w-full border rounded-xl p-3 mb-3">
<option>Low</option>
<option>Medium</option>
<option>High</option>
<option>Critical</option>
</select>
 
<textarea
rows={5}
className="w-full border rounded-xl p-3 mb-3"
placeholder="Describe the concern..."
/>
 
<button className="w-full bg-slate-300 p-3 rounded-xl mb-3">
📷 Upload Photo
</button>
 
<div className="bg-yellow-100 border border-yellow-500 rounded-xl p-4 mb-4">
⚠ Possible Duplicate Detected
<br />
Oil Leak at Raw Water Pump House
<br />
Reported 2 hours ago
</div>
 
<button className="w-full bg-green-600 text-white p-3 rounded-xl">
Submit Report
</button>
 
</div>
)}
 
{/* REWARDS */}
{screen === "rewards" && (
<div className="p-4">
 
<h2 className="text-2xl font-bold mb-4">
Rewards Store
</h2>
 
<div className="space-y-3">
 
<div className="bg-white rounded-xl shadow p-4">
☕ Coffee Voucher - 1000 pts
</div>
 
<div className="bg-white rounded-xl shadow p-4">
🍔 Meal Voucher - 2000 pts
</div>
 
<div className="bg-white rounded-xl shadow p-4">
👕 Company Shirt - 3500 pts
</div>
 
<div className="bg-white rounded-xl shadow p-4">
🎁 Gift Card - 5000 pts
</div>
 
</div>
</div>
)}
 
{/* LEADERBOARD */}
{screen === "leaderboard" && (
<div className="p-4">
 
<h2 className="text-2xl font-bold mb-4">
Leaderboard
</h2>
 
<div className="bg-white rounded-2xl shadow p-4 space-y-2">
 
<div>🥇 Juan Cruz - 5250 XP</div>
<div>🥈 Maria Santos - 4800 XP</div>
<div>🥉 Pedro Reyes - 4200 XP</div>
<div>4️⃣ Erwin Nogpo - 2450 XP</div>
 
</div>
</div>
)}
 
{/* PROFILE */}
{screen === "profile" && (
<div className="p-4">
 
<div className="bg-white rounded-3xl shadow p-5">
 
<div className="text-center">
 
<div className="text-6xl">
🛡️
</div>
 
<h2 className="text-2xl font-bold mt-3">
Erwin Nogpo
</h2>
 
<div>Level 5</div>
 
<div className="font-bold mt-2">
ESH Guardian
</div>
 
<div className="mt-4">
Reports Submitted: 18
</div>
 
<div>
Verified Reports: 15
</div>
 
<div>
Achievements: 5
</div>
 
</div>
 
</div>
</div>
)}
 
<button
className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-red-600 text-white text-3xl shadow-xl"
onClick={() => setScreen("report")}
>
+
</button>
 
</div>
);
}