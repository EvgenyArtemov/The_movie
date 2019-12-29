import "../css/style.css";
import Search from './models/Search';
import { DOM } from './views/DOM';
import * as searchView from './views/SearchView';

const state = {};


const controlSearch = async () => {

    //Query from search form
    let query = searchView.getInput();

    //Function to get value from search field on button click

    if (query) {
        //New instance of Search object withquery
        state.search = new Search(query);

        //putting search results in state object
        await state.search.getData();
    };

    console.log(state.search.results);
    
}

DOM.searchForm.addEventListener('submit', ev => {
    ev.preventDefault();
    controlSearch();
});
