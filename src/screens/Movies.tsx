import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const movies = [
  { title: 'Inception', image: 'https://image.tmdb.org/t/p/w200/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg' },
  { title: 'Interstellar', image: 'https://image.tmdb.org/t/p/w200/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg' },
  { title: 'The Dark Knight', image: 'https://image.tmdb.org/t/p/w200/qJ2tW6WMUDux911r6m7haRef0WH.jpg' },
  { title: 'Avatar', image: 'https://image.tmdb.org/t/p/w200/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg' },
  { title: 'The Matrix', image: 'https://image.tmdb.org/t/p/w200/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg' },
];

const Movies = () => (
  <div>
    <h2>Movies</h2>
    <Grid container spacing={2}>
      {movies.map((movie) => (
        <div style={{ flex: '1 0 21%', margin: 8, minWidth: 200, maxWidth: 300 }} key={movie.title}>
          <Card>
            <CardMedia
              component="img"
              height="250"
              image={movie.image}
              alt={movie.title}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {movie.title}
              </Typography>
            </CardContent>
          </Card>
        </div>
      ))}
    </Grid>
  </div>
);

export default Movies; 