const increase = document.getElementById("inbtn") ;
const decrease = document.getElementById("debtn") ;
const reset= document.getElementById("rebtn") ; 
const counter  = document.getElementById("countlabel") ;
let count = 0 
increase.onclick = function() {
  count++ ; 
  counter.textContent=count ; 
}
decrease.onclick = function() {
    count-- ; 
    counter.textContent=count ; 
  }
  reset.onclick = function() {
    count=0; 
    counter.textContent=count ; 
  }
    