function gramophone(band, album, song) {
//     You have to find out how many times the plate will rotate the given song from the album.
// The plate makes a full rotation every 2.5 seconds.
// The song duration in seconds is calculate by the given formula: 
//  	(albumName.length * bandName.length) * song name.length / 2

    let time = (band.length * album.length * song.length) / 2;
    let rotate = Math.ceil(time / 2.5);
    console.log(`The plate was rotated ${rotate} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
// The plate was rotated 167 times.
