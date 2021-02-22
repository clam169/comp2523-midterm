import { Album } from "./Album";
import { Song } from "./Song";

export class Playlist {
  name: string;
  listOfSongs: Song[];

  constructor(name: string) {
    this.name = name;
    this.listOfSongs = [];
  }
  addAlbum (album: Album) {
    this.listOfSongs = album.list;
  }
  addSong (song: Song) {
    this.listOfSongs.push(song);
  }
}