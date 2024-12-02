import { ChessList } from './ChessList';
import { ChessSingle } from './ChessSingle';
import { ChessCreate } from './ChessCreate';
import { BrowserRouter as Router, NavLink, Routes, Route } from
'react-router-dom'
import './App.css';

export const App = () => {
  return (
    <Router>
      <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink className='nav-link' to="/">Chess</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to="/create-chess">Új sakkozó</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className='nav-link' to="/">Almenü 2</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    <Routes>
      <Route path='/chess/:chessId' element = { <ChessSingle/>}/>
      <Route path = "/" element = { <ChessList />}/>
      <Route path = "/create-chess" element = { <ChessCreate />}/>
    </Routes>
    </Router>
  );
}