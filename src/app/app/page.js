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
"use client";
import { useState } from "react";

export default function CVBuilder() {
  const [theme, setTheme] = useState("dark");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleCVAction = async (action) => {
    setIsLoading(true);
    setOutput("");

    const prompt =
      action === "create"
        ? "Generate a professional CV tailored for the Pakistani job market. Include sections for personal info, education, experience, and skills."
        : `Upgrade this existing CV for the Pakistani job market: ${input}. Enhance it with better wording, structure, and relevant keywords.`;

    const apiKey = "AIzaSyDbXismsRb7vwnHvjcsEdLV0BQLmGNZRyI";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:streamGenerateContent?key=${apiKey}&alt=sse`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          console.log("Stream complete");
          break;
        }

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n").filter((line) => line.trim());

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const jsonStr = line.replace("data: ", "").trim();
            if (jsonStr === "[DONE]") {
              console.log("Received [DONE] signal");
              continue;
            }
            try {
              const data = JSON.parse(jsonStr);
              const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
              if (text) {
                setOutput((prev) => prev + text);
              }
            } catch (e) {
              console.error("Error parsing JSON from line:", line, e);
            }
          }
        }
      }
    } catch (error) {
      setOutput(`Error: ${error.message}. Check your Gemini API key or network connection.`);
      console.error("Streaming error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`relative min-h-screen flex flex-col items-center justify-center p-6 ${
        theme === "dark" ? "bg-[#0d0d0d] text-white" : "bg-white text-black"
      }`}
    >
      <button
        onClick={toggleTheme}
        className={`absolute top-4 right-4 p-2 rounded-full ${
          theme === "dark" ? "bg-gray-700" : "bg-gray-300"
        }`}
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>

      <div
        className={`absolute inset-0 pointer-events-none ${
          theme === "dark"
            ? "bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_20%,rgba(0,0,0,0.9)_100%)]"
            : "bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_20%,rgba(0,0,0,0.3)_100%)]"
        }`}
      ></div>

      <div className="max-w-3xl w-full relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8">
          CV Builder <span className="text-[#ff6c00]">for Pakistan</span>
        </h1>
        <p
          className={`text-lg text-center mb-12 ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Create a new CV or upgrade your existing one for just 100 PKR using AI-powered tools.
        </p>

        <div
          className={`p-6 rounded-lg ${
            theme === "dark" ? "bg-[#141414] border-gray-800" : "bg-gray-100 border-gray-200"
          } border`}
        >
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button
              onClick={() => handleCVAction("create")}
              disabled={isLoading}
              className={`flex-1 px-6 py-3 rounded-md text-lg font-semibold transition transform hover:scale-105 ${
                theme === "dark"
                  ? "bg-[#ff6c00] text-white hover:bg-[#e65c00]"
                  : "bg-[#ff6c00] text-white hover:bg-[#e65c00]"
              } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              Create New CV
            </button>
            <button
              onClick={() => handleCVAction("upgrade")}
              disabled={isLoading || !input}
              className={`flex-1 px-6 py-3 rounded-md text-lg font-semibold transition transform hover:scale-105 ${
                theme === "dark"
                  ? "border-gray-600 hover:border-[#ff6c00] hover:text-[#ff6c00]"
                  : "border-gray-300 hover:border-[#ff6c00] hover:text-[#ff6c00]"
              } border ${isLoading || !input ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              Upgrade Existing CV
            </button>
          </div>

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your existing CV here to upgrade..."
            className={`w-full h-32 p-4 rounded-md border resize-none focus:outline-none focus:ring-2 focus:ring-[#ff6c00] ${
              theme === "dark"
                ? "bg-[#1a1a1a] text-gray-300 border-gray-700"
                : "bg-white text-gray-700 border-gray-300"
            }`}
            disabled={isLoading}
          />
        </div>

        <div
          className={`mt-6 p-6 rounded-lg min-h-[200px] ${
            theme === "dark" ? "bg-[#141414] border-gray-800" : "bg-gray-100 border-gray-200"
          } border`}
        >
          <h2
            className={`text-xl font-semibold mb-4 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Your CV Output
          </h2>
          {isLoading && !output ? (
            <p
              className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"} animate-pulse`}
            >
              Generating...
            </p>
          ) : output ? (
            <p className={`${theme === "dark" ? "text-gray-300" : "text-gray-700"} whitespace-pre-wrap`}>
              {output}
            </p>
          ) : (
            <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
              Click a button above to generate or upgrade your CV.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}