import { Song } from "./Song";
import { Artist } from "./Artist";

export class Album {
  title: string;
  artist: Artist;
  year: number;
  tracks: Song[];

  constructor (title: string, artist: Artist, year: number) {
    this.title = title;
    this.artist = artist;
    this.year = year;
    this.tracks = [];
  }

  get list(): Song[] {
    return this.tracks;
  }
  addTrack(track: Song) {
    this.tracks.push(track);
  }
}