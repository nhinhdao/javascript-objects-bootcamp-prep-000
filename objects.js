var playlist = {
   artistName,
   songTitle,
}

function updatePlaylist(playlist, artistName, songTitle){
   return Object.assign(playlist, {[key]: value})
}

function removeFromPlaylist(playlist, artistName){
   delete playlist.artistName;
   return playlist;
}
