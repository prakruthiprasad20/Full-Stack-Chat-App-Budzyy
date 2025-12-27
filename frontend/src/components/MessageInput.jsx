import { useRef, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { Image, Send, X } from "lucide-react";
import toast from "react-hot-toast";
import { useAuthStore } from "../store/useAuthStore"; // ✅ ADD THIS IMPORT

const MessageInput = () => {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const typingTimeoutRef = useRef(null); // ✅ ADD THIS

  const { sendMessage, selectedUser } = useChatStore(); // ✅ ADD selectedUser
  const { socket } = useAuthStore(); // ✅ ADD THIS

  // ✅ ADD THIS FUNCTION
  const handleTyping = () => {
    if (!socket || !selectedUser) return;

    socket.emit("typing", { receiverId: selectedUser._id });

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      socket.emit("stopTyping", { receiverId: selectedUser._id });
    }, 2000);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;

    // ✅ ADD THIS - Stop typing when sending
    if (socket && selectedUser) {
      socket.emit("stopTyping", { receiverId: selectedUser._id });
    }

    try {
      await sendMessage({
        text: text.trim(),
        image: imagePreview,
      });

      setText("");
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div className="p-4 w-full bg-[#0e0e14] border-t border-purple-500/10">
      {imagePreview && (
        <div className="mb-3 flex items-center gap-2">
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-20 h-20 object-cover rounded-lg border border-blue-500/30"
            />
            <button
              onClick={removeImage}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#161622]
              flex items-center justify-center border border-purple-500/30"
              type="button"
            >
              <X className="size-3 text-zinc-200" />
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSendMessage} className="flex items-center gap-2">
        <div className="flex-1 flex gap-2">
          <input
            type="text"
            className="w-full input input-bordered rounded-lg input-sm sm:input-md
            bg-[#0b0b0f] text-zinc-100 border-purple-500/20 placeholder:text-zinc-500"
            placeholder="Type a message..."
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              handleTyping(); // ✅ ADD THIS - Call typing function
            }}
          />

          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageChange}
          />

          <button
            type="button"
            className={`hidden sm:flex btn btn-circle bg-transparent border border-blue-500/20
              hover:bg-blue-500/10 transition-colors
              ${imagePreview ? "text-emerald-400" : "text-zinc-400"}`}
            onClick={() => fileInputRef.current?.click()}
          >
            <Image size={20} />
          </button>
        </div>

        <button
          type="submit"
          className="btn btn-sm btn-circle bg-purple-600 hover:bg-purple-700
          text-white disabled:bg-purple-600/40"
          disabled={!text.trim() && !imagePreview}
        >
          <Send size={22} />
        </button>
      </form>
    </div>
  );
};
export default MessageInput;