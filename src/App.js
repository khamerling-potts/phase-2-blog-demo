import logo from "./logo.svg";
import "./App.css";

//App.js
import { useState } from "react";
import SongTitles from "./SongTitles";
import SongArtists from "./SongArtists";

function App() {
  const [songs, setSongs] = useState([
    { "Blank Space": "Taylor Swift" },
    { "Tiffany Blews": "Fall Out Boy" },
    { "Knee Socks": "Arctic Monkeys" },
  ]);

  const titles = songs.map((song) => Object.keys(song)[0]);
  const artists = songs.map((song) => Object.values(song)[0]);

  function handleDeleteSong(title) {
    const updatedSongs = songs.filter((song) => !(title in song));
    setSongs(updatedSongs); //Updating songs state using our new songs array
  }

  return (
    <div className="App">
      <h1>React State Demo</h1>
      <SongTitles titles={titles} onDeleteSong={handleDeleteSong} />
      <SongArtists artists={artists} />
    </div>
  );
}

export default App;
