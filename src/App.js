import Header from './components/header/Header';
import "./sass/style.scss"
import MoviesContainer from './components/movies/MoviesContainer';
import ExtendedHeader from './components/header/ExtendedHeader';

function App() {
 
  return (
    <div className="App">
     <Header />
     <ExtendedHeader/>
     <MoviesContainer />
    </div>
  );
}

export default App;
