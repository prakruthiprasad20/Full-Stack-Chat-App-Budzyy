import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  return (
    <div className="p-2.5 bg-[#0e0e14] border-b border-purple-500/10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Avatar */}
<div className="avatar">
  <img
    src={selectedUser.profilePic || "/avatar.png"}
    alt={selectedUser.fullName}
    className="size-10 rounded-full object-cover border border-blue-500/20"
  />
</div>

          {/* User info */}
          <div>
            <h3 className="font-medium text-zinc-100">
              {selectedUser.fullName}
            </h3>
            <p
              className={`text-sm ${
                onlineUsers.includes(selectedUser._id)
                  ? "text-green-400"
                  : "text-zinc-400"
              }`}
            >
              {onlineUsers.includes(selectedUser._id) ? "Online" : "Offline"}
            </p>
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={() => setSelectedUser(null)}
          className="text-zinc-400 hover:text-purple-400 transition-colors"
        >
          <X />
        </button>
      </div>
    </div>
  );
};
export default ChatHeader;
