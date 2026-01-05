// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [text, setText] = useState("");

//   const wordCount = text.trim()
//     ? text.trim().split(/\s+/).length
//     : 0;

//   const letterCount = text.replace(/\s/g, "").length;

//   return (
//     <div className="container">
//       <h1>Word & Letter Counter</h1>

//       <textarea
//         placeholder="Enter text here..."
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />

//       <p><strong>Words:</strong> {wordCount}</p>
//       <p><strong>Letters:</strong> {letterCount}</p>
//     </div>
//   );
// }

// export default App;



import './App.css';
import Axios from "axios";
import { useState } from 'react';

function App() {
    const [artist, setArtist] = useState("");
    const [song, setSong] = useState("");
    const [lyrics, setLyrics] = useState("");

    function searchLyrics() {
        if (artist === "" || song === "") {
            return;
        }
        Axios.get(
`https://api.lyrics.ovh/v1/${artist}/${song}`).then(res => {
            console.log(res.data.lyrics);
            setLyrics(res.data.lyrics);
        })
    }

    return (
        <div className="App">
            <h1>Lyrics Finder ????</h1>

            <input className="inp" type="text" 
                placeholder='Artist name'
                onChange={(e) => { setArtist(e.target.value) }} />
            <input className="inp" type="text" 
                placeholder='Song name'
                onChange={(e) => { setSong(e.target.value) }} />
            <button className="btn" 
                onClick={() => searchLyrics()}>
                    ???? Search</button>
            <hr />
            <pre>{lyrics}</pre>
        </div>
    );
}

export default App;
    