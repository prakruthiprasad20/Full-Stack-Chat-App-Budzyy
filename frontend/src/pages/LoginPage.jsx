// import React from "react";

// const LoginPage = () => {
//   return <div>Login Page</div>;
// };

// export default LoginPage;



import React, { useState } from "react";
import { Mail, Eye, EyeOff, Lock, Loader2, MessageSquare } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";


const LoginPage = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email");
    if (!formData.password.trim()) return toast.error("Password is required");

    try {
      const res = await login(formData);
      if (res) {
        toast.success("Login successful");
        navigate("/");
      }
    } catch (err) {
      toast.error("Login failed");
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#0b0b0f] relative overflow-hidden flex items-center justify-center px-4 pt-32 pb-10">

      {/* BACKGROUND BLOBS */}
      <div className="absolute -top-20 -left-20 w-56 h-56 bg-purple-700 blur-3xl opacity-25 rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-600 blur-3xl opacity-20 rounded-full"></div>
      <div className="absolute top-[60%] left-[50%] w-72 h-72 bg-blue-600 blur-[110px] opacity-10 rounded-full -translate-x-1/2"></div>

            {/* <ThemeBlobs /> */}
      {/* GLASS CARD */}
      <div className="relative z-10 w-full max-w-sm bg-white/10 backdrop-blur-xl p-5 rounded-2xl border border-white/20 shadow-2xl">

        {/* HEADER */}
        <div className="flex flex-col items-center gap-2 mb-6">
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-md">
            <MessageSquare className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-xl font-semibold text-white">Welcome Back</h1>
          <p className="text-gray-300 text-xs">Sign in to your account</p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* EMAIL */}
          <div>
            <label className="text-gray-300 text-xs font-medium">Email</label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="email"
                placeholder="you@example.com"
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
                placeholder="••••••••"
                className="w-full bg-white/10 border border-white/20 rounded-lg py-2 pl-9 pr-10 text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={isLoggingIn}
            className="w-full bg-gradient-to-r from-green-400 to-blue-500 hover:opacity-90 transition-all text-white font-medium py-2 rounded-lg shadow-lg text-sm flex justify-center items-center gap-2"
          >
            {isLoggingIn ? (
              <>
                <Loader2 className="animate-spin w-4 h-4" />
                Loading...
              </>
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        {/* FOOTER */}
        <p className="text-center text-gray-300 text-xs mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Create account
          </Link>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;
