import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Serivedashboard {
    dishes = [
  {
    dishName: "Chicken Biryani",
    dishPrice: 249,
    dishRating: 4.5,
    dishTime: "30-40 mins",
    dishType: "Non-Veg",
    dishImage: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f"
  },
  {
    dishName: "Veg Fried Rice",
    dishPrice: 179,
    dishRating: 4.2,
    dishTime: "20-25 mins",
    dishType: "Veg",
    dishImage: "https://images.unsplash.com/photo-1604908177522-402e5e7c6a0d"
  },
  {
    dishName: "Paneer Butter Masala",
    dishPrice: 219,
    dishRating: 4.6,
    dishTime: "25-30 mins",
    dishType: "Veg",
    dishImage: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7"
  },
  {
    dishName: "Masala Dosa",
    dishPrice: 129,
    dishRating: 4.3,
    dishTime: "15-20 mins",
    dishType: "Veg",
    dishImage: "https://images.unsplash.com/photo-1589302168068-964664d93dc0"
  },
  {
    dishName: "Margherita Pizza",
    dishPrice: 299,
    dishRating: 4.4,
    dishTime: "20-30 mins",
    dishType: "Veg",
    dishImage: "https://images.unsplash.com/photo-1548365328-9f547fb0953b"
  },
  {
    dishName: "Pepperoni Pizza",
    dishPrice: 349,
    dishRating: 4.7,
    dishTime: "25-35 mins",
    dishType: "Non-Veg",
    dishImage: "https://images.unsplash.com/photo-1601924582975-7f5e24fdfd7a"
  },
  {
    dishName: "Burger Combo",
    dishPrice: 199,
    dishRating: 4.1,
    dishTime: "20-25 mins",
    dishType: "Non-Veg",
    dishImage: "https://images.unsplash.com/photo-1550547660-d9450f859349"
  },
  {
    dishName: "Chicken Shawarma",
    dishPrice: 159,
    dishRating: 4.4,
    dishTime: "15-20 mins",
    dishType: "Non-Veg",
    dishImage: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
  },
  {
    dishName: "Chole Bhature",
    dishPrice: 149,
    dishRating: 4.3,
    dishTime: "20-30 mins",
    dishType: "Veg",
    dishImage: "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56"
  },
  {
    dishName: "Tandoori Chicken",
    dishPrice: 329,
    dishRating: 4.6,
    dishTime: "30-40 mins",
    dishType: "Non-Veg",
    dishImage: "https://images.unsplash.com/photo-1601050690597-df0568f70950"
  },
  {
    dishName: "Pasta Alfredo",
    dishPrice: 259,
    dishRating: 4.2,
    dishTime: "20-30 mins",
    dishType: "Veg",
    dishImage: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9"
  },
  {
    dishName: "Chocolate Brownie",
    dishPrice: 119,
    dishRating: 4.8,
    dishTime: "10-15 mins",
    dishType: "Dessert",
    dishImage: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c"
  }
];
getDishes(){
    return this.dishes;
}
products = [
    {
      productName: "iPhone 15 Pro",
      productPrice: 129999,
      productInstock: 10,
      productColor: "Black",
      productUrl: "https://images.unsplash.com/photo-1695048133142-1a20484a3c5a"
    },
    {
      productName: "Samsung Galaxy S24",
      productPrice: 99999,
      productInstock: 8,
      productColor: "Silver",
      productUrl: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c"
    },
    {
      productName: "Google Pixel 8",
      productPrice: 75999,
      productInstock: 6,
      productColor: "Blue",
      productUrl: "https://images.unsplash.com/photo-1598327105666-5b89351aff97"
    },
    {
      productName: "OnePlus 12",
      productPrice: 64999,
      productInstock: 12,
      productColor: "Green",
      productUrl: "https://images.unsplash.com/photo-1585060544812-6b45742d762f"
    },
    {
      productName: "Apple iPad Air",
      productPrice: 54999,
      productInstock: 7,
      productColor: "Gray",
      productUrl: "https://images.unsplash.com/photo-1587829741301-dc798b83add3"
    },
    {
      productName: "MacBook Pro M3",
      productPrice: 199999,
      productInstock: 4,
      productColor: "Space Gray",
      productUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
    },
    {
      productName: "Dell XPS 15",
      productPrice: 149999,
      productInstock: 5,
      productColor: "White",
      productUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    },
    {
      productName: "Sony WH-1000XM5",
      productPrice: 29999,
      productInstock: 15,
      productColor: "Black",
      productUrl: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b"
    },
    {
      productName: "Apple Watch Series 9",
      productPrice: 45999,
      productInstock: 9,
      productColor: "Red",
      productUrl: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b"
    },
    {
      productName: "Amazon Echo Dot",
      productPrice: 4999,
      productInstock: 20,
      productColor: "White",
      productUrl: "https://images.unsplash.com/photo-1518444028785-8f0b7a6e5b4b"
    }
  ];
  getproducts(){
    return this.products;
}
}