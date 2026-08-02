const products = [

{
    id:1,
    name:"Heat Press Machine",
    category:"Equipment",
    price:"QAR 2,500",
    image:"assets/images/products/heat-press.jpg"
},

{
    id:2,
    name:"Door Name Plate",
    category:"Door Name Plate",
    price:"QAR 85",
    image:"assets/images/products/door-name-plate.jpg"
},

{
    id:3,
    name:"Corporate Flag",
    category:"Flags",
    price:"QAR 150",
    image:"assets/images/products/flag.jpg"
},

{
    id:4,
    name:"MDF Frame",
    category:"MDF Frame",
    price:"QAR 120",
    image:"assets/images/products/mdf-frame.jpg"
},

{
    id:5,
    name:"Crystal Award",
    category:"Awards & Mementos",
    price:"QAR 250",
    image:"assets/images/products/award.jpg"
},

{
    id:6,
    name:"Promotional Mug",
    category:"Promotional Items",
    price:"QAR 35",
    image:"assets/images/products/mug.jpg"
},

{
    id:7,
    name:"Business Cards",
    category:"Marketing Materials",
    price:"QAR 60",
    image:"assets/images/products/business-card.jpg"
},

{
    id:8,
    name:"Rubber Stamp",
    category:"Stamps",
    price:"QAR 90",
    image:"assets/images/products/stamp.jpg"
}

];
const productGrid = document.querySelector(".product-grid");

function displayProducts(){

    productGrid.innerHTML="";

    products.forEach(product => {

    productGrid.innerHTML += `

<div class="product-card">

    <div class="product-image">

        <button class="wishlist">♡</button>

        <img
            src="${product.image}"
            alt="${product.name}"
            onerror="this.src='assets/images/no-image.jpg'">

    </div>

    <div class="product-info">

        <small>${product.category}</small>

        <h3>${product.name}</h3>

        <div class="rating">
            ★★★★★
        </div>

        <div class="price">
            ${product.price}
        </div>

        <div class="product-buttons">

            <button class="add-cart">
                🛒 Add Cart
            </button>

            <button class="view-product">
                View
            </button>

        </div>

    </div>

</div>

`;

});

}

displayProducts();