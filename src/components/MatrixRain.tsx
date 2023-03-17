import { createSignal, onCleanup, onMount } from 'solid-js';

const MatrixRain = () => {
  let canvas: HTMLCanvasElement;
  const chars = 'ﾊﾐﾋｰｳｼﾅﾓﾆｻﾜﾂｵﾘｱﾎﾃﾏｹﾒｴｶｷﾑﾕﾗｾﾈｽﾀﾇﾍKSM'.split('');
  const fontSize = 20;
  const color = '#ce206e';
  const interval = 40;
  const [width, setWidth] = createSignal(window.innerWidth);
  const [height, setHeight] = createSignal(window.innerHeight);
  const cols = () => Math.round(width() / fontSize);
  const drops = Array(cols()).fill(0);

  const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  onMount(async () => {
    const ctx = canvas.getContext('2d');

    const resize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
      canvas.width = width();
      canvas.height = height();
    };

    window.addEventListener('resize', resize);

    onCleanup(() => {
      window.removeEventListener('resize', resize);
    });

    while (true) {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = color;
      ctx.font = `${fontSize}px arial`;

      for (let i = 0; i < drops.length; i++) {
        const randomChar = Math.floor(Math.random() * chars.length);
        const text = chars[randomChar];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        const reachedEndOfScreen = drops[i] * fontSize > canvas.height && Math.random() > 0.975;
        if (reachedEndOfScreen) drops[i] = 0;
        drops[i]++;
      }
      await sleep(interval);
    }
  });

  return (
    <>
      <canvas
        class="bg-black fixed z--1 inset-0"
        ref={canvas}
        width={width()}
        height={height()}
      >
        Your browser does not support the canvas element.
      </canvas>
    </>
  );
};

export default MatrixRain;
