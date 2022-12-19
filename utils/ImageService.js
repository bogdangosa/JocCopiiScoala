  export class ImageService {
     static images = [
      {
        name: 'cal.png',
        image: require('../assets/cal.png'),
      },
      {
        name: 'capra.png',
        image: require('../assets/capra.png'),
      },
      {
        name: 'urs.png',
        image: require('../assets/urs.png'),
      },
      {
        name: 'zebra.png',
        image: require('../assets/zebra.png'),
      },
      {
        name: 'lup.png',
        image: require('../assets/lup.png'),
      },
      {
        name: 'caine.png',
        image: require('../assets/caine.png'),
      },
      {
        name: 'pisica.png',
        image: require('../assets/pisica.png'),
      },
      {
        name: 'vulpe.png',
        image: require('../assets/vulpe.png'),
      },
      {
        name: 'vaca.png',
        image: require('../assets/vaca.png'),
      },
      {
        name: 'mar.png',
        image: require('../assets/mar.png'),
      },
      {
        name: 'para.png',
        image: require('../assets/para.png'),
      },
      {
        name: 'pruna.png',
        image: require('../assets/pruna.png'),
      },
      {
        name: 'piersica.png',
        image: require('../assets/piersica.png'),
      },
      {
        name: 'caisa.png',
        image: require('../assets/caisa.png'),
      },
      {
        name: 'ananas.png',
        image: require('../assets/ananas.png'),
      },
      {
        name: 'portocala.png',
        image: require('../assets/portocala.png'),
      },
      {
        name: 'banana.png',
        image: require('../assets/banana.png'),
      },
      {
        name: 'kiwi.png',
        image: require('../assets/kiwi.png'),
      },
      {
        name: 'pomelo.png',
        image: require('../assets/pomelo.png'),
      },
      {
        name: 'cirese.png',
        image: require('../assets/cirese.png'),
      },
      {
        name: 'capsuni.png',
        image: require('../assets/capsuni.png'),
      },
      {
        name: 'zmeura.png',
        image: require('../assets/zmeura.png'),
      },
      {
        name: 'mure.png',
        image: require('../assets/mure.png'),
      },
    ];
    static GetImage = (name) => {
      const found = ImageService.images.find(e => e.name === name);
      return found ? found.image : null;
    };
  }