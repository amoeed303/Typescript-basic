interface Album {  // Define an interface for album properties
  artist: string;
  title: string;
  tracks?: number; 
}

function makeAlbum(artist: string, title: string, tracks?: number): Album { //return data type as album
    const album: Album = {
        artist,
        title,
    };
    album.artist = artist;
    album.title = title;
  if (tracks !== undefined) {
    album.tracks = tracks;
  }
  return album;
}

const album1 = makeAlbum("Imran Khan", "Xyz");
const album2 = makeAlbum("shubh", "Still Rollin");
const album3 = makeAlbum("shubh", "Leo", 6);

// Print the album objects
console.log(album1);
console.log(album2);
console.log(album3);
