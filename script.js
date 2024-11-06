// clock
setInterval(function(){
    let date=new Date();
    let houer=(date.getHours()<10?"0":"")+date.getHours();
    let minuets=(date.getMinutes() <10 ? "0":"")+date.getMinutes();
    let  seconds=(date.getSeconds() < 10 ? "0":"")+date.getSeconds();
    console.log(houer);
    
    if(houer > 12){
        houer= houer-12;
    } 

    document.querySelector('.clock').innerHTML=`${houer}: ${minuets} : ${seconds}` ;  
}  , 1000);
// nav
document.querySelector(".services-nav").onclick  = function () {
    document.querySelector(".services-menu").classList.toggle("open");
    document.querySelector(".pages-menu").classList.remove("openn");

}
document.querySelector(".pages-nav").onclick  = function () {
    document.querySelector(".pages-menu").classList.toggle("openn");
    document.querySelector(".services-menu").classList.remove("open");

}
// butn-up
window.onscroll = function(){
    if(window.scrollY > 800){
        document.querySelector(".btn-up").style.display='block';
    }else{
        document.querySelector(".btn-up").style.display ='none';
    }
    }
document.querySelector(".btn-up").onclick = function(){
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    })
}
// dark  mode
document.querySelector(".moon").onclick = function() {
    document.querySelector("body").classList.add("dark");
    document.querySelector(".sun").style.display="block";
    document.querySelector(".moon").style.display="none";

}
document.querySelector(".sun").onclick = function() {
    document.querySelector("body").classList.remove("dark");
    document.querySelector(".sun").style.display="none";
    document.querySelector(".moon").style.display="block";
}
document.querySelector(".menu").onclick=function(){
    document.querySelector(".nav-middle ul").classList.toggle("openh");
}