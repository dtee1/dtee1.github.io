var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
var import_dotenv = __toESM(require("dotenv"), 1);
import_dotenv.default.config();
var app = (0, import_express.default)();
var PORT = 3e3;
var ai = new import_genai.GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build"
    }
  }
});
app.use(import_express.default.json());
var RESUME_CONTEXT = `
NAME: David Talson
LOCATION: Ottawa, ON, Canada
EMAIL: dtals091@uottawa.ca
PHONE: +1-(289)-237-0824
LINKS:
- LinkedIn: https://www.linkedin.com/in/david-talson
- Master's Project details: https://dtalson.github.io/
- Awards and recognitions page

TARGET ROLES: Senior Software Engineer, Embedded Software Engineer, Systems Engineer, Software Engineering Manager, AI/Computer Vision Engineer.

SUMMARY of POSITIONING:
David is a multi-faceted engineer bridging the gap between embedded systems, high-performance low-level systems (C/C++), computer vision, and applied artificial intelligence. He possesses a Master's of Engineering with a Concentration in Applied AI and has a proven track record of cross-functional team collaboration, hardware-software integration, and customer-facing API/SDK design. He is highly qualified for senior technical roles and leadership/management tracks due to his demonstrated technical excellence and outstanding team execution (evidenced by winning the "Rock-it Award" 4 times at Pleora Technologies).

CORE SKILLS:
- Languages: C, C++, Python, Java, JavaScript, .NET, SWIG, Shell Scripting (Bash/PowerShell), SQL, MATLAB.
- Systems: Linux, Real-Time Systems, Embedded Systems, Multi-threading, I2C, Hardware-Software Co-design, Docker.
- AI & Vision: PyTorch, TensorFlow, Computer Vision, Digital Video and Imaging Standards, OpenCV, Neural Networks.
- Tools & Engineering: Qt (GUI), Git, Jenkins (CI/CD), REST APIs, Test Automation, Hardware Validation (MIL qualification tests).

PROFESSIONAL EXPERIENCE:
1. Pleora Technologies (April 2022 - Present) | Role: Software Developer
   - Developed a Record and Capture feature for Pleora's eBUS player tool, enabling users to save live-streamed media in multiple formats, which improved image handling efficiency by 30%.
   - Designed and implemented new APIs for the eBUS SDK, extending functionality and improving integration for GigE Vision and USB3 Vision compliant devices.
   - Developed Event Monitoring and Console for Pleora's eBUS player tool, delivering real-time logs that enhanced debugging speed and user visibility into system events.
2. Pleora Technologies (April 2021 - April 2022) | Role: Intermediate Product Verification Engineer
   - Collaborated with the Hardware team to run MIL (Military) qualification tests at external labs, promptly resolving software issues and logging results - helping ensure tests were completed ahead of schedule.
3. Smart Connected Vehicles Innovation Centre (May 2023 - August 2023) | Role: Graduate Intern
   - Designed and implemented an autonomous target drone system capable of scanning, detecting, estimating real-world positions, and landing on identified targets using computer vision and control algorithms.
4. Pleora Technologies (March 2020 - April 2021) | Role: Junior Product Verification Engineer
   - Focused on Product Verification, Test Automation, and ensuring high-quality releases.
5. Sanmina (April 2019 - December 2019) | Role: Hardware Co-op, Test Engineering
   - Assisted in testing and validation of complex electronics boards, executing test scripts and diagnosing hardware/software failures.
6. Pleora Technologies (January 2019 - April 2019) | Role: Embedded Software Designer Co-op
   - Assisted in developing firmware and device driver APIs for high-performance video transmitters.
7. Measurements International (May 2018 - August 2018) | Role: Electrical Engineer Co-op
   - Calibrated precision electrical measurement instruments and supported automated calibration software.

EDUCATION:
- Master of Engineering (M.Eng.), Concentration in Applied Artificial Intelligence
  University of Ottawa | Jan 2022 - June 2024
- Bachelor of Engineering (B.Eng.), Electrical Engineering
  Carleton University | Sep 2015 - June 2020

ACHIEVEMENTS & AWARDS:
- Pleora Technologies Rock-it Award (4x Winner): Recipient in Sep 2023, Mar 2022, Feb 2022, Sep 2021. Recognized for outstanding contributions to team success, cross-functional collaboration, and high-impact project execution.
`;
var SYSTEM_INSTRUCTION = `
You are the AI Twin / Interactive Career Assistant of David Talson.
Your primary audience consists of hiring managers, recruiters, engineering directors, and team leads who are viewing David's portfolio.
Your goal is to answer questions about David's work experience, engineering skills, leadership capabilities, and suitability for Senior Software Engineer or Engineering Manager roles.

GUIDELINES FOR YOUR PERSONALITY AND RESPONSE:
1. Speak in David's persona (use "I", "my") OR as "David's AI Career Twin" (use "David", "he", "his"). You can choose a friendly, professional first-person representation (e.g., "Hi, I am David's AI twin..."). First-person "I" is preferred for an immersive experience, but represent yourself clearly as his AI Twin.
2. Highlight David's unique strength: a strong foundation in low-level embedded & C++ systems engineering, combined with advanced applied AI/Computer Vision (Master's in Applied AI). He bridges the gap between hardware/low-level systems and modern machine learning.
3. If asked about leadership or management, emphasize his 4x "Rock-it" awards at Pleora Technologies (which represent recognition from peers and management for driving project execution and helping the team succeed), his intermediate/senior-level experience leading APIs in eBUS SDK, and his ability to collaborate across hardware, verification, and software teams.
4. Be concise, highly professional, direct, and collaborative. Offer specific examples from his resume (e.g., how he improved image handling efficiency by 30%, designed SDK APIs, built autonomous target drone systems).
5. If someone asks a question outside his professional profile (e.g., "write a Python script for a chess game"), politely guide them back to David's profile: "While I can help with general coding queries, my primary purpose is to share insights about David's professional experience and skills. Regarding his software engineering credentials..."
6. Never make up or hallucinate experience, education, or contact details. If unsure, invite them to contact David directly via the links or email provided on the dashboard (dtals091@uottawa.ca).
`;
app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid message format" });
    }
    const formattedHistory = messages.map((m) => {
      return `${m.role === "user" ? "User" : "David's AI Twin"}: ${m.content}`;
    }).join("\n");
    const prompt = `
Resume and Profile Context:
${RESUME_CONTEXT}

Conversation history:
${formattedHistory}

Latest user prompt: "${messages[messages.length - 1]?.content}"

Please generate a professional, contextual response acting as David Talson's AI Twin.
`;
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7
      }
    });
    res.json({ text: response.text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: error.message || "Failed to communicate with AI model" });
  }
});
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in DEVELOPMENT mode with Vite middleware...");
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in PRODUCTION mode...");
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
