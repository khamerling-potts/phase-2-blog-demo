//SongArtists.js
function SongArtists({ artists }) {
  return (
    <div className="artists">
      <h2>Song Artists</h2>
      {artists.map((artist) => {
        return <p key={artist}>{artist}</p>;
      })}
    </div>
  );
}

export default SongArtists;
