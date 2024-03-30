










var productData = [
    {
      id: "1",
      name: "Men Navy Blue Solid Sweatshirt",
      preview:
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      photos: [
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
        "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
      ],
      description:
        "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
      size: [1, 1, 0, 1, 0],
      isAccessory: false,
      brand: "United Colors of Benetton",
      price: 2599
    }
  ];
  


  var dynamicProduct = document.querySelector(".product_container");
  
  
  productData.map((item) => {
    dynamicProduct.innerHTML += `

      <div class="img_full">
      <img class ="main_img" src=${item.preview} alt="">
    </div>

    
    <div class="product_desc">
      <h2 class="title">${item.name}</h2>
      <h3 class="subtitle">${item.brand}</h3>
      <h3 class="price">Price Rs : <strong>${item.price}</strong></h3>
      <h4 class="subtitle">Description</h4>
      <p class="description">
       ${item.description}
      </p>
      <h4 class="subtitle">Product Preview</h4>
      <div class="product_preview">
         <img  class="small_img active"  src="${item.photos[0]}" alt="">
         <img  class="small_img" src="${item.photos[1]}" alt="">
         <img class="small_img" src="${item.photos[2]}" alt="">
         <img class="small_img" src="${item.photos[3]}" alt="">
         <img class="small_img" src="${item.photos[4]}" alt="">
      </div>
      <button class="add_to_cart" >Add to Cart</button>
    </div>
    `;
  });
  
  var smallImg = document.querySelectorAll(".small_img");
  
  smallImg.forEach((small) =>
    small.addEventListener("click", function (e) {
      var fullImg = document.querySelector(".main_img");
      var newImg = document.querySelectorAll(".small_img");
      fullImg.src = e.target.src;

      for (var i = 0; i < newImg.length; i++) {
        newImg[i].classList.remove("active");
      }
      e.target.classList.add("active");
    })
  );