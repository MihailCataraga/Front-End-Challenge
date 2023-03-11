import Keyboard from './components/Keyboard';

function App() {
  // onkeydown
  window.onkeydown = function(e) {
    if(e.code === document.getElementById(e.code).innerHTML) {
      document.getElementById("box-" + e.code).classList.add('blue')
    }
    setTimeout(() => {
      document.getElementById("box-" + e.code).classList.remove("blue");
      document.getElementById("box-" + e.code).classList.add('green');
    }, 3000)
    setTimeout(() => {
      document.getElementById("box-" + e.code).classList.remove("green");
    }, 60000)
  };
  return (
    <div className="App d-flex a-center">
      <Keyboard />
    </div>
  );
}

export default App;