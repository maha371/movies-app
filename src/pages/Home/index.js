import Navbar from "../../components/navbar";
import { useEffect } from "react";
import { getMovies } from "../../api/movies";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../../components/movieCard";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { getMoviesBySearch } from "../../utils/getMoviesBySearch";
const Home = () => {
    const dispatch = useDispatch();
const { movies, searchValue } = useSelector(state => state.movies)
console.log(movies,'movies');
const filtered = getMoviesBySearch(movies, searchValue)
    useEffect(()=>{
dispatch(getMovies())
    },[])
    return (
        <>
            <Navbar />
          <Box sx={{flexGrow: 1, marginTop: 2}}>
<Grid container spacing={2}>
                {filtered.length > 0 && filtered.map(movie=><MovieCard key={movie.id} movie={movie}/>)}
                </Grid>
            </Box>
        </>
    )
}
export default Home;