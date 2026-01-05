import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const wordCount = text.trim()
    ? text.trim().split(/\s+/).length
    : 0;

  const letterCount = text.replace(/\s/g, "").length;

  return (
    <div className="container">
      <h1>Word & Letter Counter</h1>

      <textarea
        placeholder="Enter text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p><strong>Words:</strong> {wordCount}</p>
      <p><strong>Letters:</strong> {letterCount}</p>
    </div>
  );
}

export default App;