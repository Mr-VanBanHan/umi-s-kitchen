const animationbutton = document.querySelector('.animationbutton');
const curtainbox= document.querySelector('.blackbox');
const body1=document.getElementsByTagName('body')[0];
console.log(sessionStorage.length);


if (sessionStorage.length==1 || sessionStorage.length==0){
    gsap.fromTo('.animationtext',{y:-300,opacity:0,duration:2.5}, {y:0,opacity:1,duration:2.5})


    gsap.fromTo('.animationtext2',{opacity:0,duration:2}, {opacity:1,duration:2},'<95%')


    gsap.fromTo('.animationbutton',{opacity:0,duration:1}, {opacity:1,duration:1})

    
    
    //Eventlisteners//
    animationbutton.addEventListener('click', ()=> {
    gsap.fromTo('.animationtext',{y:0,duration:0.5},{y:-70,duration:0.5})
    gsap.fromTo('.animationtext2',{y:0,duration:0.5},{y:-70,duration:0.5})
    gsap.fromTo('.blackbox',{y:0,duration:2},{y:-1000,duration:2})
    gsap.fromTo('.animationtext',{y:0,duration:0.5},{y:200,duration:0.5})
    gsap.fromTo('.animationtext2',{y:0,duration:0.5},{y:200,duration:0.5})
    gsap.fromTo('.animationtext',{opacity:1,duration:1.2},{opacity:0,duration:1.2})
    gsap.fromTo('.animationtext2',{opacity:1,duration:1.2},{opacity:0,duration:1.2})
    body1.style='overflow=none';
    sessionStorage['animationcount']='1';
    console.log(sessionStorage);
});
} else{
    curtainbox.style.display='none';
    body1.style='overflow=none';
}

