import './App.css';
import Mensaje from './Mensaje.js';


function App() {
  return (
    <div className="App">
      <Mensaje color='red' message='Estamos trabajando '/>
      <Mensaje color='green' message='en un componente '/>
      <Mensaje color='blue' message='de react js'/>
      <br />
      {+new Date()}
      {/* al poner el + antes del new Date lo convierte en un timestamp */}
    </div>
  );
}

export default App;
