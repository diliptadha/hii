// pages/index.tsx

import { useState } from "react";

export default function Home() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const compileCode = async () => {
    const response = await fetch("http://localhost:3001/compile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code, language, input }),
    });

    const data = await response.json();
    setOutput(data.output);
  };

  return (
    <div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
      ></textarea>
      <div>
        <label>Language:</label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="cpp">C++</option>
        </select>
      </div>
      <div>
        <label>Input:</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <button onClick={compileCode}>Run Code</button>
      <div>
        <strong>Output:</strong>
        <pre>{output}</pre>
      </div>
    </div>
  );
}
