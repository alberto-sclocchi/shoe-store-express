require("../db")
const Shoe = require("../models/Shoe.model");


const shoesInStore = [
    {
        name: "Gazelle",
        model: "Adidas",
        img: "https://i.ebayimg.com/images/g/Ae4AAOSwa6JfqCf3/s-l1600.jpg",
        size: "34",
        inStock: true,
        shoeId: 0
    },
    {
        name: "Blazer",
        model: "Nike",
        img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ff3797cf-c618-42e0-b22a-2a5f5ffa1e44/custom-nike-blazer-mid-77-by-you.png",
        size: "29",
        inStock: true,
        shoeId: 1
    },
    {
        name: "Panda Dunk Low",
        model: "Nike",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRArfvqw-Mple9iNc8wYpfWyIifTDvDrHIHR8u2w-sq0DkxFRkbYO7nClzonyuJX9sR8C4&usqp=CAU",
        size: "27",
        inStock: false,
        shoeId: 2
    }
];

Shoe.create(shoesInStore)
.then((shoes) => {
    console.log({shoesAdded: shoes});
})
.catch((err)=>{
    console.log("Error:", err);
})