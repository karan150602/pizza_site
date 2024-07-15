let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});
closeShopping.addEventListener("click", () => {
  body.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "Margherita",
    image:
      "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/margherita.90f9451fd66871fb6f9cf7d506053f18.1.jpg",
    description:
      "Pizza topped with our herb-infused signature pan sauce and 100% mozzarella cheese. A classic treat for all cheese lovers out there!",
    price: "139",
  },
  {
    id: 2,
    name: "Schezwan Margherita",
    image:
      "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/schezwan-margherita.4371d9483546db47a97c5503ccad0c2f.1.jpg",
    description:
      "Your very own Margherita, now with a spicy twist! Loaded with our signature spicy schezwan sauce & 100% mozzarella cheese.",
    price: "339",
  },
  {
    id: 3,
    name: "Mazedar Makhni Paneer",
    image:
      "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/mazedar-makhni-paneer.cb3150d2be9cb8dcd248be70921c5196.1.jpg?width=600",
    description:
      "A treat for all makhni lovers. Spiced paneer, onion, juicy red bell peppers with our new flavourful makhni sauce, topped with 100% mozzarella cheese and buttery spice sprinkle ",
    price: "199",
  },
  {
    id: 4,
    name: "Ultimate Tandoori Veggie",
    image:
      "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/awesome-american-cheesy.17f198e5a73db40c367ddfe96da54a4c.1.jpg",
    description:
      "Your very own Margherita, now with a spicy twist! Loaded with our signature spicy schezwan sauce & 100% mozzarella cheese.",
    price: "409",
  },
  {
    id: 5,
    name: "Mexican Fiesta",
    image:
      "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/awesome-american-cheesy.17f198e5a73db40c367ddfe96da54a4c.1.jpg",
    description:
      "Your very own Margherita, now with a spicy twist! Loaded with our signature spicy schezwan sauce & 100% mozzarella cheese.",
    price: "299",
  },
  {
    id: 6,
    name: "Awesome American Cheesy Chicken",
    image:
      "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/awesome-american-cheesy.17f198e5a73db40c367ddfe96da54a4c.1.jpg",
    description:
      "Your very own Margherita, now with a spicy twist! Loaded with our signature spicy schezwan sauce & 100% mozzarella cheese.",
    price: "105",
  },
  {
    id: 7,
    name: "Nawabi Murg Makhni",
    image:
      "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/awesome-american-cheesy.17f198e5a73db40c367ddfe96da54a4c.1.jpg",
    description:
      "Your very own Margherita, now with a spicy twist! Loaded with our signature spicy schezwan sauce & 100% mozzarella cheese.",
    price: "110",
  },
  {
    id: 8,
    name: "Tandoori Paneer",
    image:
      "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/awesome-american-cheesy.17f198e5a73db40c367ddfe96da54a4c.1.jpg",
    description:
      "Your very own Margherita, now with a spicy twist! Loaded with our signature spicy schezwan sauce & 100% mozzarella cheese.",
    price: "250",
  },
  {
    id: 9,
    name: "Veggie Supreme",
    image:
      "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/awesome-american-cheesy.17f198e5a73db40c367ddfe96da54a4c.1.jpg",
    description:
      "Your very own Margherita, now with a spicy twist! Loaded with our signature spicy schezwan sauce & 100% mozzarella cheese.",
    price: "300",
  },
  {
    id: 10,
    name: "Chicken Sausage",
    image:
      "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/mazedar-makhni-paneer.cb3150d2be9cb8dcd248be70921c5196.1.jpg?width=600",
    description:
      "A treat for all makhni lovers. Spiced paneer, onion, juicy red bell peppers with our new flavourful makhni sauce, topped with 100% mozzarella cheese and buttery spice sprinkle ",
    price: "210",
  },
];
let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="description">${value.description}</div>
            <div class="drop-head">Select your size & crust</div>
            <select id="dropdown">
                <option value="option1">Personal Plan</option>
                <option value="option2">Personal Stuffed Crust Maxx</option>
                <option value="option3">Medium Pan</option>
                <option value="option4">Medium Stuffed Crust Maxx</option>
                <option value="option5">Thin n Large Thin n Crispy</option>
            </select>
            <div class="btn">
                <button onclick="addToCard(${key})">Add To Card</button>
                <div class="price">Rs ${value.price.toLocaleString()}</div>
            </div>`;
    list.appendChild(newDiv);
  });
}

initApp();

function addToCard(key) {
  if (listCards[key] == null) {
    // copy product form list to list card
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}

function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
                </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}

function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}
