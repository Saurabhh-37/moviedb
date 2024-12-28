import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';

const MovieList = () => {
  const [movie, setMovie] = useState(null); // State to store movie details
  const [error, setError] = useState(null); // State to handle errors

  // Fetch data from the API
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          'https://www.omdbapi.com/?i=tt3896198&apikey=d2132124'
        );
        const data = await response.json();
        if (data.Response === 'True') {
          setMovie(data);
        } else {
          setError(data.Error);
        }
      } catch (err) {
        setError('Failed to fetch data.');
      }
    };

    fetchMovie();
  }, []);

  if (error) {
    return <Typography color="error" align="center">{error}</Typography>;
  }

  if (!movie) {
    return <Typography align="center">Loading...</Typography>;
  }

  return (
    <Box sx={{ backgroundColor: '#112247', minHeight: '100vh', padding: '20px' }}>
      <Card sx={{ maxWidth: '100%', margin: '16px auto', display: 'flex' }}>
        <Grid container spacing={2}>
          {/* Left Section - Movie Poster */}
          <Grid item xs={12} sm={4} sx={{ backgroundColor: '#112247' }}>
            <CardMedia
              component="img"
              height="500"
              image={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450'}
              alt={movie.Title}
            />
          </Grid>

          {/* Right Section - Movie Details */}
          <Grid item xs={12} sm={8}>
            <CardContent sx={{ backgroundColor: '#112247', color: 'white', padding: '20px' }}>
              <Typography variant="h4" component="div" gutterBottom sx={{ marginBottom: '0px' }}>
                {movie.Title}
              </Typography>
              
              {/* Genre Below Title */}
              <Typography variant="h7" color="white" gutterBottom sx={{ marginTop: '0px' }}>
                {movie.Genre}
              </Typography>

              <Typography variant="body1" color="white" gutterBottom sx={{ marginTop: '4px' }}>
                <strong>Year:</strong> {movie.Year} <br />
                <strong>Rated:</strong> {movie.Rated} <br />
                <strong>Released:</strong> {movie.Released} <br />
                <strong>Runtime:</strong> {movie.Runtime} <br />
                <strong>Director:</strong> {movie.Director} <br />
                <strong>Writer:</strong> {movie.Writer} <br />
                <strong>Language:</strong> {movie.Language} <br />
                <strong>Country:</strong> {movie.Country} <br />
                <strong>Awards:</strong> {movie.Awards} <br />
                <strong>BoxOffice:</strong> {movie.BoxOffice} <br />
                <strong>IMDb Rating:</strong> {movie.imdbRating} <br />
                <strong>IMDb Votes:</strong> {movie.imdbVotes} <br />
                <strong>Ratings:</strong>
                <ul>
                  {movie.Ratings.map((rating, index) => (
                    <li key={index} style={{ color: 'white' }}>
                      {rating.Source}: {rating.Value}
                    </li>
                  ))}
                </ul>
              </Typography>
              <Divider style={{ margin: '20px 0', borderColor: 'white' }} />
              <Typography variant="body1" color="white" paragraph>
                <strong>Plot:</strong> {movie.Plot}
              </Typography>
              <Typography variant="body1" color="white">
                <strong>Casts:</strong> {movie.Actors}
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
};

export default MovieList;
