import {colors} from "../themes/color";

export const app_structure_data = [
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
        },
        {
          name: "Fructe",
          color: colors.green,
          game:"Recunoastere",
          field:"fruct",
          progress_rate:20,
        },
        {
          name: "Cifre",
          color: colors.orange,
          game:"Recunoastere",
          field:"cifra",
          progress_rate:20,
        },
      ],
    },
    {
      title: "Reordoneaza",
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
        },
        {
          name: "Animalul",
          color: colors.green,
          game:"Recunoastere",
          field:"animal",
          progress_rate:20,
        },
        {
          name: "Selectare vocale",
          color: colors.orange,
          game:"SelectareVocale",
          progress_rate:20,
        },
      ],
    },
  ];