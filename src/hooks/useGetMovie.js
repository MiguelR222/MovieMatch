import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { MOVIES_API_KEY } from '@env';

const useGetMovie = (selectedGenre) => {
  const [moviesList, setMoviesList] = useState([]);
  const [randomMovie, setRandomMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieData = async (selectedGenre) => {
      try {
        const apiKey = MOVIES_API_KEY;
        const genreApiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${selectedGenre}`;
        const response = await fetch(genreApiUrl);
        const data = await response.json();
        setMoviesList(data.results);

        const randomIndex = Math.floor(Math.random() * data.results.length);
        setRandomMovie(data.results[randomIndex]);

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        Alert.alert('Error', `Failed to fetch Movie: ${error.message}`);
      }
    };

    if (selectedGenre !== null && selectedGenre !== undefined) {
      setLoading(true);
      fetchMovieData(selectedGenre);
    }
  }, [selectedGenre]);

  return { moviesList, randomMovie, loading, error };
};

export default useGetMovie;
