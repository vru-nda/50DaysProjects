const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach((sound) => {
  //create button with the name of sound
  var btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerText = sound;

  btn.addEventListener('click', () => {
    // onclick stop all the playing songs
    stopSongs();
    // start playing that is clicked
    document.getElementById(sound).play();
  });
  document.getElementById('buttons').appendChild(btn);
});

//stop songs with pause method
function stopSongs() {
  sounds.forEach((sound) => {
    var song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
