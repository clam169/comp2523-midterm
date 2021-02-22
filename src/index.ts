import { Artist } from "./Artist";
import { User } from "./User";
import { Song } from "./Song";
import { Album } from "./Album";
import { Playlist } from "./Playlist";
import { LocalImporter } from "./LocalImporter";
import { CloudImporter } from "./CloudImporter";
import { PlaylistImporter } from "./CloudImporter";

let artist = new Artist("Muse");
let album = new Album("The 2nd Low", "artist", 2012);
let song = new Song("Madness");
album.addTrack(song);
album.addTrack(new Song("Don't Panic"))
album.addTrack(new Song("Shiver"))
album.addTrack(new Song("Spies"))
album.addTrack(new Song("Sparks"))
album.addTrack(new Song("Yellow"))
album.addTrack(new Song("Trouble"))
album.addTrack(new Song("Parachutes"))
album.addTrack(new Song("High Speed"))
album.addTrack(new Song("We never change"))
album.addTrack(new Song("Everything's Not Lost"))
let playlist = new Playlist("Fun songs");
playlist.addAlbum(album);

