let inp=document.querySelector("input");
let btn=document.querySelector("button");
let p=document.querySelector("p");
btn.addEventListener("click",()=>{
    console.log("buttton was clicked");
    let k=inp.value;
    k=parseInt(k);
    p.innerHTML=k;
    console.log(typeof k);
});