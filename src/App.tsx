import type { Component } from 'solid-js';
import MatrixRain from './components/MatrixRain';
import ExpectChaos from './components/ExpectChaos';


const App: Component = () => {
  return (
    <>
      <main class="margin-0 w-full h-full overflow-hidden">
        <MatrixRain />
        <ExpectChaos />
      </main>
    </>
  );
};
export default App;
