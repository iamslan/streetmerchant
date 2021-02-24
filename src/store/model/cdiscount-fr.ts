import {Store} from './store';

export const CdiscountFR: Store = {
  backoffStatusCodes: [403, 429, 503],
  currency: '€',
  labels: {
    captcha: {
      container: 'body',
      text: ['entrez les caractères que vous voyez ci-dessous'],
    },
    inStock: {
      container: '.btAdd.jsFpPurchasePriceBloc',
      text: ['Ajouter au panier'],
    },
    maxPrice: {
      container: '.fpPrice.hideFromPro',
      euroFormat: true,
    },
    outOfStock: [
      {
        container: '.mvNavMgHeader',
        text: ['MENU'],
      },
    ],
  },
  links: [
    {
      brand: 'sony',
      model: 'ps5 console',
      series: 'sonyps5c',
      url: 'https://www.cdiscount.com/jeux-pc-video-console/ps5/console-ps5-blanche-white-standard-edition-plays/f-1035001-ps5standardwhi.html',
    },      
    {
      brand: 'sony',
      model: 'ps5 digital',
      series: 'sonyps5de',
      url: 'https://www.cdiscount.com/jeux-pc-video-console/ps5/console-ps5-blanche-white-digital-edition-playst/f-1035001-ps5digitalwhi.html',
    },
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.cdiscount.com/jeux-pc-video-console/xbox-series-x/console-xbox-series-x/l-1035201.html',
    },
  ],
  name: 'cdiscount-fr',
};
