import {Store} from './store';

export const BoulangerFR: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '€',
  labels: {
    captcha: {
      container: 'body',
      text: ['entrez les caractères que vous voyez ci-dessous'],
    },
    inStock: {
      container: '#addToCartPurchase',
      text: ['Ajouter au panier'],
    },
    maxPrice: {
      container: '.fix-price',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '.pb-bottom',
        text: ['indisponible'],
      },
    ],
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.boulanger.com/ref/1147567',
    },
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.boulanger.com/ref/1147568',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.boulanger.com/ref/1147987',
    },
  ],
  name: 'boulanger-fr',
};
