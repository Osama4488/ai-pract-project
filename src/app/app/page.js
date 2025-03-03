// // src/app/app/page.js
// "use client";
// import { useState } from "react";

// export default function CVBuilder() {
//   const [theme, setTheme] = useState("dark");
//   const [input, setInput] = useState("");
//   const [output, setOutput] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const toggleTheme = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//   };

//   const handleCVAction = async (action) => {
//     setIsLoading(true);
//     setOutput("");

//     const prompt =
//       action === "create"
//         ? "Generate a professional CV tailored for the Pakistani job market. Include sections for personal info, education, experience, and skills."
//         : `Upgrade this existing CV for the Pakistani job market: ${input}. Enhance it with better wording, structure, and relevant keywords.`;

//     try {
//       const response = await fetch("http://127.0.0.1:11434/v1/completions", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           model: "llama2:7b-chat",
//           prompt: prompt,
//           stream: true,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch from local AI server");
//       }

//       const reader = response.body.getReader();
//       const decoder = new TextDecoder();

//       while (true) {
//         const { done, value } = await reader.read();
//         if (done) break;
//         const chunk = decoder.decode(value, { stream: true });
//         const lines = chunk.split("\n").filter((line) => line.trim());

//         for (const line of lines) {
//           if (line.startsWith("data:")) {
//             const jsonStr = line.replace("data:", "").trim();
//             // Skip non-JSON lines like [DONE]
//             if (!jsonStr.startsWith("{") || jsonStr === "[DONE]") {
//               console.log("Skipping non-JSON line:", jsonStr);
//               continue;
//             }
//             try {
//               const data = JSON.parse(jsonStr);
//               if (data.choices && data.choices[0].text) {
//                 setOutput((prev) => prev + data.choices[0].text);
//               }
//             } catch (e) {
//               console.error("Error parsing JSON from line:", line, e);
//             }
//           }
//         }
//       }
//     } catch (error) {
//       setOutput(`Error: ${error.message}. Ensure the local AI server is running at http://127.0.0.1:11434.`);
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div
//       className={`relative min-h-screen flex flex-col items-center justify-center p-6 ${
//         theme === "dark" ? "bg-[#0d0d0d] text-white" : "bg-white text-black"
//       }`}
//     >
//       <button
//         onClick={toggleTheme}
//         className={`absolute top-4 right-4 p-2 rounded-full ${
//           theme === "dark" ? "bg-gray-700" : "bg-gray-300"
//         }`}
//       >
//         {theme === "dark" ? "☀️" : "🌙"}
//       </button>

//       <div
//         className={`absolute inset-0 pointer-events-none ${
//           theme === "dark"
//             ? "bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_20%,rgba(0,0,0,0.9)_100%)]"
//             : "bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_20%,rgba(0,0,0,0.3)_100%)]"
//         }`}
//       ></div>

//       <div className="max-w-3xl w-full relative z-10">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8">
//           CV Builder <span className="text-[#ff6c00]">for Pakistan</span>
//         </h1>
//         <p
//           className={`text-lg text-center mb-12 ${
//             theme === "dark" ? "text-gray-400" : "text-gray-600"
//           }`}
//         >
//           Create a new CV or upgrade your existing one for just 100 PKR using AI-powered tools.
//         </p>

//         <div
//           className={`p-6 rounded-lg ${
//             theme === "dark" ? "bg-[#141414] border-gray-800" : "bg-gray-100 border-gray-200"
//           } border`}
//         >
//           <div className="flex flex-col sm:flex-row gap-4 mb-6">
//             <button
//               onClick={() => handleCVAction("create")}
//               disabled={isLoading}
//               className={`flex-1 px-6 py-3 rounded-md text-lg font-semibold transition transform hover:scale-105 ${
//                 theme === "dark"
//                   ? "bg-[#ff6c00] text-white hover:bg-[#e65c00]"
//                   : "bg-[#ff6c00] text-white hover:bg-[#e65c00]"
//               } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
//             >
//               Create New CV
//             </button>
//             <button
//               onClick={() => handleCVAction("upgrade")}
//               disabled={isLoading || !input}
//               className={`flex-1 px-6 py-3 rounded-md text-lg font-semibold transition transform hover:scale-105 ${
//                 theme === "dark"
//                   ? "border-gray-600 hover:border-[#ff6c00] hover:text-[#ff6c00]"
//                   : "border-gray-300 hover:border-[#ff6c00] hover:text-[#ff6c00]"
//               } border ${isLoading || !input ? "opacity-50 cursor-not-allowed" : ""}`}
//             >
//               Upgrade Existing CV
//             </button>
//           </div>

