let full = document.getElementsByClassName("body");


for(let i=0;i<full.length;i++){
    full[i].addEventListener("click",function(){
        this.classList.toggle("active");
    });
    
}
