


import React, { useState } from "react";
import { Mail, User, Eye, EyeOff, Lock, Loader2, MessageSquare } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";  // REQUIRED


const SignUpPage = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  //const { theme } = useThemeStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) {
      toast.error("Full name is required");
      return false;
    }
    if (!formData.email.trim()) {
      toast.error("Email is required");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Email is invalid");
      return false;
    }
    if (!formData.password.trim()) {
      toast.error("Password is required");
      return false;
    }
    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const res = await signup(formData);

      toast.success("Signup Successful!");

      setTimeout(() => {
        navigate("/login");
      }, 1000);

    } catch (err) {
      toast.error(err?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#0b0b0f] relative overflow-hidden flex items-center justify-center px-4 pt-20">

      {/* BACKGROUND BLOBS */}
      <div className="absolute -top-20 -left-20 w-56 h-56 bg-purple-700 blur-3xl opacity-25 rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-600 blur-3xl opacity-20 rounded-full"></div>
      <div className="absolute top-[60%] left-[50%] w-72 h-72 bg-blue-600 blur-[110px] opacity-10 rounded-full -translate-x-1/2"></div>


      {/* <ThemeBlobs /> */}


      {/* SMALLER CENTERED GLASS CARD */}
      <div className="relative z-10 w-full max-w-sm bg-white/10 backdrop-blur-xl p-5 rounded-2xl border border-white/20 shadow-2xl ">

        {/* HEADER */}
        <div className="flex flex-col items-center gap-2 mb-4">
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-md">
            <MessageSquare className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl font-semibold text-white">Create Account</h1>
          <p className="text-gray-300 text-xs">Get started with your new account</p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* FULL NAME */}
          <div>
            <label className="text-gray-300 text-xs font-medium">Full Name</label>
            <div className="relative mt-1">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Alex Walter"
                className="w-full bg-white/10 border border-white/20 rounded-lg py-2 pl-9 pr-3 text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-gray-300 text-xs font-medium">Email</label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="email"
                placeholder="alex@example.com"
                className="w-full bg-white/10 border border-white/20 rounded-lg py-2 pl-9 pr-3 text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-gray-300 text-xs font-medium">Password</label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className="w-full bg-white/10 border border-white/20 rounded-lg py-2 pl-9 pr-10 text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400"
              >
                {showPassword ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={isSigningUp}
            className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:opacity-90 transition-all text-white font-medium py-2 rounded-lg shadow-lg text-sm flex justify-center items-center gap-2"
          >
            {isSigningUp ? (
              <>
                <Loader2 className="animate-spin w-4 h-4" />
                Loading...
              </>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        {/* FOOTER */}
        <p className="text-center text-gray-300 text-xs mt-3">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
