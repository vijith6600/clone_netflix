import './App.css';
import Row from './Row';
import request from './request';

function App() {
  return (
    <div className="App">
      <Row title="Netflix Orginals" fetchurl={request.fetchNetflixOriginals} />
    </div>
  );
}

export default App;
