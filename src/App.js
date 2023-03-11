import Keyboard from './components/Keyboard';

function App() {
  // onkeydown event
  window.onkeydown = function(e) {
    if(e.code === document.getElementById(e.code).innerHTML) {
      document.getElementById("box-" + e.code).classList.add('blue')
    }
  };
  // onkeyup event
  window.onkeyup = function(e) {
    if(e.code === document.getElementById(e.code).innerHTML) {
      document.getElementById("box-" + e.code).classList.remove("blue");
      document.getElementById("box-" + e.code).classList.add('green');
    }
  }
  return (
    <div className="App">
      <Keyboard />
    </div>
  );
}

export default App;