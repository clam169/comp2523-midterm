import { Album } from "./Album";
import { Playlist } from "./Playlist";

export class User {
  private _username: string;
  private _password: string;
  private _playlist: Playlist[];
  private _album: Album[];

  constructor (username: string, password: string) {
    this.setUsername(username);
    this.setPassword(password);
    this._playlist = [];
    this._album = [];
  }
  setUsername(username: string) {
    this._username = username;
  }
  setPassword(password: string) {
    this._password = password;
  }
  addPlaylist(playlist: Playlist) {
    this._playlist.push(playlist);
  }
  addAlbum(album: Album) {
    this._album.push(album);
  }
  // loop thru list of album and user the get list method from class Album
  // to get list of songs
  getSongs(): Song[] {
    let albumList = this.getAlbums()
    for (album in albumList) {
      return album.list
    }
  }
  getAlbums(): Album[] {
    return this._album
  }
  getPlaylist(): Playlist[] {
    return this._playlist
  }
}