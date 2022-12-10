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
    ];
    static GetImage = (name) => {
      const found = ImageService.images.find(e => e.name === name);
      return found ? found.image : null;
    };
  }