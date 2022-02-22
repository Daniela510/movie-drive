import Header from './components/header/Header';
import "./sass/style.scss"
import { useSelector } from 'react-redux'
import MoviesContainer from './components/moviesContainer/MoviesContainer';

function App() {
 const theme = useSelector(state => state.themeState)
 const baseName = "App App--"
 const className = baseName.concat(theme.theme)
 
  return (
    <div className={className}>
     <Header />
     <MoviesContainer />
    </div>
  );
}

export default App;
