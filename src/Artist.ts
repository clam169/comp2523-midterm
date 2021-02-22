import { Song } from "./Song";
import { Album } from "./Album";

export class Artist {
  name: string;
  albums: Album[];
  songs: Song[];
  constructor(name: string) {
    this.name = name;
    this.albums = [];
    this.songs = [];
  }

  addAlbum (album: Album) {
    this.albums.push(album);
  }

  addSong (song: Song) {
    this.songs.push(song);
  }
}