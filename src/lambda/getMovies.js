import axios from "axios";

export async function handler(event, context) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${
        process.env.MOVIE_DB_API_KEY
      }&page=1`,
      {
        headers: { Accept: "application/json" }
      }
    );
    const data = response.data;
    return {
      statusCode: 200,
      body: JSON.stringify({ movies: data.results })
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }) // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
}
