import {Store} from './store';

export const CulturaFR: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '€',
  labels: {
    captcha: {
      container: 'body',
      text: ['entrez les caractères que vous voyez ci-dessous'],
    },
    inStock: {
      container: '#addCartButton',
      text: ['Ajouter au panier'],
    },
    maxPrice: {
      container: '#product-prices',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '.availability out-of-stock',
        text: ['Indisponible'],
      },
    ],
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.cultura.com/playstation-5-edition-standard-0711719395201.html',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.cultura.com/playstation-5-edition-digitale-version-sans-lecteur-optique-0711719395300.html',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.cultura.com/console-xbox-series-x-1to-0889842640809.html',
    },
  ],
  name: 'cultura-fr',
};
