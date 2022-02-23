import Header from './components/header/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./sass/style.scss"
import { useSelector } from 'react-redux'
import MoviesContainer from './components/moviesContainer/MoviesContainer';
import Cart from './components/cart/Cart';
import About from './components/aboutRequests/About';
import Requests from './components/aboutRequests/Requests';

function App() {
 const theme = useSelector(state => state.themeState)
 const baseName = "App App--"
 const className = baseName.concat(theme.theme)
 
  return (
    <BrowserRouter>
    <div className={className}>
      <Routes>
      <Route path='/' exact element={
        <>
     <Header />
     <MoviesContainer />
     <About />
     <Requests />
     </>
    }/>
    <Route path='/cart' element={
     <>
     <Header />
    <Cart/>
    <About />
    <Requests />
    </>
    }/>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
