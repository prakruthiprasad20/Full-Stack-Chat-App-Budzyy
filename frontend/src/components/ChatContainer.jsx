import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import { useEffect, useRef } from "react";

import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import MessageSkeleton from "./skeletons/MessageSkeleton";
import { formatMessageTime } from "../lib/utils";

const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    subscribeToMessages,
    unsubscribeFromMessages,
    isTyping, // ✅ ADD THIS
  } = useChatStore();

  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  useEffect(() => {
    if (!selectedUser?._id) return;

    subscribeToMessages();
    getMessages(selectedUser._id);

    return () => unsubscribeFromMessages();
  }, [selectedUser?._id]);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (isMessagesLoading) {
    return (
      <div className="flex-1 flex flex-col bg-[#0b0b0f] text-zinc-100">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-[#0b0b0f] text-zinc-100">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => {
          const isMe = message.senderId === authUser._id;
          const prevMessage = messages[index - 1];
          const isSameSenderAsPrev =
            prevMessage && prevMessage.senderId === message.senderId;
          const isLast = index === messages.length - 1;

          return (
            <div
              key={message._id}
              ref={isLast ? messageEndRef : null}
              className={`flex items-end gap-3 ${
                isMe ? "justify-end" : "justify-start"
              }`}
            >
              {!isMe ? (
                !isSameSenderAsPrev ? (
                  <img
                    src={selectedUser.profilePic || "/avatar.png"}
                    alt="avatar"
                    className="w-9 h-9 rounded-full border border-purple-500/20"
                  />
                ) : (
                  <div className="w-9 h-9" />
                )
              ) : (
                <div className="w-9 h-9" />
              )}

              <div
                className={`max-w-[45%] px-4 py-2 rounded-2xl text-sm bg-[#161622] text-zinc-100 ${
                  isMe ? "rounded-br-md" : "rounded-bl-md"
                }`}
              >
                {message.image && (
                  <img
                    src={message.image}
                    alt="attachment"
                    className="max-w-[200px] rounded-md mb-2 border border-blue-500/20"
                  />
                )}

                {message.text && <p>{message.text}</p>}

                <div className="mt-1 flex items-center justify-end gap-1 text-[10px] opacity-70">
                  <span>{formatMessageTime(message.createdAt)}</span>
                </div>
              </div>

              {isMe ? (
                !isSameSenderAsPrev ? (
                  <img
                    src={authUser.profilePic || "/avatar.png"}
                    alt="avatar"
                    className="w-9 h-9 rounded-full border border-purple-500/20"
                  />
                ) : (
                  <div className="w-9 h-9" />
                )
              ) : (
                <div className="w-9 h-9" />
              )}
            </div>
          );
        })}

        {/* ✅ ADD THIS ENTIRE BLOCK - Typing indicator */}
        {isTyping && (
          <div className="flex items-end gap-3">
            <img
              src={selectedUser.profilePic || "/avatar.png"}
              alt="avatar"
              className="w-9 h-9 rounded-full border border-purple-500/20"
            />
            <div className="bg-[#161622] px-4 py-3 rounded-2xl rounded-bl-md">
              <div className="flex gap-1">
                <span 
                  className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" 
                  style={{ animationDelay: "0ms" }}
                ></span>
                <span 
                  className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" 
                  style={{ animationDelay: "150ms" }}
                ></span>
                <span 
                  className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" 
                  style={{ animationDelay: "300ms" }}
                ></span>
              </div>
            </div>
            <div className="w-9 h-9" />
          </div>
        )}

        <div ref={messageEndRef} />
      </div>

      <MessageInput />
    </div>
  );
};

export default ChatContainer;