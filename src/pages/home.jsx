import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from "../constants/constants";
import MovieCard from '../components/moviecard';


const Home = () => {

    const [listMovie, setListMovie] = useState([]);

    const getMovie = () => {
        axios.get(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`).then(res => setListMovie(res.data));
    }

    console.log(listMovie);

    useEffect(() => {
        getMovie();
    },[]);

    return (

        <div> 
            <h1>Movie Database</h1>
            {listMovie.results && listMovie.results.map((item, index) => {
                return(<div key={index}><MovieCard data={item} /></div>)
            })}
            
            
        </div>

        //Todo : Create Card component, Make Card component contain each value of API, Done
        //useEffect is a function call after the DOM is loaded
        //Add CSS Styling , No need for this one
        //Move API Calls into Services using Redux, Next Time.
        //Bonus point if you can do from input
        

        
        

    );

}

export default Home;