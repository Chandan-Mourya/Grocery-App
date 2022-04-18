
function SubmitForm(event){
    event.preventDefault()

    let form = document.getElementById("form")

    let name = form.name.value;
    console.log("name: ", name);

    let mob = form.number.value;
    console.log("mob: ", mob);

    let add = form.address.value;
    console.log("add: ", add);

    alert("Your order is accepted")
    
    let a=setInterval(function(){

        alert("Your order is being Packed ")
    },3000);

   

   let b= setInterval(function(){

        alert("Your order is in transit")
    },8000)
  
    let c= setInterval(function(){

      alert("Your order is out for delivery ")
    },10000)
   
    let d = setInterval(function(){

        alert("Order delivered")
    },12000)
    
    
}
