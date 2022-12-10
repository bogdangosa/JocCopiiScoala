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
    ];
    static GetImage = (name) => {
      const found = ImageService.images.find(e => e.name === name);
      return found ? found.image : null;
    };
  }