


// // // import { useChatStore } from "../store/useChatStore";

// // // import Sidebar from "../components/Sidebar";
// // // import NoChatSelected from "../components/NoChatSelected";
// // // import ChatContainer from "../components/ChatContainer";

// // // const HomePage = () => {
// // //   const { selectedUser } = useChatStore();

// // //   return (
// // //     <div
// // //       className="
// // //         h-screen bg-[#0b0b0f] text-white 
// // //         relative overflow-hidden
// // //       "
// // //     >
// // //       {/* 🔥 Neon Background Blobs (same as LoginPage) */}
// // //       <div className="absolute -top-32 -left-28 w-80 h-80 bg-purple-700 blur-[140px] opacity-25 rounded-full pointer-events-none" />
// // //       <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-600 blur-[160px] opacity-20 rounded-full pointer-events-none" />
// // //       <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-600 blur-[150px] opacity-10 rounded-full -translate-x-1/2 pointer-events-none" />

// // //       {/* MAIN CONTAINER */}
// // //       <div className="flex items-center justify-center pt-20 px-4 relative z-10">
// // //         <div
// // //           className="
// // //             bg-white/10 backdrop-blur-2xl 
// // //             border border-white/20 
// // //             rounded-2xl shadow-2xl 
// // //             w-full max-w-6xl
// // //             h-[calc(100vh-8rem)]
// // //           "
// // //         >
// // //           <div className="flex h-full rounded-2xl overflow-hidden">
// // //             <Sidebar />

// // //             {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default HomePage;



// // // // import { useChatStore } from "../store/useChatStore";
// // // // import Sidebar from "../components/Sidebar";
// // // // import NoChatSelected from "../components/NoChatSelected";
// // // // import ChatContainer from "../components/ChatContainer";

// // // // const HomePage = () => {
// // // //   const { selectedUser } = useChatStore();

// // // //   return (
// // // //     <div
// // // //       className="
// // // //         h-screen w-full
// // // //         bg-[#0b0b0f] text-white 
// // // //         relative overflow-hidden
// // // //       "
// // // //     >
// // // //       {/* Neon Background */}
// // // //       <div className="absolute -top-32 -left-28 w-80 h-80 bg-purple-700 blur-[150px] opacity-20 rounded-full" />
// // // //       <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-green-600 blur-[160px] opacity-20 rounded-full" />
// // // //       <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-600 blur-[140px] opacity-10 rounded-full -translate-x-1/2" />

// // // //       {/* MAIN GLASS WRAPPER */}
// // // //       <div className="pt-20 px-4 h-full flex justify-center relative z-10">
// // // //         <div
// // // //           className="
// // // //             w-full max-w-6xl 
// // // //             h-[calc(100vh-6rem)]
// // // //             bg-white/10 backdrop-blur-xl 
// // // //             border border-white/20 shadow-2xl
// // // //             rounded-2xl overflow-hidden flex
// // // //           "
// // // //         >
// // // //           <Sidebar />

// // // //           <div className="flex-1 h-full flex flex-col">
// // // //             {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default HomePage;





// // // // import { useChatStore } from "../store/useChatStore";
// // // // import Sidebar from "../components/Sidebar";
// // // // import NoChatSelected from "../components/NoChatSelected";
// // // // import ChatContainer from "../components/ChatContainer";

// // // // const HomePage = () => {
// // // //   const { selectedUser } = useChatStore();

// // // //   return (
// // // //     <div className="h-screen w-full bg-[#0b0b0f] text-white relative overflow-hidden">

// // // //       {/* Neon blobs */}
// // // //       <div className="absolute -top-32 -left-28 w-80 h-80 bg-purple-700 blur-[150px] opacity-20 rounded-full" />
// // // //       <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-green-600 blur-[160px] opacity-20 rounded-full" />
// // // //       <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-600 blur-[140px] opacity-10 rounded-full -translate-x-1/2" />

// // // //       {/* MAIN WRAPPER */}
// // // //       <div className="pt-20 px-2 sm:px-4 h-full flex justify-center relative z-10">
// // // //         <div
// // // //           className="
// // // //             w-full max-w-7xl 
// // // //             h-[calc(100vh-6rem)]
// // // //             bg-white/10 backdrop-blur-xl 
// // // //             border border-white/20 shadow-2xl
// // // //             rounded-2xl overflow-hidden 
// // // //             flex
// // // //           "
// // // //         >
// // // //           {/* SIDEBAR (responsive behavior) */}
// // // //           <div
// // // //             className={`
// // // //               ${selectedUser ? "hidden lg:block" : "block"}
// // // //               h-full 
// // // //               w-20 sm:w-28 md:w-40 lg:w-72 
// // // //               flex-shrink-0
// // // //             `}
// // // //           >
// // // //             <Sidebar />
// // // //           </div>

