import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Dashboard from "./Dashboard";

const EmployeeModal = ({ modalType, onClose, employees, setEmployees, onConfirm }) => {
  const [formData, setFormData] = useState({ id: "", name: "", position: "", startDate: "", salary: "" });
  const [searchId, setSearchId] = useState("");
  const [foundEmployee, setFoundEmployee] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    const result = employees.find(emp => emp.id.toString() === searchId);
    setFoundEmployee(result);
    if (result) setFormData(result);
  };

  const handleDelete = () => {
    setEmployees(employees.filter(emp => emp.id.toString() !== searchId));
    setFoundEmployee(null);
    onClose();
  };

  const handleSave = () => {
    if (modalType === "add") {
      setEmployees([...employees, formData]);
    } else if (modalType === "edit") {
      setEmployees(employees.map(emp => (emp.id.toString() === formData.id ? formData : emp)));
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-70 backdrop-blur-md">
      <div className="absolute inset-0 overflow-hidden">
        <Dashboard />
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 relative z-10 flex flex-col items-center">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-red-500">
          <FaTimes size={20} />
        </button>
        
        <h3 className="text-lg font-semibold mb-6 text-center">
          {modalType === "add" ? "ADD EMPLOYEE" : modalType === "edit" ? "EDIT EMPLOYEE" : "DELETE EMPLOYEE"}
        </h3>
        
        {(modalType === "delete" || modalType === "edit") && !foundEmployee ? (
          <>
            <input type="text" placeholder="Enter Employee ID" value={searchId} onChange={(e) => setSearchId(e.target.value)} className="w-full p-3 mb-3 border border-gray-300 rounded text-center" />
            <button onClick={handleSearch} className="w-full px-6 py-2 mb-3 rounded bg-blue-900 text-white hover:bg-blue-700">SEARCH</button>
          </>
        ) : modalType === "delete" ? (
          <>
            <p className="text-center text-gray-700">Are you sure you want to delete employee <b>{foundEmployee?.name}</b>?</p>
            <button onClick={handleDelete} className="w-full px-6 py-2 mt-3 rounded bg-red-500 text-white hover:bg-red-600">DELETE</button>
          </>
        ) : (
          <>
            <input type="text" name="id" value={formData.id} onChange={handleChange} placeholder="Employee ID" className="w-full p-3 mb-3 border border-gray-300 rounded text-center" disabled={modalType === "edit"} />
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="w-full p-3 mb-3 border border-gray-300 rounded text-center" />
            <input type="text" name="position" value={formData.position} onChange={handleChange} placeholder="Position" className="w-full p-3 mb-3 border border-gray-300 rounded text-center" />
            <input type="text" name="startDate" value={formData.startDate} onChange={handleChange} placeholder="Start Date" className="w-full p-3 mb-3 border border-gray-300 rounded text-center" />
            <input type="text" name="salary" value={formData.salary} onChange={handleChange} placeholder="Salary" className="w-full p-3 mb-3 border border-gray-300 rounded text-center" />
          </>
        )}
        
        <div className="flex justify-between mt-6 w-full">
          <button onClick={onClose} className="px-6 py-2 rounded bg-gray-300 hover:bg-gray-400 w-1/2">CANCEL</button>
          {(modalType !== "delete" || foundEmployee) && (
            <button onClick={handleSave} className={`px-6 py-2 rounded text-white w-1/2 ${modalType === "delete" ? "bg-red-500 hover:bg-red-600" : "bg-blue-900 hover:bg-blue-700"}`}>
              {modalType === "delete" ? "DELETE" : "SAVE"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeModal;
