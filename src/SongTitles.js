//SongTitles.js
function SongTitles({ titles, onDeleteSong }) {
  //Added onDeleteSong prop
  const songList = titles.map((title) => (
    <p key={title}>
      {/* Adding click event listener below, passing in title we want to delete */}
      <button onClick={(e) => onDeleteSong(title)}>X</button> {title}
    </p>
  ));
  return (
    <div className="titles">
      <h2>Song Titles</h2>
      {songList}
    </div>
  );
}

export default SongTitles;
