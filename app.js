let btn=document.querySelector("button");
let input=document.querySelector("input");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    let otp='';
    for(let i=0;i<input.value;i++){
       otp+=Math.floor(Math.random()*10).toString();
    }
    let item=document.createElement("li");
    item.innerText=otp;
    ul.appendChild(item);
    input.value="";
});