//           <textarea
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Paste your existing CV here to upgrade..."
//             className={`w-full h-32 p-4 rounded-md border resize-none focus:outline-none focus:ring-2 focus:ring-[#ff6c00] ${
//               theme === "dark"
//                 ? "bg-[#1a1a1a] text-gray-300 border-gray-700"
//                 : "bg-white text-gray-700 border-gray-300"
//             }`}
//             disabled={isLoading}
//           />
//         </div>

//         <div
//           className={`mt-6 p-6 rounded-lg min-h-[200px] ${
//             theme === "dark" ? "bg-[#141414] border-gray-800" : "bg-gray-100 border-gray-200"
//           } border`}
//         >
//           <h2
//             className={`text-xl font-semibold mb-4 ${
//               theme === "dark" ? "text-gray-300" : "text-gray-700"
//             }`}
//           >
//             Your CV Output
//           </h2>
//           {isLoading ? (
//             <p
//               className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} animate-pulse`}
//             >
//               Generating...
//             </p>
//           ) : output ? (
//             <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"} whitespace-pre-wrap`}>
//               {output}
//             </p>
//           ) : (
//             <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
//               Click a button above to generate or upgrade your CV.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }




// src/app/app/page.js
// "use client";
// import { useState } from "react";

// export default function CVBuilder() {
//   const [theme, setTheme] = useState("dark");
//   const [input, setInput] = useState("");
//   const [output, setOutput] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const toggleTheme = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//   };

//   const handleCVAction = async (action) => {
//     setIsLoading(true);
//     setOutput("");

//     const prompt =
//       action === "create"
//         ? "Generate a professional CV tailored for the Pakistani job market. Include sections for personal info, education, experience, and skills."
//         : `Upgrade this existing CV for the Pakistani job market: ${input}. Enhance it with better wording, structure, and relevant keywords.`;

//     const apiKey = "AIzaSyDbXismsRb7vwnHvjcsEdLV0BQLmGNZRyI";
//     const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:streamGenerateContent?key=${apiKey}&alt=sse`;

//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           contents: [
//             {
//               parts: [
//                 {
//                   text: prompt,
//                 },
//               ],
//             },
//           ],
//         }),
//       });

//       if (!response.ok) {
//         throw new Error(`API request failed with status ${response.status}`);
//       }

//       const reader = response.body.getReader();
//       const decoder = new TextDecoder("utf-8");

//       while (true) {
//         const { done, value } = await reader.read();
//         if (done) {
//           console.log("Stream complete");
//           break;
//         }

//         const chunk = decoder.decode(value, { stream: true });
//         const lines = chunk.split("\n").filter((line) => line.trim());

//         for (const line of lines) {
//           if (line.startsWith("data: ")) {
//             const jsonStr = line.replace("data: ", "").trim();
//             if (jsonStr === "[DONE]") {
//               console.log("Received [DONE] signal");
//               continue;
//             }
//             try {
//               const data = JSON.parse(jsonStr);
//               const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
//               if (text) {
//                 setOutput((prev) => prev + text);
//               }
//             } catch (e) {
//               console.error("Error parsing JSON from line:", line, e);
//             }
//           }
//         }
//       }
//     } catch (error) {
//       setOutput(`Error: ${error.message}. Check your Gemini API key or network connection.`);
//       console.error("Streaming error:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div
//       className={`relative min-h-screen flex flex-col items-center justify-center p-6 ${
//         theme === "dark" ? "bg-[#0d0d0d] text-white" : "bg-white text-black"
//       }`}
//     >
//       <button
//         onClick={toggleTheme}
//         className={`absolute top-4 right-4 p-2 rounded-full ${
//           theme === "dark" ? "bg-gray-700" : "bg-gray-300"
//         }`}
//       >
//         {theme === "dark" ? "☀️" : "🌙"}
//       </button>

//       <div
//         className={`absolute inset-0 pointer-events-none ${
//           theme === "dark"
//             ? "bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_20%,rgba(0,0,0,0.9)_100%)]"
//             : "bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_20%,rgba(0,0,0,0.3)_100%)]"
//         }`}
//       ></div>

//       <div className="max-w-3xl w-full relative z-10">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8">
//           CV Builder <span className="text-[#ff6c00]">for Pakistan</span>
//         </h1>
//         <p
//           className={`text-lg text-center mb-12 ${
//             theme === "dark" ? "text-gray-400" : "text-gray-600"
//           }`}
//         >
//           Create a new CV or upgrade your existing one for just 100 PKR using AI-powered tools.
//         </p>

