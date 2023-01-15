import {colors} from "../themes/color";

export const app_structure_data = [
    /*{
      title: "Invata",
      color: colors.green,
      image: require("../assets/Panda7.png"),
      games: [
        {
          name: "Litere",
          color: colors.red,
          game:"Recunoastere",
          field:"animal",
          progress_rate:20,
        },
        {
          name: "Cifre",
          color: colors.green,
          game:"Recunoastere",
          field:"animal",
          progress_rate:20,
        },
      ],
    },*/
    {
      title: "Recunoastere",
      color: colors.red,
      image: require("../assets/Panda6.png"),
      games: [
        {
          name:"Animale",
          color:colors.red,
          game:"Recunoastere",
          field:"animal",
          progress_rate:20,
          image: require("../assets/animale.png"),
        },
        {
          name: "Fructe",
          color: colors.green,
          game:"Recunoastere",
          field:"fruct",
          progress_rate:20,
          image: require("../assets/fructe.png"),
        },
        {
          name: "Legume",
          color: colors.blue,
          game:"Recunoastere",
          field:"leguma",
          progress_rate:20,
          image: require("../assets/legume.png"),
        },
        {
          name: "Vehicule",
          color: colors.red,
          game:"Recunoastere",
          field:"vehicul",
          progress_rate:20,
          image: require("../assets/vehicule.png"),
        },
        {
          name: "Cifre",
          color: colors.orange,
          game:"Recunoastere",
          field:"cifra",
          progress_rate:20,
          image: require("../assets/cifre.png"),
        },
        {
          name: "Culori",
          color: colors.green,
          game:"Recunoastere",
          field:"culoare",
          progress_rate:20,
          image: require("../assets/culori.png"),
        },
        
      ],
    },
    {
      title: "Selecteaza",
      color: colors.orange,
      image: require("../assets/Panda3.png"),
      games: [
        {
          name: "Perechi de litere",
          color: colors.red,
          game:"LitereMariMici",
          progress_rate:12.5,
          image: require("../assets/Panda6.png"),
        },
        {
          name: "Selectare vocale",
          color: colors.orange,
          game:"SelectareVocale",
          progress_rate:20,
          image: require("../assets/Panda6.png"),
        },
        {
          name: "Sorteaza ",
          color: colors.blue,
          game:"SorteazaCategorii",
          progress_rate:20,
          image: require("../assets/Panda6.png"),
        },
        {
          name: "Gaseste ",
          color: colors.green,
          game:"GasesteCategoria",
          field:"animal",
          progress_rate:20,
          image: require("../assets/Panda6.png"),
        },
      ],
    },
    {
      title: "Scrie Imaginea",
      color: colors.blue,
      image: require("../assets/Panda3.png"),
      games: [
        {
          name: "Scrie animalul",
          color: colors.red,
          game:"ScriereImagine",
          progress_rate:20,
          field:"animal",
          image: require("../assets/Panda6.png"),
        },
      ],
    },
  ];