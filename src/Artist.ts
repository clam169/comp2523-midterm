export class Artist {
  name: string;
  albums: Album;
  songs: Songs;
  constructor(name: string) {
    this.name = name
  }

  addAlbum (album: string) {
    this.albums.push(album);
  }

  addSong (song: string) {
    this.songs.push(song);
  }
}