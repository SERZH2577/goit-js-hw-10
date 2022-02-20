import './css/styles.css';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import { fetchCountries } from './js/fetchCountries';
import { countryTemplate, countryMinTemplate } from './js/countryTemplate';

const DEBOUNCE_DELAY = 300;

const searchBoxEl = document.querySelector('#search-box');
const countryInfo = document.querySelector('.country-info');

searchBoxEl.addEventListener('input', debounce(onTextInput, `${DEBOUNCE_DELAY}`));

const renderCountryInfo = template => {
  countryInfo.innerHTML = template;
};

function onTextInput(e) {
  const BASE_URL = 'https://restcountries.com';

  fetchCountries(e.target.value)
    .then(countries => {
      const templateCountryInfo = createCountryList(countries);
      renderCountryInfo(templateCountryInfo);
    })
    .catch(error => console.log(error));

  function createCountryList(countries) {
    if (countries.length === 1) {
      return countries.map(country => countryTemplate(country)).join('');
    } else if (countries.length >= 2 && countries.length <= 10) {
      return countries.map(country => countryMinTemplate(country)).join('');
    } else {
      Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
      return '';
    }
  }
}
