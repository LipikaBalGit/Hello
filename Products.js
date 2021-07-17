
    const products = [
        { id: 1, src: 'Lipton.jpg', title: 'Tea', description: 'Hot Drink' },
        { id: 2, src: 'Kraft_Dinners.jpg', title: 'Kraft', description: 'Entree' },
        { id: 3, src: 'Macaroni.jpg', title: 'Macaroni', description: 'Entree' },
        { id: 4, src: 'Quaker.jpg', title: 'Quaker', description: 'Cereal' },

      ];
     
// Selecting our Elements.
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
/* The showProducts function  puts the  product array data in the main HTML tag by creating elments for those data. */
showProducts();
function showProducts(){
    // Creating elemnts for our data inside the main tag. 
    for(var i = 0; i < products.length;i++){
      const el = document.createElement('div');
      const image = document.createElement('img');
      const text = document.createElement('h2');
      text.innerHTML = "Name:"+products[i].title+" Desc:"+products[i].description;
      image.src =products[i].src;
      el.appendChild(image);
      el.appendChild(text);
      main.appendChild(el)
}
  }
  function searchProduct(productname){
    for(var i = 0; i < products.length;i++){
      console.log(productname);
      if ((productname)===products[i].title){
      const el = document.createElement('div');
      const image = document.createElement('img');
      const text = document.createElement('h2');
      text.innerHTML = "Name:"+products[i].title+" Desc:"+products[i].description;
      image.src =products[i].src;
      el.appendChild(image);
      el.appendChild(text);
      main.appendChild(el)
      }
    }
  }

// Prevent the Form from submitting if the search bar is empty.
form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';
     
    const searchTerm = search.value;
 /* Adding the value wriiten in the search bar to the search Api,
    in order to get the product we search for. */
    if (searchTerm) {
      searchProduct(searchTerm);
        search.value = "";
    }
});