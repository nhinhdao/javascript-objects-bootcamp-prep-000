var playlist = {
   artistName: "songTitle"
}

function updatePlaylist(obj, key, value){ //key and value are string literal
   var newlist = Object.assign({}, obj, {[key]: string});
   return newlist;
}

function removeFromPlaylist(obj, key){
   delete obj[key];
   return obj;
}
