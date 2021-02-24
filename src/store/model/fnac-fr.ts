import {Store} from './store';

export const FnacFR: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '€',
  labels: {
    captcha: {
      container: 'body',
      text: ['entrez les caractères que vous voyez ci-dessous'],
    },
    inStock: {
      container: '.f-buyBox-buttons',
      text: ['Ajouter au panier'],
    },
    maxPrice: {
      container: '.f-priceBox-price',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '.f-buyBox-availability',
        text: ['Indisponible'],
      },
    ],
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.fnac.com/Console-Sony-PS5-Edition-Standard/a14119956/w-4',
    },      
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.fnac.com/Console-Sony-PS5-Edition-Digital/a14119961/w-4',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.fnac.com/Console-Microsoft-Xbox-Series-X-Noir/a15089504/w-4',
    },
  ],
  name: 'fnac-fr',
};
