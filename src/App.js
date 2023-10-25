import logo from "./logo.svg";
import "./App.css";

//App.js
import SongTitles from "./SongTitles";
import SongArtists from "./SongArtists";

function App() {
  const songs = {
    "Taylor Swift": "Blank Space",
    "Fall Out Boy": "Phoenix",
    "Arctic Monkeys": "505",
  };
  return (
    <div className="App">
      <h1>React State Demo</h1>
      <SongTitles titles={Object.keys(songs)} />
      <SongArtists artists={Object.values(songs)} />
    </div>
  );
}

export default App;
