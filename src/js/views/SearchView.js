import { DOM } from '../views/DOM';
import { genres } from '../views/genres';
export const getInput = () => {
    return DOM.searchFormInput.value;
};

export const rollDice = () => {

    DOM.searchButton.classList.add('dice__roll');
    setTimeout(() => {
        DOM.searchButton.classList.remove('dice__roll');
    }, 1500);
};

export const prepareUI = () => {

    //moving logo to the left corner
    DOM.mainLogo.classList.add('main__logo__container__move');
    //removing logo text
    [DOM.logoTitle, DOM.logoTitleTagline].forEach( el => {
        el.style.display = 'none';
    });
    //moving search form up
    DOM.searchForm.classList.add('search__form__up');
    //cleaning window from OLD results
    DOM.carouselInner.innerHTML = '';
};

//convert list of genres to string
const genresPrint = (arr) => {
    let res = arr.map(el => {
      for (let i = 0; i < genres.length; i++) {
         if(el == genres[i].id){
             return genres[i].name
         }
      }
    }).join(', ')
    //if empty array occurs
    if(res.length == 0){
        res = 'Unspecified';
    }

    return res;
};

// const checkPoster = (val) => {
//     let path = '../../img/noposter.jpg';
//     if()
// }

const renderMovie = movie => {
    let releaseYear;
    if(movie.release_date){
        releaseYear = movie.release_date.slice(0, 4);
    }else{
        releaseYear = 'No title available'
    }

    let path = '../src/img/noposter.jpg';

    if(movie.poster_path){
        path = `https://image.tmdb.org/t/p/w342${movie.poster_path}" alt="movie poster`
    }

    const html = `
        <div class="carousel-item">
    
            <div class="container__search__results">
        
                <div class="movie__poster">
                    <img src="${path}">
                </div>
            
                <section class="movie__info">
                    <p class="movie__info__year">${releaseYear}</p>
                    <p class="movie__info__genres">${genresPrint(movie.genre_ids)}</p>
                    <p class="movie__info__rating">${movie.popularity}
                        <span class="rating__star"></span>
                    </p>
                    <h1 class="movie__info__title">${movie.title}</h1>
                    <span class="line"></span>
                    <p class="movie__info__description">${movie.overview}</p>
                </section>
    
            </div>
        
        </div>
    `;
    DOM.carouselInner.insertAdjacentHTML('beforeend', html);
   
}

export const renderResults = results => {
    results.forEach(renderMovie);
    //at least one of the elements must have active class
    document.querySelector('.carousel-item').classList.add('active');
};