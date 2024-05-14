// import React from 'react';
// const ButtonMF = React.lazy(() => import('btnClickFunApp/Button'));
// const useStore = React.lazy(() => import('btnClickFunApp/store'));

import ButtonMF from 'btnClickFunApp/Button';
import useStore from 'btnClickFunApp/store';
import BtnPropMF from 'btnPropApp/BtnProp';

function App() {

  const [count, setCount] = useStore();

  return (
    <div>
      <h1>Container</h1>

      <div style={{ marginBottom: 10 }}>
        <ButtonMF />

        <button
          className='btnStyle' style={{ marginTop: 10 }}
          onClick={() => setCount((count) => count + 1)}
        >
          remote share value - {count}
        </button>
      </div>

      <div style={{ display: 'flex', gap: 10 }}>
        <BtnPropMF btnName={'Container App Btn'} />

        <BtnPropMF btnName={'Iron-Man'} />

        <BtnPropMF btnName={'Avengers'} />
      </div>

    </div>
  )
}

export default App
