import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
  LineChart, Line,
} from "recharts";
import useUsers from "../../../hooks/useUsers";
import useTrips from "../../../hooks/useTrips";

const AdminHome = () => {
  const [users] = useUsers();
  const [trips] = useTrips();

  const analyticsData = [
    { title: "Total Users", value: users?.length, color: "from-purple-500 to-indigo-500" },
    { title: "Total Posts", value: 17, color: "from-pink-500 to-rose-500" },
    { title: "Total Trips", value: trips?.length, color: "from-green-500 to-teal-500" },
    { title: "New Signups", value: 14, color: "from-yellow-500 to-orange-500" },
  ];

  const barData = [
    { name: "Jan", posts: 300 },
    { name: "Feb", posts: 600 },
    { name: "Mar", posts: 400 },
    { name: "Apr", posts: 700 },
    { name: "May", posts: 500 },
  ];

  const pieData = [
    { name: "Domestic", value: 400 },
    { name: "International", value: 300 },
    { name: "Weekend", value: 300 },
    { name: "Business", value: 200 },
  ];

  const lineData = [
    { month: "Jan", users: 400 },
    { month: "Feb", users: 700 },
    { month: "Mar", users: 500 },
    { month: "Apr", users: 800 },
    { month: "May", users: 650 },
  ];

  const doughnutData = [
    { name: "Published", value: 700 },
    { name: "Draft", value: 200 },
    { name: "Archived", value: 100 },
  ];

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#FF6B6B"];

  return (
    <div className="p-6">
      {/* Analytics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        {analyticsData.map((item, index) => (
          <div
            key={index}
            className={`rounded-xl p-4 text-white shadow-md bg-gradient-to-br ${item.color}`}
          >
            <p className="text-sm">{item.title}</p>
            <h2 className="text-2xl font-bold">{item.value}</h2>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bar Chart */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-2">Monthly Posts</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="posts" fill="#8884d8" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-2">Trip Categories</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-2">User Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="users" stroke="#10b981" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Doughnut Chart */}
        <div className="bg-white p-4 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-2">Post Status</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={doughnutData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                fill="#82ca9d"
                label
              >
                {doughnutData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
