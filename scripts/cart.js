let cart = JSON.parse(localStorage.getItem("items")) || []
console.log("cart: ", cart);

console.log(cart.price)

cart.map(function(el, index){
    let box =document.createElement("div")
    box.setAttribute("class","box")
    
    let name = document.createElement("p")
    name.innerText = el.name;

    let image = document.createElement("img")
    image.src = el.image;

    let price = document.createElement("p")
    price.innerText = el.price;



       

   

    let btn = document.createElement("button")
    btn.innerText ="REMOVE"
    btn.setAttribute("id","remove")
    btn.addEventListener("click", function(){
        RemoveCart(el,index)
        
    
    })
    

     
  

     box.append(image,name,price,btn)
    document.getElementById("cart").append(box)

})



function RemoveCart(elem,index){
    console.log("hiii")
    cart.splice(index,1)

    localStorage.setItem("items",JSON.stringify(cart))
    window.location.reload()
}




var sum=0;
for(let i=0; i<cart.length; i++){
    sum+=cart[i].price
}

document.getElementById("cart_total").append(sum)

console.log("sum: ", typeof sum,sum);
