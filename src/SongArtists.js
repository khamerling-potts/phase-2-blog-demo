//SongArtists.js
function SongArtists({ artists }) {
  const artistList = artists.map((artist) => <p key={artist}>{artist}</p>);
  return (
    <div className="artists">
      <h2>Song Artists</h2>
      {artistList}
    </div>
  );
}

export default SongArtists;
