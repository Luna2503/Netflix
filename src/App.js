// import logo from './logo.svg';
import './App.css';
import Row from './Components/Row';
import Banner from './Components/Banner';
import Navigationbar from './Components/Navigationbar';
import { requests } from './request';

function App() {
  return (
    <div>
      <Navigationbar/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title='Netflixoriginals'  fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title='Trending'  fetchUrl={requests.fetchTrending}/>
      <Row title='Toprated'  fetchUrl={requests.fetchTopRated}/>
      <Row title='Action Movies'  fetchUrl={requests.fetchActionMovies}/>
      <Row title='Comedy Movies'  fetchUrl={requests.fetchComedyMovies}/>
      <Row title='Horror Movies'  fetchUrl={requests.fetchHorrorMovies}/>
      <Row title='Romance Movies'  fetchUrl={requests.fetchRomanceMovies}/>
      <Row title='Documentaries'  fetchUrl={requests.fetchDocumentaries}/>

      
      
    </div>
  );
}

export default App;
