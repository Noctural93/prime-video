import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const renderActionContent = moviesList.filter(
    eachItem => eachItem.categoryId === 'ACTION',
  )

  const renderComedyContent = moviesList.filter(
    eachItem => eachItem.categoryId === 'COMEDY',
  )

  return (
    <div className="primeVideo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="primeVideo-img"
      />
      <div className="movies-container">
        <h1 className="movies-heading">Action Movies</h1>
        <MoviesSlider moviesList={renderActionContent} />
      </div>
      <div className="movies-container">
        <h1 className="movies-heading">Comedy Movies</h1>
        <MoviesSlider moviesList={renderComedyContent} />
      </div>
    </div>
  )
}

export default PrimeVideo
