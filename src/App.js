import "./App.css";
import OtraPrueba from "./component/OtraPrueba";
import Prueba from "./component/Prueba";
import { version } from "./autobuild_version";

function App() {
  console.log("khe", version);
  return (
    <div className="App">
      <Prueba />
      <OtraPrueba />
    </div>
  );
}

export default App;
