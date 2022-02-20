const BASE_URL = 'https://restcountries.com';

export const fetchCountries = name => {
  return fetch(`${BASE_URL}/v3.1/name/${name}?fields=name,capital,flags,population,languages`)
    .then(res => {
      if (!res.ok) {
        const incorrectInput = '';
        renderCountryInfo(incorrectInput);
        Notiflix.Notify.failure('Oops, there is no country with that name');

        throw res();
      }
      return res.json();
    })
    .then(res => {
      return res;
    });
};
