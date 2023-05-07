const btn=document.getElementById("btn")
const cross=document.getElementById("cross")
const close=document.getElementById("close")
const yes=document.getElementById("yes")
const open=document.getElementById("open")

// click buttton to check the product 
btn.addEventListener("click",()=>{
    open.style.display="block"
})

// close the item 
close.addEventListener("click",()=>{
    open.style.display="none"
})

cross.addEventListener("click",()=>{
    open.style.display="none"
})

yes.addEventListener("click",()=>{
    open.style.display="none"
})