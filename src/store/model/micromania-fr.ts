import {Store} from './store';

export const MicromaniaFR: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '€',
  labels: {
    captcha: {
      container: 'body',
      text: ['entrez les caractères que vous voyez ci-dessous'],
    },
    inStock: {
      container: '.add-to-cart-container',
      text: ['Ajouter au panier'],
    },
    maxPrice: {
      container: '.pricing-container',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '.back-in-stock-container',
        text: ['Le produit est épuisé'],
      },
    ],
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.micromania.fr/playstation-5-105642.html',
    },      
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.micromania.fr/playstation-5-alldigital-106097.html',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.micromania.fr/xbox-series-x-1to-105643.html',
    },
  ],
  name: 'micromania-fr',
};
