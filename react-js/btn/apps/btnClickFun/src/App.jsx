import BtnPropMF from 'btnPropApp/BtnProp';
import useCount from './store';
import Button from './Button';

function App() {

  const [count, setCount] = useCount();

  return (
    <div>
      <h1>MF | Btn Click Function App...</h1>

      <div className='btnContainer'>
        <Button />

        <button
          className='btnStyle'
          onClick={() => setCount((count) => count + 1)}
        >
          share value is - {count}
        </button>

        <BtnPropMF btnName={'MF App Btn From BtnProp'} />

      </div>

    </div>
  )
}

export default App
