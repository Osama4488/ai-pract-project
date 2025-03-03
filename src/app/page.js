

// // src/app/page.js
// "use client";
// import Head from "next/head";
// import { useState } from "react";

// export default function Home() {
//   const [theme, setTheme] = useState("dark");

//   const toggleTheme = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//   };

//   const testimonials = [
//     {
//       text: "Cursor’s AI turned my rough CV into a masterpiece in minutes!",
//       author: "Alex Brown, Job Seeker",
//     },
//     {
//       text: "Coding and CV building in one tool? Game changer.",
//       author: "Sam Lee, Developer",
//     },
//     {
//       text: "It’s like having an expert designer and coder in my pocket.",
//       author: "Priya Patel, Freelancer",
//     },
//   ];

//   return (
//     <div
//       className={`overflow-x-hidden min-h-screen ${
//         theme === "dark"
//           ? "bg-[#0d0d0d] text-white shadow-[inset_0_0_100px_rgba(0,0,0,0.8)]"
//           : "bg-white text-black shadow-[inset_0_0_100px_rgba(0,0,0,0.2)]"
//       }`}
//     >
//       <Head>
//         <title>Cursor - The AI-first CV & Code Editor</title>
//         <meta
//           name="description"
//           content="Built to make you extraordinarily productive, Cursor combines AI-powered coding with professional CV creation."
//         />
//       </Head>

//       {/* Navigation */}
//       <nav
//         className={`fixed top-0 w-full ${
//           theme === "dark" ? "bg-[#0d0d0d]/80 border-gray-800" : "bg-white/80 border-gray-200"
//         } backdrop-blur-md z-10 border-b animate-slide-down`}
//       >
//         <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//           <div className="text-xl font-bold">Cursor</div>
//           <div className="flex items-center space-x-8">
//             <a
//               href="#"
//               className={`${theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"} transition hover:scale-105`}
//             >
//               Docs
//             </a>
//             <a
//               href="#"
//               className={`${theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"} transition hover:scale-105`}
//             >
//               Blog
//             </a>
//             <a
//               href="#"
//               className={`${theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"} transition hover:scale-105`}
//             >
//               Pricing
//             </a>
//             <a
//               href="#"
//               className={`${theme === "dark" ? "bg-[#1a1a1a] text-white border-gray-700 hover:bg-gray-700" : "bg-gray-200 text-black border-gray-300 hover:bg-gray-300"} px-4 py-2 rounded-md border transition hover:scale-105`}
//             >
//               Download
//             </a>
//             <button
//               onClick={toggleTheme}
//               className={`${theme === "dark" ? "bg-gray-700" : "bg-gray-300"} p-2 rounded-full`}
//             >
//               {theme === "dark" ? "☀️" : "🌙"}
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section
//         className={`pt-24 pb-20 flex flex-col items-center justify-center min-h-screen ${
//           theme === "dark" ? "bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a]" : "bg-gradient-to-b from-gray-100 to-white"
//         }`}
//       >
//         <h1 className="text-6xl md:text-7xl font-extrabold text-center max-w-4xl px-6 leading-tight animate-fade-in">
//           The <span className="text-[#ff6c00]">AI-first</span> CV & Code Editor
//         </h1>
//         <p
//           className={`text-lg md:text-xl ${
//             theme === "dark" ? "text-gray-400" : "text-gray-600"
//           } mt-6 max-w-xl text-center px-6 animate-fade-in-delay`}
//         >
//           Built to make you extraordinarily productive, Cursor empowers you to code and craft standout CVs with AI.
//         </p>
//         <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
//           <a
//             href="#"
//             className="bg-[#ff6c00] px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#e65c00] transition transform hover:scale-105 animate-bounce-in text-white"
//           >
//             Download for Free
//           </a>
//           <a
//             href="#"
//             className={`${theme === "dark" ? "border-gray-600 hover:border-[#ff6c00] hover:text-[#ff6c00]" : "border-gray-300 hover:border-[#ff6c00] hover:text-[#ff6c00]"} border px-6 py-3 rounded-md text-lg font-semibold transition transform hover:scale-105 animate-bounce-in-delay`}
//           >
//             Watch Demo
//           </a>
//         </div>
//         <p
//           className={`text-sm ${theme === "dark" ? "text-gray-500" : "text-gray-400"} mt-6 animate-fade-in-delay-2`}
//         >
//           Available on macOS, Windows, and Linux
//         </p>
//         <img
//           src="https://images.unsplash.com/photo-1516321310766-8f6f9b1e5675?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//           alt="CV Builder Demo"
//           className="mt-12 rounded-lg shadow-2xl animate-slide-up"
//         />
//       </section>

