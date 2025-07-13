import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const platforms = [
  { name: 'Netflix', image: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
  { name: 'Amazon Prime', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png' },
  { name: 'Disney+', image: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg' },
  { name: 'Hulu', image: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg' },
  { name: 'HBO Max', image: 'https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg' },
];

const Platforms = () => (
  <div>
    <h2>OTT Platforms</h2>
    <Grid container spacing={2}>
      {platforms.map((platform) => (
        <div style={{ flex: '1 0 21%', margin: 8, minWidth: 200, maxWidth: 300 }} key={platform.name}>
          <Card>
            <CardMedia
              component="img"
              height="100"
              image={platform.image}
              alt={platform.name}
              sx={{ objectFit: 'contain', background: '#fff' }}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {platform.name}
              </Typography>
            </CardContent>
          </Card>
        </div>
      ))}
    </Grid>
  </div>
);

export default Platforms; 