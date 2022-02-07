import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const searchBoxEl = document.querySelector('#search-box');

searchBoxEl.addEventListener('input', debounce(onTextInput, `${DEBOUNCE_DELAY}`));

function onTextInput(e) {
  console.log(300);
  // Notiflix.Notify.failure('Oops, there is no country with that name');

  console.log(e.target.value.length);

  if (e.target.value.length <= 1) {
    Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
  }
}
