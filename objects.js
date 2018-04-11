var playlist = {
   artistName: "songTitle"
}

function updatePlaylist(playlist, artistName, songTitle){
   var newlist = Object.assign({}, playlist, {[artistName]: songTitle});
   return newlist;
}

function removeFromPlaylist(playlist, artistName){
   delete playlist.[artistName];
   return playlist;
}
