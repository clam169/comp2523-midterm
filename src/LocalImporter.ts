import { IImporter } from "./IImporter";
import { Playlist } from "./Playlist";
import { readFile } from "fs";
import { Song } from "./Song";

export class LocalImporter implements IImporter {
  loadPlaylist(location: string): Playlist {
    console.log(`Your playlist at location ${location} will be loaded`)
    readFile(location, "utf8", (err, data) => {
      if (err) {
        throw new Error ("Error reading from path")
      }
      let i;
      let playlist = new Playlist("My playlist")
      for (i=0; i<data.length; i++) {
        let song = new Song(data[i])
        playlist.addSong(song);
      } 
      return playlist
    })
  }
}