import gtb from "../assets/images/gtb.png";
import zenith from "../assets/images/zenith.png";
import firstbank from "../assets/images/firstbank.png";
import stabic from "../assets/images/stabic.png";
import fcmb from "../assets/images/fcmb.png";

const accounts = [
  {
    id: 1,
    bankImg: gtb,
    number: "0016453101",
    naira: true,
    noBg: true,
  },

  {
    id: 2,
    bankImg: zenith,
    number: "1010342016",
    naira: true,
  },
  {
    id: 3,
    bankImg: firstbank,
    number: "2018457003",
    naira: true,
    noBg: true,
  },

  {
    id: 4,
    bankImg: stabic,
    number: "0015067615",
    naira: true,
  },

  {
    id: 5,
    bankImg: firstbank,
    number: "2018457003",
    naira: true,
    type: "power patners",
    noBg: true,
  },
  {
    id: 6,
    bankImg: fcmb,
    number: "1010342016",
    naira: true,
    type: "club 50",
    noBg: true,
  },

  {
    id: 7,
    bankImg: gtb,
    number: "0016453118",
    naira: false,
    noBg: true,
    type: "Dollars",
  },

  {
    id: 8,
    bankImg: gtb,
    number: "0016453132",
    naira: false,
    noBg: true,
    type: "Pounds",
  },
];

export default accounts;
