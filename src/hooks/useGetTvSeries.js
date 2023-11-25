import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { MOVIES_API_KEY } from '@env';

const useGetTvSeries = (selectedGenre) => {
  const [tvSeriesList, setTvSeriesList] = useState([]);
  const [randomTvSeries, setRandomTvSeries] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTvSeriesData = async (selectedGenre) => {
      try {
        const apiKey = MOVIES_API_KEY;
        const genreApiUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=${selectedGenre}`;
        const response = await fetch(genreApiUrl);
        const data = await response.json();
        setTvSeriesList(data.results);

        const randomIndex = Math.floor(Math.random() * data.results.length);
        setRandomTvSeries(data.results[randomIndex]);

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        Alert.alert('Error', `Failed to fetch TV series: ${error.message}`);
      }
    };

    if (selectedGenre !== null && selectedGenre !== undefined) {
      setLoading(true);
      fetchTvSeriesData(selectedGenre);
    }
  }, [selectedGenre]);

  return { tvSeriesList, randomTvSeries, loading, error };
};

export default useGetTvSeries;
