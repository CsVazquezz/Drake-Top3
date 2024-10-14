let currentAlbum = 0;

const albums = [
  {
    cover: "images/Views.png",
    title: "Views",
    description: `Views is Drake’s fourth studio album.

        Drake announced on August 6, 2014 that the title of his next album would be Views From The 6.
        Drake would shorten it to VIEWS closer to the album release to make it less Toronto-centric, because The 6 is a nickname for Toronto, coming from the city’s two major area codes.`,
  },
  {
    cover: "images/TakeCare.png",
    title: "Take Care",
    description: `Take Care is the sophomore studio album by Toronto, Canada hip hop artist Drake, released on November 15, 2011 through Cash Money Records.

        “Buried Alive” and “Good Ones Go” are hidden interludes that appear at the end of “Marvins Room” and “Cameras,” respectively, while “The Motto” and “Hate Sleeping Alone” are deluxe bonus tracks (there is no deluxe album cover).`,
  },
  {
    cover: "images/IYRTITL.png",
    title: "If youre reading this is too late",
    description: `If You’re Reading This It’s Too Late is Drake’s fourth mixtape. It was released unexpectedly on February 13, 2015, the six-year anniversary of Drake’s breakout third mixtape, So Far Gone.

        Although it’s not the first, IYRTITL is one of the most prominent ‘commercial mixtapes.’ 
        It was contractually considered Drake’s fourth studio album so that he could renegotiate his contract with Birdman’s Cash Money Records.`,
  },
];

function changeAlbum() {
  currentAlbum = (currentAlbum + 1) % albums.length;
  document.getElementById("albumCover").src = albums[currentAlbum].cover;
  document.getElementById("albumTitle").innerText = albums[currentAlbum].title;
  document.getElementById("albumDescription").innerText =
    albums[currentAlbum].description;
}
