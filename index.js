var btun=document.querySelectorAll(".like")
console.log(btun);
function change(event) {
    var cible=event.target
    if(cible.style.color=="red"){
        cible.style.color="#ABABAB"
    }else{
        cible.style.color="red"
    }
    
    console.log(cible)
}

for(var i=0;i<btun.length;i++){
    btun[i].addEventListener("click",change)
}
var del=document.querySelectorAll(".delete")
for (var i = 0; i < del.length; i++) {
    del[i].addEventListener("click",supprimer)}
function supprimer(event){
    var cible=event.target
    var parent=cible.parentElement.parentElement.parentElement.parentElement
     parent.querySelector("p").innerHTML=0
     parent.querySelector(".price").innerHTML=0
    console.log(parent)
    som()
}



    

 var btnPlus=document.querySelectorAll(".plus")  
 console.log(btnPlus)
 for(var i=0;i<btnPlus.length;i++){
    btnPlus[i].addEventListener("click",incrument)
}
 function incrument(event){
    var cible=event.target
    var btnCont=cible.parentElement
    var q=Number(btnCont.querySelector("p").innerHTML)
    q++
    btnCont.querySelector("p").innerHTML=q
     var tr=btnCont.parentElement.parentElement
     var unitP=Number(tr.querySelector(".unitPrice").innerHTML)
     tr.querySelector(".price").innerHTML=q*unitP
     som()
    console.log(unitP)
 }
 var btnMinus=document.querySelectorAll(".minus")
 for( var i=0;i<btnMinus.length;i++){
    btnMinus[i].addEventListener("click",dincrument)
    function dincrument(event){
    var cible=event.target
    var btnCont=cible.parentElement
    var q=Number(btnCont.querySelector("p").innerHTML)
    if(q>0){
    q--
    }
    btnCont.querySelector("p").innerHTML=q
    var tr=btnCont.parentElement.parentElement
    var unitP=Number(tr.querySelector(".unitPrice").innerHTML)
    tr.querySelector(".price").innerHTML=q*unitP
som()
    console.log(unitP)
 }
}
var price=document.querySelectorAll(".price")
function som(){
   var tot=0
for(var i=0;i<price.length;i++){
    tot+=Number(price[i].innerHTML)

   document.getElementById("total").innerHTML=tot
   }}











    
    // var btnCont=cible.parentElement(".btn-cont")
    // var q=number(document.parentElement.querySelectorAll("p").innerHTML)
    // q++
    // var tr=document.querySelector(tr)
    // var unitP=number(document.querySelector(".unitePrice").innerHTMl)
    //  var price=number(tr.querySelector(".price").innerHTML)
    //  price=unitp*q

    // console.log(price)
    
 
 
        
//         var din=document.querySelectorAll(".btn-cont") 
//         function dincrument(event){
//             var cible=event.target
//             var p=document.querySelectorAll("p")
//             var price=document.querySelectorAll(".price")
//             var btmunis=document.querySelectorAll(".munis")
//             var tr=document.querySelectorAll("tr")
//             var unitprice=document.querySelectorAll(".unitprice")
//              if(din=="minus"){
//                 p.tr=-1
//                 price.tr=price.tr-unitprice.tr}
                
               
//              }
 
 
// for(var i=0;i<din.length;i++){
//     din[i].addEventListener("click",dincrument)}


// var ch=document.querySelectorAll(".check")
//  function chbox(event){
//     var cible=event.target
//     var tab=document.querySelector("table")
//     var tr=document.querySelectorAll("tr")
//     var c=document.querySelectorAll(".check")
//     var tot=document.getElementById("#total")
//     if(cible.ch=="true"){
//         cible.tot=cible.tot+cible.price
    
//     }
//     console.log(cible)
//  }
// for(var i=0;i<ch.length;i++){
//     ch[i].addEventListener("click",chbox)

// }