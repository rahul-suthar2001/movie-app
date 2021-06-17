import React from 'react'
import Navbar from './components/navbar';
import AddMovie from './components/Addmovie';
import MovieList from './components/MovieList';
import About from './components/about';
import MovieDetails from './components/moviedetail';
import EditMovie from './components/Editmovie';
import NotFound from './components/NotFound';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
    return (
          <BrowserRouter>
            <Navbar/>
            <Switch>
         <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={MovieList} />
        <Route exact path="/add" component={AddMovie} />
        <Route exact path="/about" component={About} />
        <Route exact path="/movies/:id" component={MovieDetails} />
        <Route exact path='/movies/:id/edit' component={EditMovie}></Route>
        <Route component={NotFound} />
      </Switch>
       
        </BrowserRouter>
    )
}

export default App
