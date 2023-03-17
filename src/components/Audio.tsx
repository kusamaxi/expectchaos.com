import { onMount } from 'solid-js';

function AudioPlayer() {
  return (
    <audio controls>
      <source src="../chaos.mp3" type="audio/mpeg" />
      Your browser does not support the audio tag.
    </audio>
  );
}

export default AudioPlayer;