//       {/* Video/Demo Section */}
//       <section className={`py-16 ${theme === "dark" ? "bg-[#1a1a1a]" : "bg-gray-50"}`}>
//         <div className="max-w-5xl mx-auto px-6">
//           <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">See Cursor in Action</h2>
//           <div className="relative rounded-lg overflow-hidden shadow-2xl border animate-slide-up">
//             <video autoPlay loop muted className="w-full" src="https://cursor.com/video/cursor-demo.mp4">
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 max-w-5xl mx-auto px-6">
//         <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
//           Why Choose Cursor for Coding & CVs
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div
//             className={`p-6 rounded-lg border transform hover:scale-105 transition animate-slide-up ${
//               theme === "dark" ? "bg-[#141414] border-gray-800" : "bg-white border-gray-200"
//             }`}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
//               alt="Tab Autocomplete"
//               className="w-16 h-16 mb-4"
//             />
//             <h3 className="text-xl font-semibold mb-2">Tab Autocomplete</h3>
//             <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
//               Predicts your next edit with shocking accuracy. Hit Tab to accept.
//             </p>
//           </div>
//           <div
//             className={`p-6 rounded-lg border transform hover:scale-105 transition animate-slide-up-delay ${
//               theme === "dark" ? "bg-[#141414] border-gray-800" : "bg-white border-gray-200"
//             }`}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
//               alt="AI CV Creator"
//               className="w-16 h-16 mb-4"
//             />
//             <h3 className="text-xl font-semibold mb-2">AI CV Creator</h3>
//             <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
//               Build professional CVs with AI-driven suggestions and templates.
//             </p>
//           </div>
//           <div
//             className={`p-6 rounded-lg border transform hover:scale-105 transition animate-slide-up-delay-2 ${
//               theme === "dark" ? "bg-[#141414] border-gray-800" : "bg-white border-gray-200"
//             }`}
//           >
//             <img
//               src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
//               alt="Inline Edits"
//               className="w-16 h-16 mb-4"
//             />
//             <h3 className="text-xl font-semibold mb-2">Inline AI Edits</h3>
//             <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
//               Highlight code or text, press Cmd + K, and describe your changes.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* CV Templates Section */}
//       <section className={`py-20 ${theme === "dark" ? "bg-[#1a1a1a]" : "bg-gray-50"}`}>
//         <div className="max-w-5xl mx-auto px-6">
//           <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
//             Stunning CV Templates
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div
//               className={`p-6 rounded-lg border transform hover:scale-105 transition animate-slide-up ${
//                 theme === "dark" ? "bg-[#141414] border-gray-800" : "bg-white border-gray-200"
//               }`}
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80"
//                 alt="Modern CV Template"
//                 className="w-full h-48 object-cover rounded-md mb-4"
//               />
//               <h3 className="text-xl font-semibold">Modern</h3>
//               <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>Sleek and professional design.</p>
//             </div>
//             <div
//               className={`p-6 rounded-lg border transform hover:scale-105 transition animate-slide-up-delay ${
//                 theme === "dark" ? "bg-[#141414] border-gray-800" : "bg-white border-gray-200"
//               }`}
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1507238699319-4499a93ce850?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80"
//                 alt="Creative CV Template"
//                 className="w-full h-48 object-cover rounded-md mb-4"
//               />
//               <h3 className="text-xl font-semibold">Creative</h3>
//               <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>Bold and unique layouts.</p>
//             </div>
//             <div
//               className={`p-6 rounded-lg border transform hover:scale-105 transition animate-slide-up-delay-2 ${
//                 theme === "dark" ? "bg-[#141414] border-gray-800" : "bg-white border-gray-200"
//               }`}
//             >
//               <img
//                 src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80"
//                 alt="Classic CV Template"
//                 className="w-full h-48 object-cover rounded-md mb-4"
//               />
//               <h3 className="text-xl font-semibold">Classic</h3>
//               <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>Timeless and elegant style.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-20">
//         <div className="max-w-5xl mx-auto px-6">
//           <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
//             Loved by Developers & Job Seekers
//           </h2>
//           <div className="overflow-hidden">
//             <div
//               className="flex animate-scroll-testimonials hover:pause-animation"
//               style={{ width: `${testimonials.length * 350 * 2}px` }}
//             >
//               {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
//                 <div
//                   key={index}
//                   className={`relative min-w-[350px] p-8 rounded-lg border ${
//                     theme === "dark" ? "bg-[#141414] border-gray-800" : "bg-white border-gray-200"
//                   } mx-4 group hover:shadow-lg`}
//                 >
//                   <p
//                     className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"} italic text-lg`}
//                   >
//                     "{testimonial.text}"
//                   </p>
//                   <p
//                     className={`${theme === "dark" ? "text-gray-500" : "text-gray-400"} mt-4 text-base`}
//                   >
//                     - {testimonial.author}
//                   </p>
//                   <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#ff6c00]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Vertical Loader Section */}
//       <section className={`py-20 ${theme === "dark" ? "bg-[#1a1a1a]" : "bg-gray-50"}`}>
//         <div className="max-w-5xl mx-auto px-6">
//           <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
//             Explore Our Features
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Column 1 (Up) */}
//             <div className="overflow-hidden h-[500px]">
//               <div className="flex flex-col animate-scroll-vertical-up hover:pause-animation">
//                 {[...testimonials, ...testimonials].map((item, index) => (
//                   <div
//                     key={`col1-${index}`}
//                     className={`relative p-6 mb-6 rounded-lg border ${
//                       theme === "dark" ? "bg-[#141414] border-gray-800" : "bg-white border-gray-200"
//                     } group hover:shadow-lg`}
//                   >
//                     <p
//                       className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"} text-lg`}
//                     >
//                       {item.text}
//                     </p>
//                     <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#ff6c00]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             {/* Column 2 (Down) */}
//             <div className="overflow-hidden h-[500px]">
//               <div className="flex flex-col animate-scroll-vertical-down hover:pause-animation">
//                 {[...testimonials, ...testimonials].map((item, index) => (
//                   <div
//                     key={`col2-${index}`}
//                     className={`relative p-6 mb-6 rounded-lg border ${
//                       theme === "dark" ? "bg-[#141414] border-gray-800" : "bg-white border-gray-200"
//                     } group hover:shadow-lg`}
//                   >
//                     <p
//                       className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"} text-lg`}
//                     >
//                       {item.text}
//                     </p>
//                     <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#ff6c00]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             {/* Column 3 (Up) */}
//             <div className="overflow-hidden h-[500px]">
//               <div className="flex flex-col animate-scroll-vertical-up hover:pause-animation">
//                 {[...testimonials, ...testimonials].map((item, index) => (
//                   <div
//                     key={`col3-${index}`}
//                     className={`relative p-6 mb-6 rounded-lg border ${
//                       theme === "dark" ? "bg-[#141414] border-gray-800" : "bg-white border-gray-200"
//                     } group hover:shadow-lg`}
//                   >
//                     <p
//                       className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"} text-lg`}
//                     >
//                       {item.text}
//                     </p>
//                     <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#ff6c00]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section
//         className={`py-20 text-center ${
//           theme === "dark" ? "bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]" : "bg-gradient-to-b from-gray-50 to-white"
//         }`}
//       >
//         <h2 className="text-4xl font-bold mb-6 animate-fade-in">
//           Build Your Future Today
//         </h2>
//         <p
//           className={`text-lg ${theme === "dark" ? "text-gray-400" : "text-gray-600"} mb-8 max-w-xl mx-auto animate-fade-in-delay`}
//         >
//           Join thousands who’ve leveled up their coding and careers with Cursor.
//         </p>
//         <a
//           href="#"
//           className="bg-[#ff6c00] px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#e65c00] transition transform hover:scale-105 animate-bounce-in text-white"
//         >
//           Download Now
//         </a>
//       </section>

