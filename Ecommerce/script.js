const products = [
    {
      name: "Wireless Headphones",
      description: "High-quality wireless headphones with noise cancellation and long battery life.",
      image: "./images/wireless_headphones.jpg",
      price: 49.99,
      rating: 4.5
    },
    {
      name: "Smart Watch",
      description: "Feature-rich smartwatch with health monitoring, GPS, and mobile notifications.",
      image: "./images/Smart_watch.jpg",
      price: 199.99,
      rating: 4.7
    },
    {
      name: "Gaming Laptop",
      description: "Powerful gaming laptop with a high-performance GPU and fast processor.",
      image: "./images/gamingPc.jpg",
      price: 999.99,
      rating: 4.8
    },
    {
      name: "Bluetooth Speaker",
      description: "Portable Bluetooth speaker with rich bass and waterproof design.",
      image: "./images/btSpeaker.jpg",
      price: 79.99,
      rating: 4.3
    },
    {
      name: "Fitness Tracker",
      description: "Slim fitness tracker with heart rate monitor and activity tracking.",
      image: "./images/FitnessTracker.jpg",
      price: 59.99,
      rating: 4.2
    },
    {
      name: "4K Action Camera",
      description: "Waterproof 4K action camera with wide-angle lens and image stabilization.",
      image: "./images/ActionCamera.jpg",
      price: 129.99,
      rating: 4.6
    },
    {
      name: "Noise-Canceling Earbuds",
      description: "True wireless earbuds with active noise cancellation and long battery life.",
      image: "./images/buds.jpg",
      price: 99.99,
      rating: 4.4
    },
    {
      name: "Electric Scooter",
      description: "Compact electric scooter with foldable design and extended battery range.",
      image: "./images/scooter.jpg",
      price: 299.99,
      rating: 4.5
    },
    {
      name: "Smart Home Camera",
      description: "Indoor smart security camera with night vision and two-way audio.",
      image: "./images/ActionCamera.jpg",
      price: 89.99,
      rating: 4.1
    },
    {
      name: "Portable Power Bank",
      description: "Fast-charging portable power bank with 10,000mAh capacity.",
      image: "./images/powerbank.jpg",
      price: 29.99,
      rating: 4.0
    }
  ];

  const cart = [];
  const productContainer = document.getElementById('product-container');

  productContainer.innerHTML = products.map((items, index) =>
   `<div class="col-lg-4">
      
       <img width="100" src="${items.image}" alt="productName">
       <h1>${items.name}</h1>
       <p>${items.description}</p>
       <span>Rs. ${items.price}</span>
       <span>${items.rating}</span>
       <button onclick="addToCart(${index})" class="btn btn-primary">Add to cart </button>
    </div>`
  )

  function addToCart(index){
    const product = products[index];
    cart.push(product); // Adds product to the cart array
    console.log(cart);
    updateCart(); // Refresh the cart display with updated info
  }
  
  const cartContainer = document.getElementById('cart');
  let total = 0;
  
  function updateCart() {
    cartContainer.innerHTML = ''; // Clear previous content
    total = 0; // Reset total for recalculation
    
    cart.forEach((item, index) => {
      total += item.price; // Add price of each item to total
      cartContainer.innerHTML += `
        <div class="cart-item">
          <img src="${item.image}" width="100">
          <h1>${item.name}</h1>
          <p>${item.description}</p>
          <span>Price: Rs. ${item.price}</span>
          <span>Rating: ${item.rating}</span>
          <button onclick="buyNow(${index})" class="btn btn-warning">Buy Now</button>
        </div>
      `;
    });
  
    // Display total and number of items
    document.getElementById('total').textContent = `Total: Rs. ${total}`;
    document.getElementById('cart-items-count').textContent = `Items in Cart: ${cart.length}`;
  }
  
  function buyNow(index) {
    alert(`Thank you for buying ${cart[index].name}!`);
    // Additional logic for purchase can be added here.
  }
  