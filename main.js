const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu () {
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");    

    if(!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive");
    }


    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu () {
    const isAsideClosed = shoppingCartContainer.classList.contains("inactive");    

    if(!isAsideClosed) {
        shoppingCartContainer.classList.add("inactive");
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle("inactive")
}
  

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");  
    
    if(!isMobileMenuClosed) {
        mobileMenu.classList.add("inactive");
    }


    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");  
    
    if(!isProductDetailClosed) {
        productDetailContainer.classList.add("inactive");
    }


    
   shoppingCartContainer.classList.toggle("inactive")
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside() {
    productDetailContainer.classList.add("inactive");
}

const productList = [];
productList.push({
    name: "PlayStation 5",
    price: 990,
    image: "https://ecsonyb2c.vtexassets.com/arquivos/ps5.png",
});
productList.push({
    name: "Iphone 14 Pro Max",
    price: 1099,
    image: "https://exitocol.vtexassets.com/arquivos/ids/15562771/celular-iphone-14-pro-max-128gb-5g-morado.jpg?v=638043813619900000",
});
productList.push({
    name: "Portatil Asus",
    price: 1199,
    image: "https://dlcdnwebimgs.asus.com/files/media/6891C1E3-8B74-4528-85BB-EC784A0BB116/v1/img/ROG-Flow-X16-intro-poster.jpg",
});
productList.push({
    name: "TV SONY",
    price: 1499,
    image: "https://i.blogs.es/c8cc22/sony-smart-tv/1366_2000.jpg",
});
productList.push({
    name: "Apple Watch Serie 7",
    price: 449,
    image: "https://www.apple.com/newsroom/images/product/watch/standard/Apple_delivers-apple-watch-series-6_09152020_big.jpg.slideshow-medium.jpg",
});
productList.push({
    name: "Airpods Pro",
    price: 299,
    image: "https://static.vecteezy.com/system/resources/previews/015/192/978/non_2x/kharkiv-ukraine-january-27-2022-apple-airpods-pro-on-a-white-background-wireless-headphones-with-charging-case-and-a-box-apple-inc-is-an-american-technology-company-free-photo.JPG",
});
productList.push({
    name: "Monitor Samsung",
    price: 359,
    image: "https://www.sincable.mx/wp-content/uploads/2021/06/QjW-fSd-136816369_m.jpg",
});


function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openProductDetailAside)
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = "$" + product.price;
        const productName = document.createElement("p");
        productName.innerText = product.name;
        
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
       
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);

