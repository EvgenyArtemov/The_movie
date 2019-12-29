import axios from 'axios';
export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getData(query) {

        // API always give first 20 results, that's why we need to get random page
        //my API key
        const key = '177ad4a5b431aa7454ee8710dc22b0dc';
    
        try {
            //Getting all the results with certain query just for understanding
            //how many pages are
            const allRes = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${this.query}`);
            let maxPages = allRes.data.total_pages;
            //chiosing random page for preventing same search end result for same query
            let randomPage = Math.floor(Math.random() * maxPages);
            //making another request with calculated random page number
            const randomRes = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&page=${randomPage}&query=${this.query}`);
            this.results = randomRes.data.results;
        
        } catch (error){
            alert(error);
        }
    }

}



