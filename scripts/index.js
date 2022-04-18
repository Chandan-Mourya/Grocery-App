// Store cart items in local storage with key: "items"

const url ="https://grocery-masai.herokuapp.com/items"

fetch(url).then(function (res){
    return res.json()
}).then(function (res){
    console.log("res: ", res);

    let arr = res.data

    arr.map(function(el,index){
        //console.log(el.name)
    
    let box =document.createElement("div")
    box.setAttribute("class","box")
    
    let name = document.createElement("p")
    name.innerText = el.name;

    let image = document.createElement("img")
    image.src = el.image;

    let price = document.createElement("p")
    price.innerText = el.price;

    let btn = document.createElement("button")
    btn.innerText ="Add To Cart"
    btn.setAttribute("id","add_to_cart")
    btn.addEventListener("click", function(){
        addToCart(el,index)
        
       
    })
    

     
  

     box.append(image,name,price,btn)
    document.getElementById("items").append(box)
    })
   
  
   

}).catch(function(err){
    console.log("err: ", err);

})
    

let itemarray = JSON.parse(localStorage.getItem("items")) || []


var total = itemarray.length;
    console.log("total: ", total);
    // let p = document.createElement("p")
    // p.innerText = total;
    document.getElementById("item_count").append(total)
    
function addToCart(elem ,index){

    itemarray.push(elem)
    console.log("itemarray: ", itemarray);

    localStorage.setItem("items",JSON.stringify(itemarray))

    window.location.reload()
    
    
    
}
