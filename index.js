let btn=document.querySelector("button");
let inputs=document.querySelectorAll("input");
let resut=document.querySelector(".result");
let alert =document.querySelector(".alert");
btn.onclick=function(){
    let result =50;
    this.innerHTML
inputs.forEach(function(e){
    if(e.value==""){            
let div=document.createElement("div");
div.textContent= `${e.placeholder} is empty`;
div.className=`alert alert-danger`;
div.setAttribute("role","alert");
console.log(div);
alert.appendChild(div);
setTimeout(function() {
 alert.innerHTML="";
 }, 2000); 
    }})


        let div =document.createElement("div");
        inputs.forEach(function(e){
            let h1=document.createElement("h1");
            h1.append(e.value);
            div.appendChild(h1);
        })
        div.className="content";
        let button=document.createElement("button");
        button.className="btn btn-outline-danger delet";
        button.textContent="delet";
        div.appendChild(button);
        console.log(div);
        resut.append(div);
        localStorage.setItem("data",resut.innerHTML);
        button.onclick = function(e) {
            e.target.parentNode.remove();
            
            localStorage.setItem("data",resut.innerHTML);
            
        }
    }
    
    
    if(localStorage.getItem("data")){
        resut.innerHTML=localStorage.getItem("data");
        let button=document.querySelectorAll(".delet");
        button.forEach(function(e){
            e.onclick = function(e) {
                e.target.parentNode.remove();
            localStorage.setItem("data",resut.innerHTML);
                
            }
        })
    }