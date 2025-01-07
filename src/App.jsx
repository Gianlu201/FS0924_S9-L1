import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import BtnFunctionalComponent from './components/ButtonComponent';
import ImgComponent from './components/ImageComponent';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>

      <div>
        <h2>Functional component</h2>
        <BtnFunctionalComponent btnText='Premi!' />
      </div>

      <div>
        <h2>Class component, image from Internet</h2>
        <ImgComponent
          src='https://cdn.pixabay.com/photo/2024/12/28/01/27/ai-generated-9295105_1280.jpg'
          alt='Immagine di Pixabay'
        />
      </div>

      <div>
        <h2>Class component, image from file</h2>
        <ImgComponent src='/img1.jpg' alt='Immagine da file' />
      </div>
    </>
  );
}

export default App;
