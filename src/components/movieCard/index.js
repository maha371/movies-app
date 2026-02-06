import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import StarIcon from '@mui/icons-material/Star';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';

export default function MovieCard({ movie }) {
  const { img_link, name, director_name, writer_name, imdb_rating, duration, genre } = movie;
  return (
    <Grid item xs={3}>
      <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardMedia
          sx={{ height: 200 }}
          image={img_link}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Directed by: {director_name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Written by: {writer_name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Genre: <Chip label={genre} />
          </Typography>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Duration: {duration} mins
          </Typography>
          <IconButton aria-label="add to favorites">
            <StarIcon />
          </IconButton>
          {imdb_rating}
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