//       {/* Footer */}
//       <footer
//         className={`py-12 ${theme === "dark" ? "bg-[#141414] border-gray-800" : "bg-gray-100 border-gray-200"} border-t`}
//       >
//         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
//           <div
//             className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} mb-4 md:mb-0`}
//           >
//             © 2025 Cursor. All rights reserved.
//           </div>
//           <div className="flex space-x-6">
//             <a
//               href="#"
//               className={`${theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"} transition hover:scale-105`}
//             >
//               Twitter
//             </a>
//             <a
//               href="#"
//               className={`${theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"} transition hover:scale-105`}
//             >
//               GitHub
//             </a>
//             <a
//               href="#"
//               className={`${theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"} transition hover:scale-105`}
//             >
//               Discord
//             </a>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// src/app/page.js
"use client";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const testimonials = [
    {
      text: "Cursor’s AI turned my rough CV into a masterpiece in minutes!",
      author: "Alex Brown, Job Seeker",
    },
    {
      text: "Coding and CV building in one tool? Game changer.",
      author: "Sam Lee, Developer",
    },
    {
      text: "It’s like having an expert designer and coder in my pocket.",
      author: "Priya Patel, Freelancer",
    },
  ];

  return (
    <div
      className={`relative overflow-x-hidden min-h-screen ${
        theme === "dark" ? "bg-[#0d0d0d] text-white" : "bg-white text-black"
      }`}
    >
      <Head>
        <title>Cursor - The AI-first CV & Code Editor</title>
        <meta
          name="description"
          content="Built to make you extraordinarily productive, Cursor combines AI-powered coding with professional CV creation."
        />
      </Head>

      {/* Dimming Overlay */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          theme === "dark"
            ? "bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_20%,rgba(0,0,0,0.9)_100%)]"
            : "bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_20%,rgba(0,0,0,0.3)_100%)]"
        }`}
      ></div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full ${
          theme === "dark" ? "bg-[#0d0d0d]/80 border-gray-800" : "bg-white/80 border-gray-200"
        } backdrop-blur-md z-10 border-b animate-slide-down`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">Cursor</div>
          <div className="flex items-center space-x-8">
            <a
              href="#"
              className={`${theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"} transition hover:scale-105`}
            >
              Docs
            </a>
            <a
              href="#"
              className={`${theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"} transition hover:scale-105`}
            >
              Blog
            </a>
            <a
              href="#"
              className={`${theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"} transition hover:scale-105`}
            >
              Pricing
            </a>
            <a
              href="#"
              className={`${theme === "dark" ? "bg-[#1a1a1a] text-white border-gray-700 hover:bg-gray-700" : "bg-gray-200 text-black border-gray-300 hover:bg-gray-300"} px-4 py-2 rounded-md border transition hover:scale-105`}
            >
              Download
            </a>
            <button
              onClick={toggleTheme}
              className={`${theme === "dark" ? "bg-gray-700" : "bg-gray-300"} p-2 rounded-full`}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className={`pt-24 pb-20 flex flex-col items-center justify-center min-h-screen ${
          theme === "dark" ? "bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a]" : "bg-gradient-to-b from-gray-100 to-white"
        }`}
      >
        <h1 className="text-6xl md:text-7xl font-extrabold text-center max-w-4xl px-6 leading-tight animate-fade-in relative z-10">
          The <span className="text-[#ff6c00]">AI-first</span> CV & Code Editor
        </h1>
        <p
          className={`text-lg md:text-xl ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          } mt-6 max-w-xl text-center px-6 animate-fade-in-delay relative z-10`}
        >
          Built to make you extraordinarily productive, Cursor empowers you to code and craft standout CVs with AI.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 relative z-10">
          <a
            href="#"
            className="bg-[#ff6c00] px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#e65c00] transition transform hover:scale-105 animate-bounce-in text-white"
          >
            Download for Free
          </a>
          <a
            href="#"
            className={`${theme === "dark" ? "border-gray-600 hover:border-[#ff6c00] hover:text-[#ff6c00]" : "border-gray-300 hover:border-[#ff6c00] hover:text-[#ff6c00]"} border px-6 py-3 rounded-md text-lg font-semibold transition transform hover:scale-105 animate-bounce-in-delay`}
          >
            Watch Demo
          </a>
        </div>
        <p
          className={`text-sm ${theme === "dark" ? "text-gray-500" : "text-gray-400"} mt-6 animate-fade-in-delay-2 relative z-10`}
        >
          Available on macOS, Windows, and Linux
        </p>
        <img
          src="https://images.unsplash.com/photo-1516321310766-8f6f9b1e5675?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="CV Builder Demo"
          className="mt-12 rounded-lg shadow-2xl animate-slide-up relative z-10"
        />
      </section>

      {/* Video/Demo Section */}
      <section className={`py-16 ${theme === "dark" ? "bg-[#1a1a1a]" : "bg-gray-50"}`}>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
            See Cursor in Action
          </h2>
          <div className="relative rounded-lg overflow-hidden shadow-2xl border animate-slide-up">
            <video autoPlay loop muted className="w-full" src="https://cursor.com/video/cursor-demo.mp4">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 max-w-5xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
          Why Choose Cursor for Coding & CVs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className={`p-6 rounded-lg border transform hover:scale-105 transition animate-slide-up ${
              theme === "dark" ? "bg-[#141414] border-gray-800" : "bg-white border-gray-200"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
              alt="Tab Autocomplete"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Tab Autocomplete</h3>
            <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              Predicts your next edit with shocking accuracy. Hit Tab to accept.
            </p>
          </div>
          <div
            className={`p-6 rounded-lg border transform hover:scale-105 transition animate-slide-up-delay ${
              theme === "dark" ? "bg-[#141414] border-gray-800" : "bg-white border-gray-200"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
              alt="AI CV Creator"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">AI CV Creator</h3>
            <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              Build professional CVs with AI-driven suggestions and templates.
            </p>
          </div>
          <div
            className={`p-6 rounded-lg border transform hover:scale-105 transition animate-slide-up-delay-2 ${
              theme === "dark" ? "bg-[#141414] border-gray-800" : "bg-white border-gray-200"
            }`}
          >
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
              alt="Inline Edits"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Inline AI Edits</h3>
            <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              Highlight code or text, press Cmd + K, and describe your changes.
            </p>
          </div>
        </div>
      </section>

      {/* CV Templates Section */}
      <section className={`py-20 ${theme === "dark" ? "bg-[#1a1a1a]" : "bg-gray-50"}`}>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
            Stunning CV Templates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              className={`p-6 rounded-lg border transform hover:scale-105 transition animate-slide-up ${
                theme === "dark" ? "bg-[#141414] border-gray-800" : "bg-white border-gray-200"
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80"
                alt="Modern CV Template"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">Modern</h3>
              <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>Sleek and professional design.</p>
            </div>
            <div
              className={`p-6 rounded-lg border transform hover:scale-105 transition animate-slide-up-delay ${
                theme === "dark" ? "bg-[#141414] border-gray-800" : "bg-white border-gray-200"
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1507238699319-4499a93ce850?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80"
                alt="Creative CV Template"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">Creative</h3>
              <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>Bold and unique layouts.</p>
            </div>
            <div
              className={`p-6 rounded-lg border transform hover:scale-105 transition animate-slide-up-delay-2 ${
                theme === "dark" ? "bg-[#141414] border-gray-800" : "bg-white border-gray-200"
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80"
                alt="Classic CV Template"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">Classic</h3>
              <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>Timeless and elegant style.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
            Loved by Developers & Job Seekers
          </h2>
          <div className="overflow-hidden">
            <div
              className="flex animate-scroll-testimonials hover:pause-animation"
              style={{ width: `${testimonials.length * 350 * 2}px` }}
            >
              {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={index}
                  className={`relative min-w-[350px] p-8 rounded-lg border ${
                    theme === "dark" ? "bg-[#141414] border-gray-800" : "bg-white border-gray-200"
                  } mx-4 group hover:shadow-lg`}
                >
                  <p
                    className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"} italic text-lg`}
                  >
                    "{testimonial.text}"
                  </p>
                  <p
                    className={`${theme === "dark" ? "text-gray-500" : "text-gray-400"} mt-4 text-base`}
                  >
                    - {testimonial.author}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#ff6c00]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vertical Loader Section */}
      <section className={`py-20 ${theme === "dark" ? "bg-[#1a1a1a]" : "bg-gray-50"}`}>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">
            Explore Our Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 (Up) */}
            <div className="overflow-hidden h-[500px]">
              <div className="flex flex-col animate-scroll-vertical-up hover:pause-animation">
                {[...testimonials, ...testimonials].map((item, index) => (
                  <div
                    key={`col1-${index}`}
                    className={`relative p-6 mb-6 rounded-lg border ${
                      theme === "dark" ? "bg-[#141414] border-gray-800" : "bg-white border-gray-200"
                    } group hover:shadow-lg`}
                  >
                    <p
                      className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"} text-lg`}
                    >
                      {item.text}
                    </p>
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#ff6c00]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                ))}
              </div>
            </div>
            {/* Column 2 (Down) */}
            <div className="overflow-hidden h-[500px]">
              <div className="flex flex-col animate-scroll-vertical-down hover:pause-animation">
                {[...testimonials, ...testimonials].map((item, index) => (
                  <div
                    key={`col2-${index}`}
                    className={`relative p-6 mb-6 rounded-lg border ${
                      theme === "dark" ? "bg-[#141414] border-gray-800" : "bg-white border-gray-200"
                    } group hover:shadow-lg`}
                  >
                    <p
                      className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"} text-lg`}
                    >
                      {item.text}
                    </p>
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#ff6c00]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                ))}
              </div>
            </div>
            {/* Column 3 (Up) */}
            <div className="overflow-hidden h-[500px]">
              <div className="flex flex-col animate-scroll-vertical-up hover:pause-animation">
                {[...testimonials, ...testimonials].map((item, index) => (
                  <div
                    key={`col3-${index}`}
                    className={`relative p-6 mb-6 rounded-lg border ${
                      theme === "dark" ? "bg-[#141414] border-gray-800" : "bg-white border-gray-200"
                    } group hover:shadow-lg`}
                  >
                    <p
                      className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"} text-lg`}
                    >
                      {item.text}
                    </p>
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#ff6c00]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className={`py-20 text-center ${
          theme === "dark" ? "bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]" : "bg-gradient-to-b from-gray-50 to-white"
        }`}
      >
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in">
            Build Your Future Today
          </h2>
          <p
            className={`text-lg ${theme === "dark" ? "text-gray-400" : "text-gray-600"} mb-8 max-w-xl mx-auto animate-fade-in-delay`}
          >
            Join thousands who’ve leveled up their coding and careers with Cursor.
          </p>
          <a
            href="#"
            className="bg-[#ff6c00] px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#e65c00] transition transform hover:scale-105 animate-bounce-in text-white"
          >
            Download Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-12 ${theme === "dark" ? "bg-[#141414] border-gray-800" : "bg-gray-100 border-gray-200"} border-t`}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center relative z-10">
          <div
            className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} mb-4 md:mb-0`}
          >
            © 2025 Cursor. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className={`${theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"} transition hover:scale-105`}
            >
              Twitter
            </a>
            <a
              href="#"
              className={`${theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"} transition hover:scale-105`}
            >
              GitHub
            </a>
            <a
              href="#"
              className={`${theme === "dark" ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"} transition hover:scale-105`}
            >
              Discord
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}