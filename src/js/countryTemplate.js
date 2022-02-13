const countryMinTemplate = countries => {
  const { flags, name } = countries;

  return `
	<div class="country_block">
    <div class="country_block--elements">
      <p class="country_block--name">
        <img src="${flags.svg}"
          alt="flag ${name.official}" width="35">
        ${name.official}
      </p>
    </div>
  </div>
	`;
};

const countryTemplate = countries => {
  const { flags, name, capital, population, languages } = countries;
  const countryLang = Object.values(languages).join(', ');

  return `
	<div class="country_block">
    <div class="country_block--elements">
      <p class="country_block--name big">
        <img src="${flags.svg}"
          alt="flag ${name.official}" width="35">
        ${name.official}
      </p>
    </div>
    <ul class="country_block--list list">
      <li class="country_block--item">
        <p><span class="boldItemText">Capital: </span>${capital}</p>
      </li>
      <li class="country_block--item">
        <p><span class="boldItemText">Population: </span>${population}</p>
      </li>
      <li class="country_block--item">
        <p><span class="boldItemText">Languages: </span>${countryLang}</p>
      </li>
    </ul>
  </div>
	`;
};

export { countryTemplate, countryMinTemplate };
