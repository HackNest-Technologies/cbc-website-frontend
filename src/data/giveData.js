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
    currency: "NGN",
    naira: true,
    noBg: true,
    bankName: "Guaranty Trust Bank Ltd",
  },

  {
    id: 2,
    bankImg: zenith,
    number: "1010342016",
    currency: "NGN",
    naira: true,
    bankName: "zenith bank",
  },
  {
    id: 3,
    bankImg: firstbank,
    number: "2018457003",
    currency: "NGN",
    naira: true,
    noBg: true,
    bankName: "First Bank Of Nigeria",
  },

  {
    id: 4,
    bankImg: stabic,
    number: "0015067615",
    currency: "NGN",
    naira: true,
    bankName: "stanbic ibtc",
  },

  {
    id: 5,
    bankImg: firstbank,
    number: "2018457003",
    currency: "NGN",
    naira: true,
    type: "Power partners",
    noBg: true,
    bankName: "First Bank Of Nigeria",
  },
  {
    id: 6,
    bankImg: fcmb,
    number: "1010342016",
    currency: "NGN",
    naira: true,
    type: "Club 50",
    noBg: true,
    bankName: "Fcmb",
  },

  {
    id: 7,
    bankImg: gtb,
    number: "0016453118",
    naira: false,
    noBg: true,
    bankName: "Guaranty Trust Bank Ltd",
    type: "Dollars",
  },

  {
    id: 8,
    bankImg: gtb,
    number: "0016453132",
    naira: false,
    noBg: true,
    bankName: "Guaranty Trust Bank Ltd",
    type: "Pounds",
    
  },
];

export default accounts;
