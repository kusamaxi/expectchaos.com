import { createSignal } from 'solid-js';

function ExpectChaos() {
  const [imageLoaded, setImageLoaded] = createSignal(false);

  return (
    <div class="flex justify-center items-center h-screen">
      <a href="https://kusamaxi.com" class="relative">
        <img
          src="./expectchaos.svg"
          alt="Expect Chaos"
          class={`block ${imageLoaded() ? '' : 'hidden'}`}
          onLoad={() => setImageLoaded(true)}
        />
      </a>
      {!imageLoaded() && <div class="absolute z-20">Loading image...</div>}
    </div>
  );
}

export default ExpectChaos;
