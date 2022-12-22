  export class ImageService {
     static images = [
      {
        name: 'cal.png',
        image: require('../assets/animale/cal.png'),
      },
      {
        name: 'capra.png',
        image: require('../assets/animale/capra.png'),
      },
      {
        name: 'urs.png',
        image: require('../assets/animale/urs.png'),
      },
      {
        name: 'zebra.png',
        image: require('../assets/animale/zebra.png'),
      },
      {
        name: 'lup.png',
        image: require('../assets/animale/lup.png'),
      },
      {
        name: 'caine.png',
        image: require('../assets/animale/caine.png'),
      },
      {
        name: 'pisica.png',
        image: require('../assets/animale/pisica.png'),
      },
      {
        name: 'vulpe.png',
        image: require('../assets/animale/vulpe.png'),
      },
      {
        name: 'vaca.png',
        image: require('../assets/animale/vaca.png'),
      },
      {
        name: 'mar.png',
        image: require('../assets/fructe/mar.png'),
      },
      {
        name: 'para.png',
        image: require('../assets/fructe/para.png'),
      },
      {
        name: 'pruna.png',
        image: require('../assets/fructe/pruna.png'),
      },
      {
        name: 'piersica.png',
        image: require('../assets/fructe/piersica.png'),
      },
      {
        name: 'caisa.png',
        image: require('../assets/fructe/caisa.png'),
      },
      {
        name: 'ananas.png',
        image: require('../assets/fructe/ananas.png'),
      },
      {
        name: 'portocala.png',
        image: require('../assets/fructe/portocala.png'),
      },
      {
        name: 'banana.png',
        image: require('../assets/fructe/banana.png'),
      },
      {
        name: 'kiwi.png',
        image: require('../assets/fructe/kiwi.png'),
      },
      {
        name: 'pomelo.png',
        image: require('../assets/fructe/pomelo.png'),
      },
      {
        name: 'cirese.png',
        image: require('../assets/fructe/cirese.png'),
      },
      {
        name: 'capsuni.png',
        image: require('../assets/fructe/capsuni.png'),
      },
      {
        name: 'zmeura.png',
        image: require('../assets/fructe/zmeura.png'),
      },
      {
        name: 'mure.png',
        image: require('../assets/fructe/mure.png'),
      },
      {
        name: 'rosie.png',
        image: require('../assets/legume/rosie.png'),
      },
      {
        name: 'cartof.png',
        image: require('../assets/legume/cartof.png'),
      },
      {
        name: 'ceapa.png',
        image: require('../assets/legume/ceapa.png'),
      },
      {
        name: 'ardei.png',
        image: require('../assets/legume/ardei.png'),
      },
      {
        name: 'usturoi.png',
        image: require('../assets/legume/usturoi.png'),
      },
      {
        name: 'morcov.png',
        image: require('../assets/legume/morcov.png'),
      },
      {
        name: 'castravete.png',
        image: require('../assets/legume/castravete.png'),
      },
      {
        name: 'masina.png',
        image: require('../assets/vehicule/masina.png'),
      },
      {
        name: 'tren.png',
        image: require('../assets/vehicule/tren.png'),
      },
      {
        name: 'avion.png',
        image: require('../assets/vehicule/avion.png'),
      },
      {
        name: 'bicicleta.png',
        image: require('../assets/vehicule/bicicleta.png'),
      },      
      {
        name: 'trotineta.png',
        image: require('../assets/vehicule/trotineta.png'),
      },
      {
        name: 'motocicleta.png',
        image: require('../assets/vehicule/motocicleta.png'),
      },
      {
        name: 'autobuz.png',
        image: require('../assets/vehicule/autobuz.png'),
      },
      {
        name: 'tir.png',
        image: require('../assets/vehicule/tir.png'),
      },
    ];
    static GetImage = (name) => {
      const found = ImageService.images.find(e => e.name === name);
      return found ? found.image : null;
    };
  }