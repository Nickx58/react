import React from "react";
import { connect } from "react-redux";

function SongDetail({ song }) {
  if (!song) {
    return <h2>Please select a song</h2>;
  }
  return (
    <div>
      <h3>Details for song:</h3>
      <p>
        Title: {song.title}
        <br />
        Durations: {song.durations}
      </p>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    song: state.selectedSong,
  };
};

export default connect(mapStateToProps)(SongDetail);
