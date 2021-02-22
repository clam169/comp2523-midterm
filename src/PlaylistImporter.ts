import { IImporter } from "./IImporter";
import { Playlist } from "./Playlist";
import { Song } from "./Song";
import { CloudImporter } from "./CloudImporter";
import { LocalImporter } from "./LocalImporter";
import { User } from "./User";

export class PlaylistImporter implements IImporter {
  constructor(importer: IImporter) {

  }
  importPlaylist() {
    this.loadPlaylist()
    // call the method from cloudimport and local import and then 
    // push the playlist to user

  }
}



// i might have misread the question...... 