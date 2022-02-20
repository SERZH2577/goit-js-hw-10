const BASE_URL = 'https://restcountries.com';

export const fetchCountries = name => {
  return fetch(`${BASE_URL}/v3.1/name/${name}?fields=name,capital,flags,population,languages`)
    .then(res => {
      if (!res.ok) {
        throw new res();
      }
      return res.json();
    })
    .then(res => {
      return res;
    });
};
