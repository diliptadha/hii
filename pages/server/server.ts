// server.ts

import bodyParser from "body-parser";
import express from "express";
import { spawn } from "child_process";

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post("/compile", (req, res) => {
  const { code, language } = req.body;

  let command, args;

  switch (language) {
    case "javascript":
      command = "node";
      args = ["-e", code];
      break;

    case "python":
      command = "python";
      args = ["-c", code];
      break;

    case "cpp":
      // Assuming gcc is installed
      command = "c++";
      args = ["-o", "output", "-x", "c++", "-"];
      break;

    default:
      return res.status(400).json({ error: "Unsupported language" });
  }

  const process = spawn(command, args);

  let result = "";
  let error = "";

  process.stdout.on("data", (data) => {
    result += data.toString();
  });

  process.stderr.on("data", (data) => {
    error += data.toString();
  });

  process.on("close", (code) => {
    if (code !== 0 || error) {
      return res.status(200).json({ output: error || result });
    }

    return res.status(200).json({ output: result });
  });

  process.stdin.write(code);
  process.stdin.end();
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
