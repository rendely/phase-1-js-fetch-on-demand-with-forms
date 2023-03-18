const init = () => {
  const inputForm = document.querySelector('form');
  inputForm.addEventListener('submit',e =>{
    e.preventDefault();
    const bookId = inputForm.searchByID.value;
    console.log('Book id:',bookId);
    getMovieById(bookId);
  })
}

function getMovieById(bookId){
  fetch(`http://localhost:3000/movies/${bookId}`)
  .then(r=>r.json())
  .then(d => showMovieDetails(d));
}

function showMovieDetails(d){
  const title = document.querySelector('#movieDetails > h4');
  const summary = document.querySelector('#movieDetails > p');
  title.textContent = d.title;
  summary.textContent = d.summary;
}

document.addEventListener('DOMContentLoaded', init);