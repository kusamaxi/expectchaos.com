import type { Component } from 'solid-js';
import MatrixRain from './components/MatrixRain';
import Audio from './components/Audio';


const App: Component = () => {
  return (
    <>
      <main class="margin-0 w-full h-full overflow-hidden">
        <MatrixRain />
        <Audio />
      </main>
    </>
  );
};
export default App;
