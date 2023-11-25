import React, { useState, useEffect } from "react";
import {MOVIES_API_KEY} from '@env'

export const useTVGetList = () => {
    const [genres, setGenres] = useState([]);
    const fetchGenres = async () => {
      try {
          const res = await fetch(`https://api.themoviedb.org/3/genre/tv/list?api_key=${MOVIES_API_KEY}`);
          const data = await res.json();
          return data.genres;
      } catch (error) {
          console.error('Error fetching genres:', error);
          return [];
      }
  };
  
  useEffect(() => {
      const getGenres = async () => {
          const genreList = await fetchGenres();
          setGenres(genreList);
      };
  
      getGenres();
  }, []);
  return genres
}
