import React, {Component} from 'react';
import NameFilter from './NameFilter';
import RatingFilter from './RatingFilter';
import MovieList from './MovieList';

const NeverBackDown = {
  id: 'NeverBackDown',
  title: 'Never back down',
  rating: 3,
  year: '2008',
  image: 'https://www.dvdplanetstore.pk/wp-content/uploads/2016/07/never-back-down-2008dvdplanetstorepk.jpg',
};
const inception = {
  id: 'inception',
  rating: 5,
  image: 'https://images-na.ssl-images-amazon.com/images/I/51NbVEuw1HL._SX355_.jpg',
  title: 'Inception',
  year: '2010',
};
const Shawshank = {
  id: 'shawshank',
  title: 'Shawshank redemption',
  year: '1994',
  rating: 5,
  image: 'https://images-na.ssl-images-amazon.com/images/I/519NBNHX5BL._SY445_.jpg',
};

const moviesToDisplay = [NeverBackDown, inception, Shawshank];



class MovieApp extends Component {
  constructor(props){
    super(props)
    this.state ={
      minRating:1,
      movies:moviesToDisplay,
      titleFilter:''
    }
    setTimeout(
      () => {
        this.addNewMovie({
          id: 'newmovie',
          title: 'The New Movie',
          rating: 4,
          year: 2018
        })
      },
      5000)
  }

  addNewMovie (newMovie) {
    this.setState({
      movies: this.state.movies.concat(newMovie)
    })
  }

  getVisibleMovies() {
    return this.state.movies.filter(
      el =>
        el.rating >= this.state.minRating &&
        el.title.toLowerCase().includes(
          this.state.titleFilter.toLowerCase().trim()
        )
      )
  }

  
  render = () => (
    <div className="movie-app">
      <header className="movie-app-header">
        <NameFilter 
        value={this.state.titleFilter}
        onChange={(newTitle)=>
        this.setState({
          titleFilter:newTitle
        })
        }
        />
        <RatingFilter 
        count={this.state.minRating}
        onchange={(newRating) =>
          this.setState({
            minRating:newRating
          })
        }/>
      </header>
      <main className="movie-app-main" />
      <MovieList  movies={
                this.getVisibleMovies()
              }
        onAddMovie={(newMovie) => this.addNewMovie(newMovie)}/>
    </div>
  );
}

export default MovieApp;
