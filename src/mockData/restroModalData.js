import { foodCatagory, foodType } from "../Enums/FoodType";

export const restroModalData = [
  {
    id: "0001",
    name: "abc",
    imageUrl: "",
    restDetails: {
      street: "old bus stand",
      city: "Nuzividu",
      phone: "9478662378",
    },
    famousCusines: [
      {
        foodCatagory: foodCatagory.VEG,
        foodType: foodType.BIRYANI,
        name: "Moghalai Biryani",
      },
    ],
  },
];
