import axios from 'axios';
import { setMovies } from '../slice/movieSlice';
export const getMovies = () => async dispatch => {
    const url = "http://localhost:3001/movies";
    try{
        const {data} = await axios.get(url);
        dispatch(setMovies(data))
        console.log(data,'data');
        
        return data;
        }
        catch(err){
            return err;
    }
}