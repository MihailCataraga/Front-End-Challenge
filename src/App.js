import { useState } from 'react';
import Keyboard from './components/Keyboard';

function App() {
  var [arr, setArr] = useState('');
  var [i, setI] = useState(0)

  // onkeydown
  window.onkeydown = function(e) {
    if(e.code === document.getElementById(e.code).innerHTML) {
      document.getElementById("box-" + e.code).classList.add('blue')
      setArr(arr => [...arr, e.code])
    }
    setTimeout(() => {
      document.getElementById("box-" + e.code).classList.remove("blue");
      document.getElementById("box-" + e.code).classList.add('green');
    }, 3000)
    setTimeout(() => {
      document.getElementById("box-" + e.code).classList.remove("green");
    }, 60000)
  };

  // Repeat btn
  const repeat = () => {
    setI(i = 0);
    setInterval(() => {
      if(i < arr.length) {
          document.getElementById("box-" + arr[i]).classList.remove("blue");
          document.getElementById("box-" + arr[i]).classList.remove("green");
          document.getElementById("box-" + arr[i]).classList.add('blue');
          setI(i++)
      }
    }, 200);
    for(let i = 0; i < arr.length; i++) {
      document.getElementById("box-" + arr[i]).classList.remove("blue");
      document.getElementById("box-" + arr[i]).classList.remove("green");
    }
  }

  // Reset History btn
  const reset = () => {
    for(let i = 0; i < arr.length; i++) {
      document.getElementById("box-" + arr[i]).classList.remove("blue");
      document.getElementById("box-" + arr[i]).classList.remove("green");
    };
    setArr('');
  }
  return (
    <div className="App d-flex a-center">
      <textarea />
      <Keyboard />
      <div className='btns d-flex'>
        <button onClick={repeat}>Repeat</button>
        <button onClick={reset}>Reset History</button>        
      </div>
    </div>
  );
}

export default App;