//         <div
//           className={`p-6 rounded-lg ${
//             theme === "dark" ? "bg-[#141414] border-gray-800" : "bg-gray-100 border-gray-200"
//           } border`}
//         >
//           <div className="flex flex-col sm:flex-row gap-4 mb-6">
//             <button
//               onClick={() => handleCVAction("create")}
//               disabled={isLoading}
//               className={`flex-1 px-6 py-3 rounded-md text-lg font-semibold transition transform hover:scale-105 ${
//                 theme === "dark"
//                   ? "bg-[#ff6c00] text-white hover:bg-[#e65c00]"
//                   : "bg-[#ff6c00] text-white hover:bg-[#e65c00]"
//               } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
//             >
//               Create New CV
//             </button>
//             <button
//               onClick={() => handleCVAction("upgrade")}
//               disabled={isLoading || !input}
//               className={`flex-1 px-6 py-3 rounded-md text-lg font-semibold transition transform hover:scale-105 ${
//                 theme === "dark"
//                   ? "border-gray-600 hover:border-[#ff6c00] hover:text-[#ff6c00]"
//                   : "border-gray-300 hover:border-[#ff6c00] hover:text-[#ff6c00]"
//               } border ${isLoading || !input ? "opacity-50 cursor-not-allowed" : ""}`}
//             >
//               Upgrade Existing CV
//             </button>
//           </div>

//           <textarea
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Paste your existing CV here to upgrade..."
//             className={`w-full h-32 p-4 rounded-md border resize-none focus:outline-none focus:ring-2 focus:ring-[#ff6c00] ${
//               theme === "dark"
//                 ? "bg-[#1a1a1a] text-gray-300 border-gray-700"
//                 : "bg-white text-gray-700 border-gray-300"
//             }`}
//             disabled={isLoading}
//           />
//         </div>

//         <div
//           className={`mt-6 p-6 rounded-lg min-h-[200px] ${
//             theme === "dark" ? "bg-[#141414] border-gray-800" : "bg-gray-100 border-gray-200"
//           } border`}
//         >
//           <h2
//             className={`text-xl font-semibold mb-4 ${
//               theme === "dark" ? "text-gray-300" : "text-gray-700"
//             }`}
//           >
//             Your CV Output
//           </h2>
//           {isLoading && !output ? (
//             <p
//               className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} animate-pulse`}
//             >
//               Generating...
//             </p>
//           ) : output ? (
//             <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"} whitespace-pre-wrap`}>
//               {output}
//             </p>
//           ) : (
//             <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
//               Click a button above to generate or upgrade your CV.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }




