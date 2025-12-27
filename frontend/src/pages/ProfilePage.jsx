

import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera, Mail, User } from "lucide-react";


const ProfilePage = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="min-h-screen w-full bg-[#0b0b0f] relative overflow-hidden px-4 pt-28 pb-10 flex justify-center">

      {/* BACKGROUND BLOBS  */}
{/* <div className="absolute -top-20 -left-20 w-56 h-56 bg-purple-700 blur-3xl opacity-25 rounded-full"></div>
<div className="absolute bottom-0 right-0 w-64 h-64 bg-green-600 blur-3xl opacity-20 rounded-full"></div>
<div className="absolute top-[50%] left-[50%] w-72 h-72 bg-blue-600 blur-[110px] opacity-10 rounded-full -translate-x-1/2"></div> */}

<div className="absolute -top-32 -left-32 w-80 h-80 bg-purple-700 blur-[160px] opacity-40 rounded-full"></div>

<div className="absolute bottom-0 right-0 w-96 h-96 bg-green-600 blur-[180px] opacity-30 rounded-full"></div>

<div className="absolute top-[40%] left-[50%] w-[500px] h-[500px] bg-blue-600 blur-[200px] opacity-20 rounded-full -translate-x-1/2"></div> 
      {/* <ThemeBlobs /> */}

      {/* MAIN CARD */}
      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/20 shadow-2xl">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-white">Your Profile</h1>
          <p className="text-gray-300 text-sm">Manage your account information</p>
        </div>

        {/* AVATAR SECTION */}
        <div className="flex flex-col items-center gap-4 mb-10">
          <div className="relative">
            <img
              src={selectedImg || authUser.profilePic || "/avatar.png"}
              className="w-32 h-32 rounded-full object-cover border-4 border-white/20 shadow-lg"
              alt="Profile"
            />

            <label
              htmlFor="avatar-upload"
              className={`
                absolute bottom-1 right-1 
                bg-white/20 backdrop-blur-md p-2 rounded-full 
                border border-white/30 cursor-pointer transition hover:bg-white/30
                ${isUpdatingProfile ? "opacity-50 pointer-events-none" : ""}
              `}
            >
              <Camera className="w-5 h-5 text-white" />
              <input
                type="file"
                id="avatar-upload"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </label>
          </div>

          <p className="text-sm text-gray-300">
            {isUpdatingProfile ? "Uploading..." : "Click the camera icon to update your photo"}
          </p>
        </div>

        {/* PROFILE FIELDS */}
        <div className="space-y-6">

          {/* FULL NAME */}
          <div>
            <label className="flex items-center gap-2 text-gray-300 text-sm mb-1">
              <User className="w-4 h-4" /> Full Name
            </label>
            <p className="bg-white/10 border border-white/20 text-white rounded-lg px-4 py-2">
              {authUser?.fullName}
            </p>
          </div>

          {/* EMAIL */}
          <div>
            <label className="flex items-center gap-2 text-gray-300 text-sm mb-1">
              <Mail className="w-4 h-4" /> Email Address
            </label>
            <p className="bg-white/10 border border-white/20 text-white rounded-lg px-4 py-2">
              {authUser?.email}
            </p>
          </div>

        </div>

        {/* ACCOUNT META SECTION */}
        <div className="mt-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
          <h2 className="text-lg text-white font-medium mb-4">Account Details</h2>

          <div className="text-sm text-gray-300 space-y-4">

            <div className="flex items-center justify-between">
              <span>Member Since</span>
              <span>{authUser?.createdAt?.split("T")[0]}</span>
            </div>

            <div className="flex items-center justify-between">
              <span>Status</span>
              <span className="text-green-400">Active</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;
