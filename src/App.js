import "./App.css";
import Row from "./Row.js";
import requests from "./Request.js";
import Banner from "./Banner.js";
import Nav from "./Nav.js";
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NetflixOriginals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="TrendingNow" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;