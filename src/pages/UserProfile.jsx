import React, { useEffect, useState } from "react";
import axios from "axios";
import { CheckCircle, XCircle, Edit3, Save, X } from "lucide-react";
import CusButton from "../Components/CusButton";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token")
        const url = import.meta.env.VITE_BACKEND_URL + "/profile" 
        const res = await axios.get( url , {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        console.log(res.data.data)
        setUser(res.data.data);
      } catch (err) {
        console.error("Error fetching user:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value.split(",").map((v) => v.trim()) }));
  };

  // Save updates to backend
  const handleSave = async () => {
    try {
      const res = await axios.put(
        "http://localhost:5000/api/user/update/690c845ea99d53bf552c5d33",
        user
      );
      setUser(res.data);
      setMessage("Profile updated successfully!");
      setEditing(false);
    } catch (err) {
      console.error("Error updating user:", err);
      setMessage("Error updating profile!");
    }
  };

  if (loading) return <p className="text-center mt-10 text-gray-500">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          User Profile
        </h2>

        {/* Profile Info */}
        <div className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="text-sm text-gray-600 font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={user.fullName}
              onChange={handleChange}
              disabled={!editing}
              className={`w-full mt-1 p-3 border rounded-md ${
                editing
                  ? "border-indigo-400 bg-white"
                  : "border-gray-200 bg-gray-100"
              }`}
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              disabled={!editing}
              className={`w-full mt-1 p-3 border rounded-md ${
                editing
                  ? "border-indigo-400 bg-white"
                  : "border-gray-200 bg-gray-100"
              }`}
            />
          </div>

          {/* Allergy */}
          <div>
            <label className="text-sm text-gray-600 font-medium">
              Allergies (comma-separated)
            </label>
            <input
              type="text"
              name="allergy"
                value={user.allergy.join(", ")}
              onChange={handleArrayChange}
              disabled={!editing}
              className={`w-full mt-1 p-3 border rounded-md ${
                editing
                  ? "border-indigo-400 bg-white"
                  : "border-gray-200 bg-gray-100"
              }`}
            />
          </div>

          {/* Diseases */}
          <div>
            <label className="text-sm text-gray-600 font-medium">
              Diseases (comma-separated)
            </label>
            <input
              type="text"
              name="disease"
              value={user.disease.join(", ")}
              onChange={handleArrayChange}
              disabled={!editing}
              className={`w-full mt-1 p-3 border rounded-md ${
                editing
                  ? "border-indigo-400 bg-white"
                  : "border-gray-200 bg-gray-100"
              }`}
            />
          </div>

          
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-600">Verification Status:</p>
            <div className="flex items-center gap-2">
              {user.isVerified ? (
                <>
                  <CheckCircle className="text-green-500 w-5 h-5" />
                  <span className="text-green-600 font-semibold">Verified</span>
                </>
              ) : (
                <>
                  <XCircle className="text-red-500 w-5 h-5" />
                  <span className="text-red-500 font-semibold">Not Verified</span>
                  <button>Get Verified</button>
                </>
              )}
            </div>
          </div>

          
          <div className="flex justify-end gap-4 mt-8">
            {!editing ? (
              <CusButton text={"Edit"} onClick={() => setEditing(true)}/>
            ) : (
              <>
                <CusButton text={"Save"} onClick={handleSave}/>
                <button
                  onClick={() => setEditing(false)}
                  className="flex items-center gap-2 bg-gray-400 hover:bg-gray-500 text-white px-5 py-2 rounded-md transition-all"
                >
                  <X className="w-4 h-4" /> Cancel
                </button>
              </>
            )}
          </div>

          {message && (
            <p className="text-center text-sm text-indigo-600 mt-4">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
