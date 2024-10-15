const BASE_URL = "https://dummyjson.com"
const content = document.querySelector(".content__info")
const reviews = document.querySelector(".reviews")
const title = document.querySelector(".title")
const images = document.querySelector(".images")
const otherImg = document.querySelector(".other-images")
const purchase = document.querySelector(".purchase")
const logo = document.querySelector(".logo")


async function getData(){
    let query = new URLSearchParams(window.location.search)
    let id = query.get("q")

    const respone = await fetch(`${BASE_URL}/products/${id}`)
    respone
        .json()
        .then(res => createProduct(res))
        .catch(err => console.log(err))
}
getData()

function createProduct(data){
    console.log(data);
    title.innerHTML = `
    <h2>${data.title}</h2>
    <p>${data.description}</p>
    <p>brand: ${data.brand}</p>
    `
    images.innerHTML = `
    <img src=${data.images[0]}>
    `
    otherImg.innerHTML = `${data.images.map(i=>(`<img src=${i}>`))}`
    purchase.innerHTML = `
       <h2>${data.price}$ USD</h2>
        <p>dicount: ${data.discountPercentage}%</p>
    `

    data.reviews.forEach(item => {
        const divEl = document.createElement("div")
        divEl.className = "review"
        divEl.innerHTML = `
            <div class="user">
        <div class="name">
            <h2>${item.reviewerName}</h2>
        </div>
        <div class="rating">
            ${`<i class="fa-solid fa-star"></i>`.repeat(item.rating)}
            ${`<i class="fa-regular fa-star"></i>`.repeat(5-item.rating)}
        </div>
    </div>

    <div class="message">
        <p>${item.comment}</p>
    </div>
        `
        reviews.appendChild(divEl)
    });
}

logo.addEventListener("click", ()=>{
    open("/index.html")
})

logo.addEventListener("click", ()=>{
    open("/index.html")
})