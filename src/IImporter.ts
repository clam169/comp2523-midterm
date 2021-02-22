import { Playlist } from "./Playlist";

export interface IImporter {
  loadPlaylist(location: string):Playlist;
}