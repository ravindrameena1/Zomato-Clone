import React from "react";

const UserProfile = () => {
  const user = {
    name: "Ravindra Meena",
    email: "ravindra@example.com",
    location: "Jaipur, India",
    joined: "January 2024",
    avatar: "https://i.pravatar.cc/150?img=11", // placeholder avatar
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6">
        <div className="flex flex-col items-center">
          <img
            className="h-24 w-24 rounded-full border-4 border-red-400 mb-4"
            src={user.avatar}
            alt="User Avatar"
          />
          <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-500">{user.email}</p>
          <p className="text-gray-500 text-sm">{user.location}</p>
          <p className="text-gray-400 text-xs mt-1">Joined {user.joined}</p>
        </div>

        <hr className="my-6" />

        <div className="text-center">
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
