const menuEmail= document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const HamMenuIcon= document.querySelector(".menu")
const carMenuIcon= document.querySelector(".navbar-shopping-cart")
const productDetailCloseIcon= document.querySelector(".product-detail-close")
const mobileMenu= document.querySelector(".mobile-menu")
const shoppingCartContainer= document.querySelector("#shoppingCartContainer")
const productDetailContainer= document.querySelector("#productDetail")
const cardsContainer= document.querySelector(".cards-container")

menuEmail.addEventListener("click", toggleDesktopMenu)
HamMenuIcon.addEventListener("pointerenter", toggleMobileMenu)
carMenuIcon.addEventListener("pointerenter", toggleAside)
productDetailCloseIcon.addEventListener("pointerenter", closeProductDetail)

function toggleDesktopMenu(){
    const isAsideClosed= shoppingCartContainer.classList.contains("inactive")  

     if(!isAsideClosed){
        shoppingCartContainer.classList.add("inactive")
    }
    desktopMenu.classList.toggle("inactive")
}

function toggleMobileMenu(){
     const isAsideClosed= shoppingCartContainer.classList.contains("inactive")  

     if(!isAsideClosed){
        shoppingCartContainer.classList.add("inactive")
    }

    closeProductDetail()
    mobileMenu.classList.toggle("inactive")
}

function toggleAside(){
    const isMobileMenuClosed= mobileMenu.classList.contains("inactive")  

     if(!isMobileMenuClosed){
        mobileMenu.classList.add("inactive")
    }

    const isProductDetailClosed= productDetailContainer.classList.contains("inactive")  

     if(!isProductDetailClosed){
        productDetailContainer.classList.add("inactive")
    }

    shoppingCartContainer.classList.toggle("inactive")
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add("inactive")

    productDetailContainer.classList.remove("inactive")
}

function closeProductDetail(){
    productDetailContainer.classList.add("inactive")
}

const productList = []
productList.push({
    name: "Bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name: "Screen",
    price: 220,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name: "Laptop",
    price: 420,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

function renderProducts(arr){
    for (product of arr){
        const productCard= document.createElement("div")
        productCard.classList.add("product-card")

        const productImg = document.createElement("img")
        productImg.setAttribute("src", product.image)
        productImg.addEventListener("pointerenter", openProductDetailAside)

        const productInfo= document.createElement("div")
        productInfo.classList.add("product-info")

        const productInfoDiv= document.createElement("div")

        const productPrice= document.createElement("p")
        productPrice.innerText= `$${product.price}`

        const productName= document.createElement("p")
        productName.innerText= product.name

        productInfoDiv.append(productPrice, productName)

        const productInfoFigure= document.createElement("figure")

        const productInfoCart= document.createElement("img")
        productInfoCart.setAttribute("src", "./icons/bt_add_to_cart.svg")

        productInfoFigure.appendChild(productInfoCart)
        productInfo.append(productInfoDiv, productInfoFigure)

        productCard.append(productImg, productInfo)
        cardsContainer.appendChild(productCard)
    }
}

renderProducts(productList)