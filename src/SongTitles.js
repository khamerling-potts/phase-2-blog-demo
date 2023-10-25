//SongTitles.js
function SongTitles({ titles }) {
  return (
    <div className="titles">
      <h2>Song Titles</h2>
      {titles.map((title) => {
        return <p key={title}>{title}</p>;
      })}
    </div>
  );
}

export default SongTitles;
