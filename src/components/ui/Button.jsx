import { useState, useEffect } from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";

import axios from "axios";

export default function Dashboard() {
  const [employees, setEmployees] = useState([
    { name: "Parviz Aslanov", department: "Marketing", position: "UI Designer", startDate: "20.11.2023", salary: "1700 $", image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Seving Aslanova", department: "Marketing", position: "UX Designer", startDate: "19.02.2023", salary: "1200 $", image: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: "Ceyhun Aslanov", department: "Program Tester", position: "React Developer", startDate: "18.05.2024", salary: "3999 $", image: "https://randomuser.me/api/portraits/men/3.jpg" },
    { name: "Ayla Mammadova", department: "Marketing", position: "UX Researcher Intern", startDate: "18.07.2024", salary: "400 $", image: "https://randomuser.me/api/portraits/women/4.jpg" },
    { name: "Orxan Hüseyinov", department: "Marketing", position: "Accountant", startDate: "17.09.2022", salary: "2000 $", image: "https://randomuser.me/api/portraits/men/5.jpg" },
  ]);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-72 bg-blue-900 text-white p-6 shadow-lg flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-6">ERP Dashboard</h1>
          <nav className="space-y-3">
            <button className="w-full text-left py-3 px-4 hover:bg-blue-700 rounded">Manager Dash</button>
            <button className="w-full text-left py-3 px-4 hover:bg-blue-700 rounded">Sales Management</button>
            <button className="w-full text-left py-3 px-4 hover:bg-blue-700 rounded">Sales Contest</button>
            <button className="w-full text-left py-3 px-4 bg-blue-700 rounded font-bold">Team Management</button>
            <button className="w-full text-left py-3 px-4 hover:bg-blue-700 rounded">Performance Tracking</button>
          </nav>
        </div>
        <div className="flex items-center gap-3 p-4 border-t border-gray-500">
          <FaUserCircle className="text-4xl" />
          <div>
            <p className="font-semibold">John Doe</p>
            <p className="text-sm text-gray-300">Admin</p>
          </div>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 bg-white p-8 rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center bg-blue-800 text-white p-5 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Team Management</h2>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded bg-white text-black">
              <FaSearch className="text-gray-500" />
              <input type="text" placeholder="Search..." className="outline-none bg-transparent w-full" />
            </div>
            <Button className="bg-green-500 px-4 py-2 rounded text-white">+ Add Employee</Button>
          </div>
        </div>
        
        {/* Team Management Content */}
        <div className="bg-white p-6 mt-6 rounded-lg shadow-lg">
          <h3 className="text-md font-semibold mb-4">Team Members</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-gray-700">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6">Profile</th>
                  <th className="py-3 px-6">Full Name</th>
                  <th className="py-3 px-6">Department</th>
                  <th className="py-3 px-6">Position</th>
                  <th className="py-3 px-6">Start Date</th>
                  <th className="py-3 px-6">Salary</th>
                  <th className="py-3 px-6">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {employees.map((emp, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 flex items-center">
                      <img src={emp.image} alt={emp.name} className="w-12 h-12 rounded-full border border-gray-300 shadow-sm" />
                    </td>
                    <td className="py-3 px-6 font-medium">{emp.name}</td>
                    <td className="py-3 px-6">{emp.department}</td>
                    <td className="py-3 px-6">{emp.position}</td>
                    <td className="py-3 px-6">{emp.startDate}</td>
                    <td className="py-3 px-6 font-bold text-green-600">{emp.salary}</td>
                    <td className="py-3 px-6 flex gap-2">
                      <Button className="bg-blue-500 text-white px-3 py-1 rounded">Edit</Button>
                      <Button className="bg-red-500 text-white px-3 py-1 rounded">Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
