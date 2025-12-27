import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, MessageSquare, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="bg-[#0e0e14] border-b border-purple-500/10 fixed w-full top-0 z-40 
      backdrop-blur-lg bg-[#0e0e14]/80"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-all"
            >
              <div className="size-9 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
                <MessageSquare className="w-5 h-5 text-purple-400" />
              </div>
              <h1 className="text-lg font-bold text-zinc-100">
                Budzyy
              </h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            

            {authUser && (
              <>
                <Link
                  to={"/profile"}
                  className="btn btn-sm gap-2 bg-transparent
                  border border-purple-500/20 text-zinc-200
                  hover:bg-purple-500/10"
                >
                  <User className="size-5 text-purple-400" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button
                  className="flex gap-2 items-center text-zinc-300
                  hover:text-red-400 transition-colors"
                  onClick={logout}
                >
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
