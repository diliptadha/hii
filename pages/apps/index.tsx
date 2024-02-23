// pages/index.tsx

import { Strings } from "@/constants";
import { useState } from "react";

export default function Home() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const compileCode = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}compile`, {
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
        <label>{Strings.Language}</label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="javascript">{Strings.JavaScript}</option>
          <option value="python">{Strings.Python}</option>
          <option value="cpp">{Strings.C_PLUS}</option>
        </select>
      </div>
      <div>
        <label>{Strings.Input}</label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <button onClick={compileCode}>{Strings.Run_Code}</button>
      <div>
        <strong>{Strings.Output}</strong>
        <pre>{output}</pre>
      </div>
    </div>
  );
}