// src/app/app/page.js
"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function CVBuilder() {
  const [theme, setTheme] = useState("dark");
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [cvContent, setCvContent] = useState("");
  const [uploadedCV, setUploadedCV] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const templates = [
    { id: 1, name: "Modern", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80" },
    { id: 2, name: "Creative", img: "https://images.unsplash.com/photo-1507238699319-4499a93ce850?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80" },
    { id: 3, name: "Classic", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400&q=80" },
  ];

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setCvContent(`**[${template.name} Template]**\n\n**Personal Info**\nName: [Your Name]\nEmail: [Your Email]\n\n**Education**\n[Your Education]\n\n**Experience**\n[Your Experience]\n\n**Skills**\n[Your Skills]`);
  };

  const handleCVExport = () => {
    alert("Payment simulation: Please pay 100 PKR to export your CV.");
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setUploadedCV(file);
      const mockCVContent = `**Syed Osama Ali**\nEmail: syed.osama@example.com\nPhone: +92 123 456 7890\n\n**Education**\nBSCS - [University Name], Karachi - 2020\n\n**Experience**\nSoftware Developer - [Company Name], Karachi - 2021-Present\n- Developed web applications\n\n**Skills**\n- JavaScript, Python, Next.js`;
      setCvContent(mockCVContent);
      setChatMessages([{ sender: "system", text: "CV uploaded successfully. How can I assist you?" }]);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  const handleChatSubmit = async () => {
    if (!chatInput) return;
    setIsLoading(true);
    setChatMessages((prev) => [...prev, { sender: "user", text: chatInput }]);

    const prompt = uploadedCV
      ? `Here is the CV content: "${cvContent}". Based on this, respond to the user request: "${chatInput}"`
      : chatInput;

    const apiKey = "AIzaSyDbXismsRb7vwnHvjcsEdLV0BQLmGNZRyI";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:streamGenerateContent?key=${apiKey}&alt=sse`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      });

      if (!response.ok) throw new Error(`API request failed with status ${response.status}`);

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let aiResponse = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n").filter((line) => line.trim());

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const jsonStr = line.replace("data: ", "").trim();
            if (jsonStr === "[DONE]") continue;
            try {
              const data = JSON.parse(jsonStr);
              const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
              if (text) {
                aiResponse += text;
                setChatMessages((prev) => {
                  const updated = [...prev];
                  if (updated[updated.length - 1].sender === "ai") {
                    updated[updated.length - 1].text = aiResponse;
                  } else {
                    updated.push({ sender: "ai", text: aiResponse });
                  }
                  return updated;
                });
                if (uploadedCV) setCvContent((prev) => prev + "\n" + text);
              }
            } catch (e) {
              console.error("Error parsing JSON from line:", line, e);
            }
          }
        }
      }
    } catch (error) {
      setChatMessages((prev) => [...prev, { sender: "system", text: `Error: ${error.message}` }]);
      console.error("Streaming error:", error);
    } finally {
      setIsLoading(false);
      setChatInput("");
    }
  };

  const handleGeneralCVAdvice = async () => {
    setIsLoading(true);
    setChatMessages((prev) => [...prev, { sender: "user", text: "How can I make my CV great?" }]);

    const prompt = `Provide general advice on how to make a CV great, tailored for the Pakistani job market. Include suggestions like quantifiable achievements, tailoring to the job, skills optimization, and formatting tips.`;

    const apiKey = "AIzaSyDbXismsRb7vwnHvjcsEdLV0BQLmGNZRyI";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:streamGenerateContent?key=${apiKey}&alt=sse`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      });

      if (!response.ok) throw new Error(`API request failed with status ${response.status}`);

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let aiResponse = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n").filter((line) => line.trim());

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const jsonStr = line.replace("data: ", "").trim();
            if (jsonStr === "[DONE]") continue;
            try {
              const data = JSON.parse(jsonStr);
              const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
              if (text) {
                aiResponse += text;
                setChatMessages((prev) => {
                  const updated = [...prev];
                  if (updated[updated.length - 1].sender === "ai") {
                    updated[updated.length - 1].text = aiResponse;
                  } else {
                    updated.push({ sender: "ai", text: aiResponse });
                  }
                  return updated;
                });
              }
            } catch (e) {
              console.error("Error parsing JSON from line:", line, e);
            }
          }
        }
      }
    } catch (error) {
      setChatMessages((prev) => [...prev, { sender: "system", text: `Error: ${error.message}` }]);
      console.error("Streaming error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`min-h-screen flex ${
        theme === "dark" ? "bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] text-white" : "bg-gradient-to-br from-gray-50 to-white text-black"
      }`}
    >
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -256 }}
        animate={{ x: 0 }}
        className={`fixed top-0 left-0 h-full w-64 p-6 shadow-lg ${
          theme === "dark" ? "bg-[#141414] border-r border-gray-800" : "bg-white border-r border-gray-200"
        }`}
      >
        <h2 className="text-2xl font-bold mb-4">CV Builder</h2>
        <p className="text-sm mb-4">
          Sign in to save your CV history. Without signing in, your progress won’t be preserved.
        </p>
        <button
          className={`w-full py-2 rounded-md text-sm font-semibold transition ${
            theme === "dark" ? "bg-blue-600 hover:bg-blue-700" : "bg-blue-500 hover:bg-blue-600"
          } text-white`}
          onClick={() => alert("Firebase Sign-In Coming Soon!")}
        >
          Sign In
        </button>
        <button
          className="mt-2 w-full py-2 text-sm underline"
          onClick={toggleTheme}
        >
          Switch to {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
      </motion.aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-extrabold text-center mb-8"
        >
          Build Your <span className="text-[#ff6c00]">Perfect CV</span>
        </motion.h1>

        {/* Template Gallery */}
        {!selectedTemplate && !uploadedCV && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">Select a Template</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {templates.map((template) => (
                <motion.div
                  key={template.id}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
                  className={`p-4 rounded-lg border cursor-pointer ${
                    theme === "dark" ? "bg-[#1a1a1a] border-gray-700" : "bg-white border-gray-200"
                  }`}
                  onClick={() => handleTemplateSelect(template)}
                >
                  <img src={template.img} alt={template.name} className="w-full h-48 object-cover rounded-md mb-4" />
                  <h3 className="text-lg font-semibold text-center">{template.name}</h3>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* CV Editor */}
        {selectedTemplate && !uploadedCV && (
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-12 bg-opacity-80 backdrop-blur-md p-6 rounded-lg shadow-xl"
          >
            <h2 className="text-2xl font-semibold mb-6 text-center">Edit Your CV</h2>
            <textarea
              value={cvContent}
              onChange={(e) => setCvContent(e.target.value)}
              className={`w-full h-96 p-4 rounded-md border shadow-inner resize-none focus:outline-none focus:ring-2 focus:ring-[#ff6c00] ${
                theme === "dark"
                  ? "bg-[#1a1a1a] text-gray-300 border-gray-700"
                  : "bg-white text-gray-700 border-gray-200"
              }`}
              placeholder="Start editing your CV..."
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={handleCVExport}
                className={`px-6 py-3 rounded-md text-lg font-semibold transition transform hover:scale-105 ${
                  theme === "dark"
                    ? "bg-[#ff6c00] text-white hover:bg-[#e65c00]"
                    : "bg-[#ff6c00] text-white hover:bg-[#e65c00]"
                }`}
              >
                Pay to Export (100 PKR)
              </button>
            </div>
          </motion.section>
        )}

        {/* Interactive PDF Chat */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col md:flex-row gap-6"
        >
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Upload Your CV</h2>
            <div
              className={`p-6 rounded-lg border-dashed border-2 text-center ${
                theme === "dark" ? "border-gray-700 bg-[#141414]" : "border-gray-200 bg-gray-100"
              }`}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                handleFileUpload({ target: { files: e.dataTransfer.files } });
              }}
            >
              <p className="mb-2">Drag & Drop or Click to Upload PDF</p>
              <input
                ref={fileInputRef}
                type="file"
                accept="application/pdf"
                onChange={handleFileUpload}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current.click()}
                className={`px-4 py-2 rounded-md ${
                  theme === "dark" ? "bg-gray-600 hover:bg-gray-500" : "bg-gray-300 hover:bg-gray-400"
                }`}
              >
                Upload
              </button>
            </div>
            {uploadedCV && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`mt-4 p-4 rounded-lg border overflow-auto max-h-96 ${
                  theme === "dark" ? "bg-[#1a1a1a] border-gray-700" : "bg-white border-gray-200"
                }`}
              >
                <h3 className="text-lg font-semibold mb-2">CV Preview</h3>
                <p className="whitespace-pre-wrap">{cvContent}</p>
              </motion.div>
            )}
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Chat with AI</h2>
            <div
              className={`p-4 rounded-lg min-h-[300px] max-h-[400px] overflow-y-auto border ${
                theme === "dark" ? "bg-[#1a1a1a] border-gray-700" : "bg-white border-gray-200"
              }`}
            >
              {chatMessages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-4 p-3 rounded-lg max-w-[80%] ${
                    msg.sender === "user"
                      ? "ml-auto bg-[#ff6c00] text-white"
                      : "mr-auto bg-gray-700 text-gray-200"
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
              {isLoading && !chatMessages.some((m) => m.sender === "ai") && (
                <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} animate-pulse`}>
                  Processing...
                </p>
              )}
            </div>
            <div className="mt-4 flex gap-2">
              <input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleChatSubmit()}
                placeholder="Ask me anything about your CV..."
                className={`flex-1 p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-[#ff6c00] ${
                  theme === "dark"
                    ? "bg-[#141414] text-gray-300 border-gray-700"
                    : "bg-white text-gray-700 border-gray-200"
                }`}
                disabled={isLoading}
              />
              <button
                onClick={handleChatSubmit}
                disabled={isLoading || !chatInput}
                className={`px-6 py-3 rounded-md font-semibold transition transform hover:scale-105 ${
                  theme === "dark"
                    ? "bg-[#ff6c00] text-white hover:bg-[#e65c00]"
                    : "bg-[#ff6c00] text-white hover:bg-[#e65c00]"
                } ${isLoading || !chatInput ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                Send
              </button>
            </div>
            <button
              onClick={handleGeneralCVAdvice}
              className={`mt-2 px-4 py-2 rounded-md text-sm font-semibold transition ${
                theme === "dark" ? "bg-gray-600 hover:bg-gray-500" : "bg-gray-300 hover:bg-gray-400"
              }`}
            >
              Get General CV Advice
            </button>
          </div>
        </motion.section>
      </main>
    </div>
  );
}