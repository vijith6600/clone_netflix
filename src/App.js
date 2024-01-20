import './App.css';
import Row from './Row';
import request from './request';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title="Netflix Orginals" fetchurl={request.fetchNetflixOriginals} isLargeRow={true} />
      <Row title="Trending Now" fetchurl={request.fetchTrending} />
      <Row title="ActionMovies" fetchurl={request.fetchActionMovies} />
      <Row title="ComedyMovies" fetchurl={request.fetchComedyMovies} />
      <Row title="HorrorMovies" fetchurl={request.fetchHorrorMovies} />
      <Row title="RomanceMovies" fetchurl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchurl={request.fetchDocumentaries} />

    </div>
  );
}

export default App;
