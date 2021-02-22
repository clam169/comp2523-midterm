import { IImporter } from "./IImporter";
import { Playlist } from "./Playlist";
import { Song } from "./Song";

export class PlaylistImporter implements IImporter {
  loadPlaylist(location: string): Playlist {
    console.log(`Importing playlist from ${location}`)
    // read URL and get songs. if it is not array, push it to array so 
    // we can loop thru each song and call the add song method from playlist 
    // to add song to playlist
    let i;
    let playlist = new Playlist("My playlist");
    for (i=0; i<data.length; i++) {
      let song = new Song(data[i])
      playlist.addSong(song);
    } 
    return playlist;
  }
}