// // // //           {/* CHAT AREA */}
// // // //           <div className="flex-1 flex h-full overflow-hidden">
// // // //             {/* If no user selected → show placeholder */}
// // // //             {!selectedUser ? (
// // // //               <div className="hidden lg:flex flex-1">
// // // //                 <NoChatSelected />
// // // //               </div>
// // // //             ) : (
// // // //               <ChatContainer />
// // // //             )}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default HomePage;
  

// // // // //full screen
// // // // import { useChatStore } from "../store/useChatStore";
// // // // import Sidebar from "../components/Sidebar";
// // // // import NoChatSelected from "../components/NoChatSelected";
// // // // import ChatContainer from "../components/ChatContainer";

// // // // const HomePage = () => {
// // // //   const { selectedUser } = useChatStore();

// // // //   return (
// // // //     // <div className="pt-16 w-full h-full bg-[#0b0b0f] text-white relative overflow-hidden">
// // // // <div className="min-h-screen w-full h-full bg-[#0b0b0f] text-white flex flex-col overflow-hidden">

// // // //       {/* Neon Blobs */}
// // // //       <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-700 blur-[160px] opacity-25 rounded-full" />
// // // //       <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-green-600 blur-[200px] opacity-25 rounded-full" />
// // // //       <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-600 blur-[150px] opacity-15 rounded-full -translate-x-1/2" />

// // // //       {/* MAIN CHAT LAYOUT – FULL SCREEN */}
// // // //       {/* <div className="w-full h-full flex relative z-10 overflow-hidden"> */}

// // // //       {/* <div className="mt-0 flex-1 w-full flex overflow-hidden h-[calc(100vh-64px)]"> */}

// // // // <div className="flex-1 w-full flex overflow-hidden">

// // // //         {/* SIDEBAR */}
// // // //         <div
// // // //           className={`
// // // //             h-full flex-shrink-0
// // // //             w-20 sm:w-28 md:w-40 lg:w-72
// // // //             bg-white/5 backdrop-blur-xl border-r border-white/20
// // // //             transition-transform duration-300
// // // //             ${selectedUser ? "-translate-x-full lg:translate-x-0" : "translate-x-0"}
// // // //           `}
// // // //         >
// // // //           <Sidebar />
// // // //         </div>

// // // //         {/* CHAT AREA */}
// // // //         <div className="flex-1 flex h-full overflow-hidden">
// // // //           {!selectedUser ? (
// // // //             <NoChatSelected />
// // // //           ) : (
// // // //             <ChatContainer />
// // // //           )}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default HomePage;



// // import { useChatStore } from "../store/useChatStore";

// // import Sidebar from "../components/Sidebar";
// // import NoChatSelected from "../components/NoChatSelected";
// // import ChatContainer from "../components/ChatContainer";

// // const HomePage = () => {
// //   const { selectedUser } = useChatStore();

// //   return (
// //     <div className="h-screen bg-base-0">
// //       <div className="flex items-center justify-center pt-20 px-0">
// //         <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
// //           <div className="flex h-full rounded-lg overflow-hidden">
// //             <Sidebar />

// //             {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };
// // export default HomePage;


// import { useChatStore } from "../store/useChatStore";

// import Sidebar from "../components/Sidebar";
// import NoChatSelected from "../components/NoChatSelected";
// import ChatContainer from "../components/ChatContainer";

// const HomePage = () => {
//   const { selectedUser } = useChatStore();

//   return (
//     <div className="h-screen bg-base-200">
//       <div className="flex items-center justify-center pt-20 px-4">
//         <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl h-[calc(100vh-8rem)]">
//           <div className="flex h-full rounded-lg overflow-hidden">
//             <Sidebar />

//             {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default HomePage;


import { useChatStore } from "../store/useChatStore";

import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-screen bg-[#0b0b0f]">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-[#111118] border border-purple-500/10 rounded-lg shadow-xl w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden text-zinc-100">
            <Sidebar />

            {!selectedUser ? <NoChatSelected /> : <ChatContainer />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
