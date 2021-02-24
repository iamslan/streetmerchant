import {Store} from './store';

export const AuchanFR: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '€',
  labels: {
    captcha: {
      container: 'body',
      text: ['entrez les caractères que vous voyez ci-dessous'],
    },
    inStock: {
      container: '.product-addToCart--cta',
      text: ['Ajouter au panier'],
    },
    maxPrice: {
      container: '.product-price--formattedValue',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '.error-container--title',
        text: ['Envolée'],
      },
    ],
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.auchan.fr/sony-console-ps5-edition-standard/p-c1315865',
    },      
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.auchan.fr/sony-console-ps5-edition-digitale/p-c1315866',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.auchan.fr/microsoft-console-xbox-series-x/p-c1324998',
    },
  ],
  name: 'auchan-fr',
};
