import { useState } from "react";
import { FaSearch, FaUserCircle ,FaBell,FaTimes} from "react-icons/fa";
import profile from "./assets/profile.png"
import EmployeeModal from "./EmployeeModal";
import axios from "axios";

export default function Dashboard() {
//   const [employees, setEmployees] = useState([]);
const [isAddSectionOpen, setIsAddSectionOpen] = useState(false);
const [modalType, setModalType] = useState(null);
const Button = ({ children, className, onClick }) => {
  return (
    <button className={`px-4 py-2 rounded ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
  const [employees, setEmployees] = useState([
    { id: 1, name: "Parviz Aslanov", department: "Marketing", position: "UI Designer", startDate: "20.11.2023", salary: "1700 $", image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 2,name: "Seving Aslanova", department: "Marketing", position: "UX Designer", startDate: "19.02.2023", salary: "1200 $", image: "https://randomuser.me/api/portraits/women/2.jpg" },
    { id: 3,name: "Ceyhun Aslanov", department: "Program Tester", position: "React Developer", startDate: "18.05.2024", salary: "3999 $", image: "https://randomuser.me/api/portraits/men/3.jpg" },
    { id: 4,name: "Ayla Mammadova", department: "Marketing", position: "UX Researcher Intern", startDate: "18.07.2024", salary: "400 $", image: "https://randomuser.me/api/portraits/women/4.jpg" },
    { id: 5,name: "Orxan Hüseyinov", department: "Marketing", position: "Accountant", startDate: "17.09.2022", salary: "2000 $", image: "https://randomuser.me/api/portraits/men/5.jpg" },
  ]);

//   useEffect(() => {
//     axios.get("https://api.example.com/employees")
//       .then(response => setEmployees(response.data))
//       .catch(error => console.error("Error fetching employees:", error));
//   }, []);

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
        <div className="flex items-center p-4 border-t border-gray-500">
          <FaUserCircle className="text-4xl" />
          <div>
            <p className="font-semibold">Allen Frank</p>
            <p className="text-sm text-gray-300">allen@gmail.com</p>
          </div>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 bg-blue-50 p-8 rounded-lg shadow-lg">
        {/* Navbar without space on top and right */}
        <div className="fixed top-0 left-72 right-0 bg-blue-900 text-white p-5 shadow flex justify-between items-center z-50">
          <h2 className="text-lg font-semibold">Team Management</h2>
          <div className="flex items-center gap-4 w-full max-w-xl bg-white rounded-full px-4 py-2 shadow-md">
            <FaSearch className="text-gray-500" />
            <input type="text" placeholder="Search" className="outline-none bg-transparent w-full" />
          </div>
          <div className="flex items-center gap-6">
            <FaBell className="text-xl cursor-pointer hover:text-yellow-300 transition duration-300" />
            <div className="flex items-center gap-2">
              <img src={profile} alt="User" className="w-10 h-10 rounded-full border border-gray-300" />
              <div>
                <p className="text-white font-medium">ALLEN FRANK</p>
                <p className="text-sm text-gray-300">allen@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Push content below fixed navbar */}
        <div className="mt-20">
          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-6">
            <div className="flex space-x-4">
              <Button className="bg-white rounded-3xl"> Sort</Button>
              <Button className="bg-white rounded-3xl">Filter</Button>
            </div>
            <div className="flex space-x-4">
              <Button className="bg-white rounded-3xl text-black hover:bg-blue-600" onClick={() => setModalType("add")}>Add Employee</Button>
              <Button className="bg-white rounded-3xl text-black hover:bg-red-600" onClick={() => setModalType("delete")}>Delete Employee</Button>
              <Button className="bg-white rounded-3xl text-black hover:bg-yellow-600" onClick={() => setModalType("edit")}>Edit Employee</Button>
            </div>
          </div>
          
   
        {/* Employee Modal */}
        {modalType && (
          <EmployeeModal modalType={modalType} onClose={() => setModalType(null)} />
        )}
          {/* Team Management Table */}

          <div className="bg-gray-50 p-6 rounded-lg shadow-lg mt-6">
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
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {employees.map((emp, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-blue-50' : 'bg-gray-50'} border-b border-gray-200 hover:bg-gray-200`}>
                      <td className="py-3 px-6 flex items-center">
                        <img src={emp.image} alt={emp.name} className="w-10 h-10 rounded-full border border-gray-300 shadow-sm" />
                      </td>
                      <td className="py-3 px-6 font-medium">{emp.name}</td>
                      <td className="py-3 px-6">{emp.department}</td>
                      <td className="py-3 px-6">{emp.position}</td>
                      <td className="py-3 px-6">{emp.startDate}</td>
                      <td className="py-3 px-6 font-bold text-green-600">{emp.salary}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
