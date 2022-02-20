import Header from './components/header/Header';
import { useEffect } from "react";
import "./sass/style.scss"
import MoviesContainer from './components/movies/MoviesContainer';
import ExtendedHeader from './components/header/ExtendedHeader';

function App() {
  useEffect(() => {
    async function logMyAPI() {
      let response = await fetch('https://my-json-server.typicode.com/Daniela510/demo/list')
      response = await response.json()
      // console.log(response)
    }

    logMyAPI()
  }, []);

  return (
    <div className="App">
     <Header />
     <ExtendedHeader/>
     <MoviesContainer />
    </div>
  );
}

export default App;
