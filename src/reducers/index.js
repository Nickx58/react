import { combineReducers } from "redux";

const songsReducers = () => {
  return [
    { title: "TNT", durations: "2:05" },
    { title: "ACDC", durations: "3:05" },
    { title: "Owl City", durations: "4:05" },
    { title: "Eminem", durations: "5:05" },
  ];
};

// const selectedSongReducer = (action) => {
//   if ((action.type = "SONG_SELECTED")) {
//     return action.payload;
//   }
//   return null;
// };

export default combineReducers({
  songs: songsReducers,
  // selectedSong: selectedSongReducer,
});
